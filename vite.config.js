import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [
    vue(),
  ],
  proxy:{
    '/apii': {
      // target: 'http://10.238.77.120:8080',  // 接口域名
      target: 'https://relaystaging.zhimi.com/',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/apii': ''   //需要rewrite的,
      }
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
