// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@vite-pwa/nuxt"],
    pwa: {
        manifest: {
            name: "Nuxt 3 Teste Pwa",
            short_name: "Nuxt 3 Teste Pwa",
            description: "Testando Pwa",
            theme_color: "black",
            icons:[
                {
                    src: "/icons/icon_144x144.png",
                    sizes: "144x144",
                    type: 'image/png'

                },
                {
                    src: "/icons/icon_192x192.png",
                    sizes: "192x192",
                    type: 'image/png'

                },
                {
                    src: "/icons/icon_512x512.png",
                    sizes: "512x512",
                    type: 'image/png'

                },
            ]
        },
        workbox: {
            navigateFallback: "/",
        },
        devOptions: {
            enabled: true,
            type: "module",
        },
    },
});
