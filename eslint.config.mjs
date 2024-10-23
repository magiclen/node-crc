import eslint from '@eslint/js';
import stylistic from "@stylistic/eslint-plugin";
 
import * as importPlugin from "eslint-plugin-import";
import globals from "globals";
import tseslint from "typescript-eslint";
 
export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // These rules relate to possible logic errors in code:
 
            "array-callback-return": "error",
            "no-constructor-return": "error",
            "no-inner-declarations": ["error", "both"],
            "no-promise-executor-return": "error",
            "no-self-compare": "error",
            "no-template-curly-in-string": "warn",
            "no-unmodified-loop-condition": "warn",
            "no-unreachable-loop": "error",
            "require-atomic-updates": "error",
 
            // These rules suggest alternate ways of doing things:
 
            "accessor-pairs": "error",
            "arrow-body-style": ["error", "as-needed"],
            "block-scoped-var": "error",
 
            "camelcase": ["error", {
                properties: "never",
            }],
 
            "consistent-this": ["error", "self"],
            "curly": "error",
            "default-case-last": "error",
 
            "eqeqeq": "error",
            "func-names": ["error", "as-needed"],
            "func-style": ["error", "expression"],
 
            "grouped-accessor-pairs": "error",
            "guard-for-in": "error",
            
            "logical-assignment-operators": ["error", "always", {
                enforceForIfStatements: true
            }],
 
            "new-cap": ["error", {
                newIsCap: true,
                capIsNew: true,
            }],
 
            "no-bitwise": ["error", {
                int32Hint: true,
            }],
 
            "no-caller": "error",
            "no-div-regex": "error",
            "no-eq-null": "error",
            "no-eval": "error",
            "no-extend-native": "error",
            "no-extra-bind": "error",
            "no-extra-label": "error",
            "no-implicit-coercion": "error",
            "no-implicit-globals": "error",
            "no-invalid-this": "error",
            "no-iterator": "error",
            "no-label-var": "error",
            "no-lone-blocks": "error",
            "no-lonely-if": "error",
            "no-multi-assign": "error",
            "no-nested-ternary": "error",
            "no-new": "error",
            "no-new-func": "error",
            "no-new-wrappers": "error",
            "no-object-constructor": "error",
            "no-octal-escape": "error",
 
            "no-plusplus": ["error", {
                allowForLoopAfterthoughts: true,
            }],
 
            "no-proto": "error",
            "no-return-assign": "error",
            "no-sequences": "error",
            "no-unneeded-ternary": "error",
            "one-var": ["error", "never"],
            "operator-assignment": "error",
            "prefer-arrow-callback": "error",
            "prefer-const": "error",
            "prefer-exponentiation-operator": "error",
            "prefer-numeric-literals": "error",
            "prefer-object-has-own": "error",
            "prefer-object-spread": "error",
            "prefer-regex-literals": "error",
            "prefer-rest-params": "error",
            "prefer-spread": "error",
            "prefer-template": "error",
            "radix": ["error", "as-needed"],
            "require-unicode-regexp": "error",
 
            "sort-imports": ["error", {
                ignoreDeclarationSort: true,
            }],
 
            "symbol-description": "error",
            "vars-on-top": "error",
 
            // These rules care about how the code looks rather than how it executes:
 
            "unicode-bom": "error",
        }
    },
    {
        rules: {
            // override
            "@typescript-eslint/no-require-imports": ["error", {
                allowAsImport: true,
            }],
 
            "@typescript-eslint/no-unused-vars": ["error", {
                args: "all",
                argsIgnorePattern: "^_",
                caughtErrors: "all",
                caughtErrorsIgnorePattern: "^_",
                destructuredArrayIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                ignoreRestSiblings: true,
            }],
 
            "@typescript-eslint/restrict-template-expressions": ["error", {
                allowBoolean: true,
                allowNullish: true,
                allowNumber: true,
                allowRegExp: true,
            }],
 
            // switch on
 
            "@typescript-eslint/consistent-type-exports": "error",
 
            "@typescript-eslint/consistent-type-imports": ["error", {
                disallowTypeAnnotations: false,
                fixStyle: "separate-type-imports",
                prefer: "type-imports",
            }],
 
            "@typescript-eslint/default-param-last": "error",
            "@typescript-eslint/explicit-function-return-type": "error",
 
            "@typescript-eslint/explicit-member-accessibility": ["error", {
                accessibility: "no-public",
            }],
 
            "@typescript-eslint/explicit-module-boundary-types": "error",
            "@typescript-eslint/method-signature-style": "error",
            "@typescript-eslint/no-import-type-side-effects": "error",
            "@typescript-eslint/no-loop-func": "error",
            "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
            "@typescript-eslint/no-unnecessary-qualifier": "error",
            "@typescript-eslint/no-use-before-define": "error",
            "@typescript-eslint/no-useless-empty-export": "error",
        },
    },
    stylistic.configs['recommended-flat'],
    {
        rules: {
            // override
 
            "@stylistic/arrow-parens": ["error", "always"],
            "@stylistic/brace-style": ["error", "1tbs", {}],
 
            "@stylistic/indent": ["error", 4, {
                SwitchCase: 1,
            }],
 
            "@stylistic/indent-binary-ops": ["error", 4],
            "@stylistic/lines-between-class-members": "off",
            "@stylistic/member-delimiter-style": ["error", {}],
            "@stylistic/multiline-ternary": ["error", "never"],
 
            "@stylistic/no-extra-parens": ["error", "all", {
                nestedBinaryExpressions: false,
            }],
 
            "@stylistic/no-mixed-operators": ["error", {}],
 
            "@stylistic/no-multiple-empty-lines": ["error", {
                max: 2,
                maxEOF: 0,
                maxBOF: 0,
            }],
 
            "@stylistic/no-trailing-spaces": ["error", {
                skipBlankLines: true,
            }],
 
            "@stylistic/object-curly-spacing": ["error", "always", {
                arraysInObjects: true,
                objectsInObjects: true,
            }],
 
            "@stylistic/quote-props": ["error", "as-needed"],
            "@stylistic/quotes": ["error", "double", {}],
            "@stylistic/semi": ["error", "always"],
 
            "@stylistic/semi-spacing": ["error", {
                before: false,
                after: false,
            }],
 
            "@stylistic/spaced-comment": ["error", "always", {}],
            "@stylistic/wrap-iife": ["error", "outside", {}],
            "@stylistic/yield-star-spacing": ["error", "after"],
 
            // switch on
 
            "@stylistic/array-bracket-newline": ["error", {
                minItems: 4,
                multiline: true,
            }],
 
            "@stylistic/array-element-newline": ["error", "consistent"],
            "@stylistic/function-call-argument-newline": ["error", "consistent"],
            "@stylistic/function-call-spacing": "error",
            "@stylistic/function-paren-newline": ["error", "multiline-arguments"],
 
            "@stylistic/generator-star-spacing": ["error", {
                before: false,
                after: true,
            }],
 
            "@stylistic/implicit-arrow-linebreak": "error",
            "@stylistic/jsx-quotes": ["error", "prefer-double"],
            "@stylistic/linebreak-style": "error",
 
            "@stylistic/newline-per-chained-call": ["error", {
                ignoreChainWithDepth: 3,
            }],
 
            "@stylistic/no-extra-semi": "error",
            "@stylistic/nonblock-statement-body-position": "error",
 
            "@stylistic/object-curly-newline": ["error", {
                "ObjectExpression": { "multiline": true, "minProperties": 4 },
                "ObjectPattern": { "multiline": true, "minProperties": 4 },
                "ImportDeclaration": { "multiline": true, "minProperties": 4 },
                "ExportDeclaration": { "multiline": true, "minProperties": 4 }
            }],
 
            "@stylistic/object-property-newline": ["error", {
                allowAllPropertiesOnSameLine: true,
            }],
 
            "@stylistic/semi-style": "error",
            "@stylistic/switch-colon-spacing": "error",
            "@stylistic/wrap-regex": "error",
        }
    },
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    {
        settings: {
            "import/resolver": {
                "typescript": true,
                "node": true,
            }
        },
        rules: {
            // override
 
            // switch on
 
            "import/no-empty-named-blocks": "error",
 
            "import/no-extraneous-dependencies": ["error", {
                devDependencies: [
                    "tests/**/*",
                    "**/*.test.ts",
                    "**/*.spec.ts",
                ],
            }],
 
            "import/no-mutable-exports": "error",
 
            "import/no-unused-modules": ["warn", {
                unusedExports: true,
                src: [
                    "src/**/*",
                ],
                ignoreExports: [
                    "src/lib.ts",
                ],
            }],
 
            "import/no-absolute-path": "error",
            "import/no-cycle": "error",
            "import/no-self-import": "error",
            "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
            "import/first": "error",
            "import/newline-after-import": "error",
            "import/no-named-default": "error",
            "import/no-namespace": "warn",
 
            "import/order": ["error", {
                "newlines-between": "always-and-inside-groups",
                alphabetize: {
                    order: "asc",
                },
                warnOnUnassignedImports: true,
            }],
        }
    },
    { ignores: ["eslint.config.mjs", "lib/*"], },
);