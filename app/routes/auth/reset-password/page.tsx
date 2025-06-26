import {Link} from "react-router";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {Button} from "~/components/ui/button";
import React from "react";

export default function Page() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="title">Redefina sua senha</h1>
        <p className="sub-title">Informe a nova senha abaixo para redefinir o acesso a sua conta.</p>
      </div>

      <form className="space-y-4">
        <div>
          <Label children="Endereço de e-mail"/>
          <Input tabIndex={1} placeholder="email@dominio.com.br"/>
        </div>

        <div>
          <Label children="Senha de acesso nova"/>
          <Input type="password" tabIndex={2} placeholder="Senha de acesso nova"/>
        </div>

        <div>
          <Label children="Confirmar senha"/>
          <Input type="password" tabIndex={3} placeholder="Repita sua senha"/>
        </div>

        <div className="pt-4">
          <Button className="w-full">Redefinir minha senha</Button>
        </div>
      </form>
    </div>
  );
}
