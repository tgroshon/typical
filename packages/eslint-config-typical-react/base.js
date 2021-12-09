/**
 * Copyright (c) 2021-present, Tommy Groshong.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require("@rushstack/eslint-patch/modern-module-resolution");

// This file contains the minimum ESLint configuration required for Create
// React App support, and is used as the `baseConfig` for `eslint-loader`
// to ensure that user-provided configs don't need this boilerplate.

module.exports = {
  root: true,

  parser: "@babel/eslint-parser",

  plugins: [
    "react",
    "node",
    // TODO: enable once promise plugin supports ESLint v8: https://github.com/xjamundx/eslint-plugin-promise/pull/219
    // "promise"
  ],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      presets: [require.resolve("babel-preset-react-app/prod")],
    },
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    // Generic JavaScript rules
    "no-var": "warn",
    "object-shorthand": ["warn", "properties"],
    "accessor-pairs": [
      "error",
      { setWithoutGet: true, enforceForClassMembers: true },
    ],
    camelcase: [
      "error",
      {
        allow: ["^UNSAFE_"],
        properties: "never",
        ignoreGlobals: true,
      },
    ],
    "constructor-super": "error",
    "default-case-last": "error",
    "eol-last": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "new-cap": ["error", { newIsCap: true, capIsNew: false, properties: true }],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-async-promise-executor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-useless-backreference": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": ["error", "functions"],
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implied-eval": "error",
    "no-import-assign": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
    "no-lone-blocks": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-prototype-builtins": "error",
    "no-useless-catch": "error",
    "no-mixed-operators": [
      "error",
      {
        groups: [
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"],
        ],
        allowSamePrecedence: true,
      },
    ],
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-redeclare": ["error", { builtinGlobals: false }],
    "no-regex-spaces": "error",
    "no-return-assign": ["error", "except-parens"],
    "no-self-assign": ["error", { props: true }],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "no-unused-vars": [
      "error",
      {
        args: "none",
        caughtErrors: "none",
        ignoreRestSiblings: true,
        vars: "all",
      },
    ],
    "no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: false },
    ],
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-with": "error",
    "one-var": ["error", { initialized: "never" }],
    "prefer-const": ["error", { destructuring: "all" }],
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
    "rest-spread-spacing": ["error", "never"],
    "spaced-comment": [
      "error",
      "always",
      {
        line: { markers: ["*package", "!", "/", ",", "="] },
        block: {
          balanced: true,
          markers: ["*package", "!", ",", ":", "::", "flow-include"],
          exceptions: ["*"],
        },
      },
    ],
    "symbol-description": "error",
    "template-curly-spacing": ["error", "never"],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "use-isnan": [
      "error",
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    "valid-typeof": ["error", { requireStringLiterals: true }],
    yoda: ["error", "never"],

    // node plugin: https://github.com/mysticatea/eslint-plugin-node
    "node/handle-callback-err": ["error", "^(err|error)$"],
    "node/no-callback-literal": "error",
    "node/no-deprecated-api": "error",
    "node/no-exports-assign": "error",
    "node/no-new-require": "error",
    "node/no-path-concat": "error",
    "node/process-exit-as-throw": "error",

    // TODO: enable once promise plugin supports ESLint v8: https://github.com/xjamundx/eslint-plugin-promise/pull/219
    // promise plugin: https://github.com/xjamundx/eslint-plugin-promise
    // "promise/param-names": "error",

    // react plugin: https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "react/jsx-uses-vars": "warn",
    "react/jsx-uses-react": "warn",
  },
};
