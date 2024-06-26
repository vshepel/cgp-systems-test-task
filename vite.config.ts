import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteSvgSpriteWrapper({
      outputDir: 'public',
      generateType: true,
      typeName: 'IIcon',
      typeFileName: 'Icon',
      typeOutputDir: 'src/type',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
