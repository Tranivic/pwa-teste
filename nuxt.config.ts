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
            theme_color: "black"
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
