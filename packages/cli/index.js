import { oneLine, oneLineTrim } from "common-tags";
import getLogger from "loglevel-colored-level-prefix";
import MessageFormat from "messageformat";
import parser from "./parser";
import formatFiles from "./format-files";

const mf = new MessageFormat("en");
const logger = getLogger({ prefix: "typical" });

function onUncaughtException(err) {
  const level = logger.getLevel();
  const isTrace = level === 0;
  const traceResolution = oneLine`
    Run the script again with the LOG_LEVEL
    environment variable set to "trace"
  `;
  const resolutionSteps = [
    `${isTrace ? "✅ " : "1."} ${traceResolution}`,
    oneLine`
      2. Search existing issues on GitHub:
      ${oneLineTrim`
        https://github.com/tgroshon/typical/issues
        ?utf8=%E2%9C%93&q=${encodeURIComponent(err.message)}
      `}
    `,
    oneLine`
      3. Make a minimal reproduction in a totally separate repository.
      You can fork this one:
      https://github.com/kentcdodds/typical-repro
    `,
    oneLine`
      4. Post an issue with a link to your reproduction to the issues
      on GitHub: https://github.com/tgroshon/typical/issues/new
    `,
  ].join("\n  ");
  logger.error(
    oneLine`
      There has been an unknown error when running the typical CLI.
      If it's unclear to you what went wrong, then try this:
    `,
    `\n  ${resolutionSteps}`
  );
  throw err;
}

process.on("uncaughtException", onUncaughtException);

function normalize(options) {
  return Object.entries(options).reduce(
    (optionsAccumulator, [key, value]) =>
      key.includes("-")
        ? optionsAccumulator
        : { ...optionsAccumulator, [key]: value },
    {}
  );
}

// START

const args = process.argv.slice(2);

logger.trace("Parsing args: ", args);

formatFiles(normalize(parser.parse(args)));
