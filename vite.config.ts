import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginMarkdown, { Mode } from 'vite-plugin-markdown'
import path from 'path'

const { default: markdownPlugin } = vitePluginMarkdown

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: './',
    plugins: [react(), markdownPlugin({ mode: [Mode.HTML] })],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 8000,
    },
    css: {
      preprocessorOptions: {
        less: {
          // 定义全局变量
          additionalData: `@cdnPrefix: '${env.VITE_CDN_PREFIX}';`,
        },
      },
    },
  }
})
