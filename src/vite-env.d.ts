/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly VITE_QINIU_CDN_PREFIX: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}