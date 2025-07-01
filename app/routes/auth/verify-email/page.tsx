import React from "react";
import {Link} from "react-router";
import {Button} from "~/components/ui/button";
import {Alert, AlertDescription, AlertTitle} from "~/components/ui/alert";
import {requireAuth} from "~/lib/auth";

export async function loader() {
  await requireAuth();
}

export default function Page() {
  const [showStatus, setShowStatus] = React.useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="title">Verifique seu email</h1>
        <p className="sub-title">Por favor, verifique seu endereço de e-mail clicando no link que acabamos de te enviar.</p>
      </div>

      <form className="space-y-2">
        {showStatus && (
          <Alert variant="success">
            <AlertTitle>Email enviado!</AlertTitle>
            <AlertDescription>Um novo link de verificação foi enviado para o endereço de e-mail que você informou durante o seu cadastro.</AlertDescription>
          </Alert>
        )}

        <div className="pt-4">
          <Button className="w-full" onClick={() => setShowStatus(true)}>
            Reenviar e-mail de verificação
          </Button>
        </div>
      </form>

      <div className="flex flex-col items-center max-w-sm space-y-2 text-muted-foreground">
        <p className="text-md space-x-2 text-center font-bold">
          Já possui uma conta? <Link to="/acessar-conta" className="link font-bold">Acesse sua conta</Link>
        </p>

        <p className="space-x-1 text-center text-xs">
          * ao se registrar em nossa plataforma, você estará automaticamente concordando com nossos <Link to="/termos-de-uso" className="link">termos de uso.</Link>
        </p>
      </div>
    </div>
  );
}
