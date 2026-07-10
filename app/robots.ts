import type { MetadataRoute } from 'next'

const SITE = 'https://blankbot.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/verify', '/verify/done', '/verify/blocked'],
    },
    sitemap: `${SITE}/sitemap.xml`,
  }
}
