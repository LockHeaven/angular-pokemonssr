import { RenderMode, ServerRoute } from '@angular/ssr';
export const serverRoutes: ServerRoute[] = [
  {
    path: 'pokemons/:id', // This renders the "/" route on the client (CSR)
    renderMode: RenderMode.Client,
  },
  {
    path: '**', // This page is static, so we prerender it (SSG)
    renderMode: RenderMode.Prerender,
  },
];
