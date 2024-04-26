// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  dir: {
    pages: "src/pages" // Keep pages under src, but the rest of the folder in their default location
  }
})
