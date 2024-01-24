import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-hex-FFCA00 border-hex-FFCA00 text-white cursor-pointer hover:bg-hex-262a37 hover:border-white border-1  disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['btn-secondary', 'px-4 py-1 rounded inline-block bg-white border-hex-262a37 text-hex-262a37 cursor-pointer hover:bg-hex-262a37 hover:text-hex-FFCA00 hover:border-hex-FFCA00 border-1  disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[1em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-hex-FFCA00 !outline-none'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Comfortaa',
        //  serif: 'DM Serif Display',
        //  mono: 'DM Mono',
      },
    }),
  ],
})
