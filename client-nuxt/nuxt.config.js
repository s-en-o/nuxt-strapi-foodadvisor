export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/tailwind.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['@/plugins/repo.server.js', '@/plugins/strapi.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        '~/components',
        {
            path: '~/components/Strapi/',
            extensions: ['vue'],
        },
    ],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/composition-api/module',
        '@nuxt/postcss8',
        'nuxt-graphql-request',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/strapi', '@nuxtjs/tailwindcss'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },
    server: {
        port: 3001,
    },
    publicRuntimeConfig: {
        baseURL: process.env.URL_BASE,
    },
    // STRAPI
    strapi: {
        url: process.env.URL_API,
    },
    // GRAPHQL
    graphql: {
        /**
         * An Object of your GraphQL clients
         */
        clients: {
            default: {
                /**
                 * The client endpoint url
                 */
                endpoint: process.env.URL_API,
                /**
                 * Per-client options overrides
                 * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
                 */
                options: {},
            },
        },

        /**
         * Optional
         * default: true (this includes cross-fetch/polyfill before creating the graphql client)
         */
        useFetchPolyfill: true,
    },
};
