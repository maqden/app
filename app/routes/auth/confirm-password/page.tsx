import {Link} from "react-router";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {Button} from "~/components/ui/button";
import React from "react";

export default function Page() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="title">Confirme sua senha</h1>
        <p className="sub-title">Por motivos de segurança, informe sua senha novamente para prosseguir.</p>
      </div>

      <form className="space-y-4">
        <div>
          <Label children="Senha de acesso"/>
          <Input type="password" tabIndex={1} placeholder="Senha de acesso"/>
        </div>

        <div className="pt-4">
          <Button className="w-full">Confirmar</Button>
        </div>
      </form>

      <div className="flex flex-col items-center max-w-sm space-y-2 text-muted-foreground">
        <p className="text-md space-x-2 text-center font-bold">
          Não lembra sua senha? <Link to="/recuperar-senha" className="link font-bold">Recuperar senha</Link>
        </p>

        <p className="space-x-1 text-center text-xs">
          * ao se registrar em nossa plataforma, você estará automaticamente concordando com nossos <Link to="/termos-de-uso" className="link">termos de uso.</Link>
        </p>
      </div>
    </div>
  );
}
