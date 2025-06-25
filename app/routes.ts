import {index, layout, prefix, route, type RouteConfig} from "@react-router/dev/routes";

export default [
  layout('routes/public/layout.tsx', [
    index('routes/public/home/page.tsx'),
  ]),

  // route('painel', 'routes/protected/layout.tsx', [
  //   index('routes/protected/home/page.tsx'),
  //
  //   route('configuracoes', 'routes/protected/settings/layout.tsx', [
  //     index('routes/protected/settings/profile/page.tsx'),
  //     route('assinaturas', 'routes/protected/settings/subscriptions/page.tsx'),
  //     route('ajustes', 'routes/protected/settings/options/page.tsx'),
  //     route('redes-sociais', 'routes/protected/settings/social-networks/page.tsx'),
  //     route('enderecos', 'routes/protected/settings/addresses/page.tsx'),
  //     route('telefones', 'routes/protected/settings/phones/page.tsx'),
  //   ]),
  // ]),
] satisfies RouteConfig;
