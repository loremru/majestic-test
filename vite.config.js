import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const pathResolve = (pathStr) => {
  return path.resolve(__dirname, pathStr)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS({
    scan: {
      dirs: ['.'],
      fileExtensions: ['vue', 'js', 'ts']
    }
  })],
  resolve: {
    extensions: ['.js', '.ts', '.json', '.vue'],
    alias: {
      '@': pathResolve('./src'),
      '~': pathResolve('./node_modules'),
    },
  },
})
