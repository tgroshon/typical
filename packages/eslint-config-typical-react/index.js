/**
 * Copyright (c) 2021-present, Tommy Groshong.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

// Inspired by https://github.com/airbnb/javascript but less opinionated.

// We use eslint-loader so even warnings are very visible.
// This is why we prefer to use "WARNING" level for potential errors,
// and we try not to use "ERROR" level at all.

// In the future, we might create a separate list of rules for production.
// It would probably be more strict.

// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  extends: [require.resolve("./base"), "prettier"],

  plugins: ["import", "flowtype", "jsx-a11y", "react-hooks", "prettier"],

  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },

        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ["@typescript-eslint"],
      // If adding a typescript-eslint version of an existing ESLint rule,
      // make sure to disable the ESLint rule here.
      rules: {
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
        "default-case": "off",
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
        "no-dupe-class-members": "off",
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
        "no-undef": "off",

        // Add TypeScript specific rules (and turn off ESLint equivalents)
        "@typescript-eslint/consistent-type-assertions": "warn",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "warn",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "warn",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
          "warn",
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            args: "none",
            ignoreRestSiblings: true,
          },
        ],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "warn",
      },
    },
  ],

  // NOTE: When adding rules here, you need to make sure they are compatible with
  // `typescript-eslint`, as some rules such as `no-array-constructor` aren't compatible.
  rules: {
    // import plugin: https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    "import/export": "error",
    "import/no-amd": "error",
    "import/first": "error",
    "import/no-absolute-path": [
      "error",
      { esmodule: true, commonjs: true, amd: false },
    ],
    "import/no-anonymous-default-export": "warn",
    "import/no-duplicates": "error",
    "import/no-named-default": "error",
    "import/no-webpack-loader-syntax": "error",

    // react plugin: https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-duplicate-props": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": [
      "warn",
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    "react/no-danger-with-children": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/no-is-mounted": "warn",
    "react/no-typos": "error",
    "react/require-render-return": "error",
    "react/style-prop-object": "warn",

    // jsx-a11y plugin: https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/anchor-has-content": "warn",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["noHref", "invalidHref"],
      },
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-role": ["warn", { ignoreNonDOM: true }],
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/heading-has-content": "warn",
    "jsx-a11y/iframe-has-title": "warn",
    "jsx-a11y/img-redundant-alt": "warn",
    "jsx-a11y/no-access-key": "warn",
    "jsx-a11y/no-distracting-elements": "warn",
    "jsx-a11y/no-redundant-roles": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "jsx-a11y/scope": "warn",

    // react-hooks plugin: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
    "react-hooks/rules-of-hooks": "error",

    // flowtype plugin: https://github.com/gajus/eslint-plugin-flowtype
    "flowtype/define-flow-type": "warn",
    "flowtype/require-valid-file-annotation": "warn",
    "flowtype/use-flow-type": "warn",

    // prettier plugin: https://github.com/prettier/eslint-config-prettier
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
