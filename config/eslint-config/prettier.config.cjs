/**
 * @type {import("prettier").Config}
 */

module.exports = {
  // Prettier options only - do not include ESLint rules here.
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'auto',
  embeddedLanguageFormatting: 'auto',
}
