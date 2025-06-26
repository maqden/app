import {index, layout, route, type RouteConfig} from "@react-router/dev/routes";

export default [
  layout('routes/auth/layout.tsx', [
    route('acessar-conta', 'routes/auth/login/page.tsx'),
    route('criar-conta', 'routes/auth/register/page.tsx'),
  ]),

  layout('routes/public/layout.tsx', [
    index('routes/public/home/page.tsx'),
    route('precos', 'routes/public/prices/page.tsx'),
    route('perguntas-frequentes', 'routes/public/faq/page.tsx'),
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
