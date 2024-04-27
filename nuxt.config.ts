// https://nuxt.com/docs/api/configuration/nuxt-config
const assetsDir = "src/shared/assets";

export default defineNuxtConfig({
  devtools: { enabled: true },

  // Keep some dirs under src, but the rest of them are in their default location
  dir: {
    pages: "src/pages",
    assets: `${assetsDir}`,
  },

  // Load SASS module
  css: [`@/${assetsDir}/scss/global.scss`],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/${assetsDir}/scss/_vars.scss" as *;`,
        }
      }
    }
  }

})
