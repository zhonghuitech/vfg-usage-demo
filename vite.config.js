import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const iconPath = path.resolve(process.cwd(), 'node_modules/vfg/dist/assets/icons');
  console.log(iconPath)
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [iconPath, path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      })]
  }
})
