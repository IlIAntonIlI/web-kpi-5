module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'standard',
        'plugin:sonar/recommended',
        'plugin:n/recommended',
        'eslint-config-prettier',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['sonar', 'n'],
    globals: {
        Response: 'readonly',
    },
    rules: {},
}
