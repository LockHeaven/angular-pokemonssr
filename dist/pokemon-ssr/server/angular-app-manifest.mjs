
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pokemons/components/pokemon-list/pokemon-list.component.ts": [
    {
      "path": "chunk-3BMAHASF.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/pokemons/pokemons-page.component.ts": [
    {
      "path": "chunk-CIMDCYYD.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-3BMJEPIW.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-3BMAHASF.js",
      "dynamicImport": true
    }
  ],
  "src/app/pages/pokemon/pokemon-page.component.ts": [
    {
      "path": "chunk-Y6MF2NQA.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-3BMJEPIW.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/about/about-page.component.ts": [
    {
      "path": "chunk-5GED3FUH.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/contact/contact-page.component.ts": [
    {
      "path": "chunk-UXIOKWJH.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/pricing/pricing-page.component.ts": [
    {
      "path": "chunk-TSGMNBVP.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 4091, hash: 'e4bd3799c44b02577037e724029c35943505feb372fb2dba11e0ca6ad484ec58', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1109, hash: '3738e39a1f0b73d1743270435afd975ef7ea360f5fdfa167d815f253cbb9ce3b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FCI4U6B5.css': {size: 11329, hash: 'pvEFVsjGbdA', text: () => import('./assets-chunks/styles-FCI4U6B5_css.mjs').then(m => m.default)}
  },
};
