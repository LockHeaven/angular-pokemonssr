
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pokemons/components/pokemon-list/pokemon-list.component.ts": [
    {
      "path": "chunk-HXXP6GII.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/pokemons/pokemons-page.component.ts": [
    {
      "path": "chunk-A2JL2NW7.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-DE3D3U6X.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-HXXP6GII.js",
      "dynamicImport": true
    }
  ],
  "src/app/pages/pokemon/pokemon-page.component.ts": [
    {
      "path": "chunk-NXRJCMMD.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-DE3D3U6X.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/about/about-page.component.ts": [
    {
      "path": "chunk-22LLQBTI.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/contact/contact-page.component.ts": [
    {
      "path": "chunk-NCG2JTJ2.js",
      "dynamicImport": false
    }
  ],
  "src/app/pages/pricing/pricing-page.component.ts": [
    {
      "path": "chunk-5QICKRLJ.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 4091, hash: 'd1759b57756263a6c9dc74e23864e40ea31cb31a14ddd652ebc82a88f77a518e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1109, hash: '766a1b3e1af14e67e3a0e686730efbc988524d2dbf7fba256e9416858ba2b6c0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FCI4U6B5.css': {size: 11329, hash: 'pvEFVsjGbdA', text: () => import('./assets-chunks/styles-FCI4U6B5_css.mjs').then(m => m.default)}
  },
};
