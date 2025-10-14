import base from './base.js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

// config/eslint-config/eslint.config.js
// Flat ESLint config that re-uses the base config from ./base.js

const baseConfigs = Array.isArray(base) ? base : [base];

export default [...baseConfigs, eslintConfigPrettier];
