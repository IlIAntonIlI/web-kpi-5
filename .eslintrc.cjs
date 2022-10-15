module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['standard', 'plugin:sonar/recommended', 'eslint-config-prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    plugins: ['sonar'],
    rules: {},
}
