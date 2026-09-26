/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Kit (kit.com) numeric form ID — Grow → Forms → your form */
  readonly VITE_KIT_FORM_ID?: string
  /** Kit public API key (v3) — Settings → Developer. Public key only, never the secret. */
  readonly VITE_KIT_API_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
