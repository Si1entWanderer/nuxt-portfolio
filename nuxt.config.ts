// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/global.scss" as *;',
                },
            },
        },
    },

    googleFonts: {
        families: {
            Inter: [100, 200, 300, 400],
        },
    },

    modules: ["@nuxt/image", "@nuxtjs/google-fonts", "@nuxt/icon"],
});
