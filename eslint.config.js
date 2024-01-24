import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: {
      /**
       * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
       * By default uses Prettier
       */
      css: true,
      /**
       * Format HTML files
       * By default uses Prettier
       */
      html: true,
      /**
       * Format Markdown files
       * Supports Prettier and dprint
       * By default uses Prettier
       */
      markdown: 'prettier',

      /**
       * By default uses Prettier
       * fix yaml load on windows
       */
      prettierOptions: {
        rangeEnd: Number.POSITIVE_INFINITY,
        proseWrap: 'preserve',
        arrowParens: 'always',
        htmlWhitespaceSensitivity: 'css',
        endOfLine: 'auto',
        quoteProps: 'as-needed',
        vueIndentScriptAndStyle: false,
        singleAttributePerLine: false,
      },
    },
    rules: {
      'no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
    },
  },
)
