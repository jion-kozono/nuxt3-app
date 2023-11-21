export default defineNuxtConfig({
  css: ['/assets/css/style.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: false,
    head: {
      title: 'Nuxt 3 basic',
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
      link: [{ rel: 'icon', href: '/icon.png' }],
    },
  },
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  routeRules: {
    // Static page generated on-demand, revalidates in background
    '/blog/**': { swr: true },
    // Static page generated on-demand once
    '/articles/**': { static: true },
    // Set custom headers matching paths
    '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },
    // Render these routes with SPA
    '/admin/**': { ssr: false },
    // Add cors headers
    '/api/v1/**': { cors: true },
    // Add redirect headers
    '/old-page': { redirect: '/new-page' },
    '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } },
  },
});
