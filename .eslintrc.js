
/**
 * 自定义eslint tslint配置
 */
 // eslint-disable-next-line no-undef
 const base = require('./eslint/base');
  // eslint-disable-next-line no-undef
 const react = require('./eslint/react');
 // eslint-disable-next-line no-undef
 const ts = require('./eslint/ts');
  // eslint-disable-next-line no-undef
 module.exports = {
    root: true,
   "env": {
     "browser": true,
     "es2021": true
   },
   "globals": {
    "REACT_APP_ENV": true,
    "ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION":true,
    "process":true,
   },
   "extends": [
     "eslint:recommended",
     "plugin:react/recommended",
     "plugin:@typescript-eslint/recommended"
   ],
   "parser": "@typescript-eslint/parser",
   "parserOptions": {
     "ecmaFeatures": {
       "jsx": true
     },
     "ecmaVersion": 12,
     "sourceType": "module"
   },
   "plugins": [
    "import",
     "react",
     "@typescript-eslint"
   ],
   "rules": {
     ...base,
     ...react,
     ...ts,
     // 在 Promise 中使用 asnyc
     'no-async-promise-executor': 0,
     'default-case-last': 'off',
     'no-useless-backreference': 'off',
   }
 };

