import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/",
  plugins: [vue()],
  modules: {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/my-project/'
      : '/'
  }
})
