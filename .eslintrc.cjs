module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['standard', 'plugin:sonar/recommended', 'eslint-config-prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['sonar'],
    globals: {
        Response: 'readonly',
    },
    rules: {},
}
