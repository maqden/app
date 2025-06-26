import {index, route} from "@react-router/dev/routes";

export default route('painel', 'routes/protected/layout.tsx', [
  index('routes/protected/dashboard/page.tsx'),
]);