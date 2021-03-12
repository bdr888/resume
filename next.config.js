module.exports = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID:
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT:
      process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
  },
  images: {
    // adds doman from contentful - see https://github.com/vercel/next.js/blob/master/errors/next-image-unconfigured-host.md
    domains: ['images.ctfassets.net'],
  },
}
