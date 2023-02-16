const siteMetadata = {
  title: 'ehsan0x Blog',
  author: 'ehsan0x',
  headerTitle: 'ehsan0x Blog',
  description:
    'my digital corner, where I delve into the latest of React, Blockchain, AI and share my insights on the life of a developer',
  slogan: 'challenging perspectives, shaping the future',
  snippets: 'Reuseable code snippets collected by Ehsan',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://ehsan0x.com',
  siteRepo: 'https://github.com/ehsna0x/ehsan0xblog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'contact@ehsan0x.com',
  github: 'https://github.com/ehsan0x',
  twitter: 'https://twitter.com/ehsanmamakani',
  linkedin: 'https://www.linkedin.com/in/ehsanmamakani/',
  website: 'https://ehsan0x.com',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: 'ehsan0x.com', // e.g. ehsan0x.com
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-6T405PRHZ3', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark_dimmed',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'ehsanmamakani',
  },
}

module.exports = siteMetadata
