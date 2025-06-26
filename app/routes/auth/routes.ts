import {layout, route} from "@react-router/dev/routes";

export default layout('routes/auth/layout.tsx', [
  route('termos-de-uso', 'routes/auth/terms/page.tsx'),
  route('acessar-conta', 'routes/auth/login/page.tsx'),
  route('criar-conta', 'routes/auth/register/page.tsx'),
  route('verificar-email', 'routes/auth/verify-email/page.tsx'),
  route('restaurar-senha', 'routes/auth/reset-password/page.tsx'),
  route('recuperar-senha', 'routes/auth/forgot-password/page.tsx'),
  route('confirmar-senha', 'routes/auth/confirm-password/page.tsx'),
]);