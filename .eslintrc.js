module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["plugin:prettier/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "prettier/prettier": "warn",
        "no-console": 1,
        "space-before-function-paren": 0,
    },
}
