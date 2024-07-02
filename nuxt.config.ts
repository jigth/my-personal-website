// https://nuxt.com/docs/api/configuration/nuxt-config
const assetsDir = "src/shared/assets";

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@vesp/nuxt-fontawesome',
    '@nuxtjs/google-fonts',
  ],

  fontawesome: {
    icons: {
      solid: ['burger'],
    }
  },

  googleFonts: {
    families: {
      Montserrat: true,
      Merriweather: true,
      "Libre Baskerville": true,
      "Bodoni Moda": true,
    }
  },

  // Keep some dirs under src, but the rest of them are in their default location
  dir: {
    pages: "src/pages",
    layouts: "src/shared/layouts",
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
