// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@vite-pwa/nuxt"],
    pwa: {
        manifest: {
            name: "Nuxt 3 Teste Pwa",
            short_name: "Nuxt 3 Teste",
            start_url: "/",
            display: "standalone",
            orientation: "portrait-primary",
            background_color: "#ffffff",
            lang: "pt-br",
            scope: "/",
            description: "Testando Progressive Web App com Nuxt 3",
            theme_color: "#000000",
            icons: [
                {
                    src: "/icons/icon_144x144.png",
                    sizes: "144x144",
                    type: "image/png"
                },
                {
                    src: "/icons/icon_192x192.png",
                    sizes: "192x192",
                    type: "image/png"
                },
                {
                    src: "/icons/icon_512x512.png",
                    sizes: "512x512",
                    type: "image/png"
                }
            ],
            screenshots: [
                {
                    src: "/screenshots/image_1.png",
                    sizes: "765x829",
                    type: "image/png",
                    description: "image/png"
                },
                {
                    src: "/screenshots/image_1.png",
                    sizes: "765x829",
                    type: "image/png",
                    description: "image/png",
                    form_factor: "wide"
                }
            ],
            shortcuts: [
                {
                    name: "Pagina Inicial",
                    url: "/",
                    description: "Abre a pagina inicial",
                    icons: [
                        {
                            src: "/icons/icon_144x144.png",
                            sizes: "144x144",
                            type: "image/png"
                        }
                    ]
                }
            ],
            dir: "ltr",
            prefer_related_applications: false,
            related_applications: [
                {
                    platform: "windows",
                    url: "https://www.example-app.com",
                    id: "example.ExampleApp"
                },
                {
                    platform: "play",
                    url: "https://www.example-app-2.com"
                }
            ],
            iarc_rating_id: "12",
            display_override: [
                "window-controls-overlay",
                "standalone",
                "browser"
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
