/// <reference types="vite/client" />

interface ImportMetaEnv {
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  env?: {
    APP_API_URL?: string;
    APP_BUILD?: string;
    APP_BUILD_DATE?: string;
    APP_NAME?: string;
    [key: string]: string | undefined | number | boolean;
  };
}
