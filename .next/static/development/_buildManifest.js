self.__BUILD_MANIFEST = {
  __rewrites: {
    beforeFiles: [],
    afterFiles: [
      { source: '\u002Fpublic\u002Fterms.html', destination: '\u002Fpages\u002Fapi\u002Fhtml.js' },
    ],
    fallback: [],
  },
  '/404': ['static\u002Fchunks\u002Fpages\u002F404.js'],
  '/_error': ['static\u002Fchunks\u002Fpages\u002F_error.js'],
  '/snippets': ['static\u002Fchunks\u002Fpages\u002Fsnippets.js'],
  '/snippets/[...slug]': ['static\u002Fchunks\u002Fpages\u002Fsnippets\u002F[...slug].js'],
  sortedPages: [
    '\u002F404',
    '\u002F_app',
    '\u002F_error',
    '\u002Fsnippets',
    '\u002Fsnippets\u002F[...slug]',
  ],
}
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
