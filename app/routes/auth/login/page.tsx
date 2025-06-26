import LoginForm from "~/components/auth/login-form";
import {Link} from "react-router";

export default function Page() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="title">Acesse sua conta</h1>
        <p className="sub-title">Clique no botão abaixo ou informe seus dados nos campos abaixo para ter acesso a sua conta!</p>
      </div>

      <LoginForm/>

      <div className="flex flex-col items-center max-w-sm space-y-2 text-muted-foreground">
        <p className="text-md space-x-2 text-center font-bold">
          Não tem uma conta? <Link to="/criar-conta" className="link font-bold">Criar conta</Link>
        </p>

        <p className="space-x-1 text-center text-xs">
          * ao acessar nossa plataforma, você estará automaticamente concordando com nossos <Link to="/termos-de-uso" className="link">termos de uso.</Link>
        </p>
      </div>
    </div>
  );
}
