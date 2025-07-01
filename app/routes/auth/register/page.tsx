import {Link} from "react-router";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {Button} from "~/components/ui/button";
import React from "react";
import {requireGuest} from "~/lib/auth";

export async function loader() {
  await requireGuest();
}

export default function Page() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="title">Crie sua conta</h1>
        <p className="sub-title">Informe os dados no formulário abaixo para criar uma conta de forma totalmente gratuita!</p>
      </div>

      <form className="space-y-4">
        <div>
          <Label children="Nome completo"/>
          <Input tabIndex={1} placeholder="Nome do perfil"/>
        </div>

        <div>
          <Label children="Endereço de e-mail"/>
          <Input tabIndex={2} placeholder="email@dominio.com.br"/>
        </div>

        <div>
          <Label children="Senha de acesso"/>
          <Input type="password" tabIndex={3} placeholder="Senha de acesso"/>
        </div>

        <div>
          <Label children="Confirmar senha"/>
          <Input type="password" tabIndex={4} placeholder="Repita sua senha"/>
        </div>

        <div className="pt-4">
          <Button className="w-full">Criar conta</Button>
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
