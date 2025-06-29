import {index, layout, route} from "@react-router/dev/routes";

export default layout('routes/public/layout.tsx', [
  index('routes/public/home/page.tsx'),
  route('precos', 'routes/public/prices/page.tsx'),
  route('pesquisar', 'routes/public/search/page.tsx'),
  route('perguntas-frequentes', 'routes/public/faq/page.tsx'),

  route(":account", "routes/public/account/page.tsx", [
    route(":showcase", "routes/public/showcase/page.tsx"),
  ]),
]);