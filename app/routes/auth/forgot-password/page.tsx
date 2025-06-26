import {Link} from "react-router";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {Button} from "~/components/ui/button";
import React from "react";

export default function Page() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="title">Esqueceu sua senha?</h1>
        <p className="sub-title">Sem problemas! Informe o seu endereço de e-mail e enviaremos um link para redefinição de senha, onde você poderá escolher uma nova.</p>
      </div>

      <form className="space-y-4">
        <div>
          <Label children="Endereço de e-mail"/>
          <Input tabIndex={1} placeholder="email@dominio.com.br"/>
        </div>

        <div className="pt-4">
          <Button className="w-full">Enviar link de recuperação</Button>
        </div>
      </form>

      <div className="flex flex-col items-center max-w-sm space-y-2 text-muted-foreground">
        <p className="text-md space-x-2 text-center font-bold">
          Lembrou sua senha? <Link to="/acessar-conta" className="link font-bold">Acessar conta</Link>
        </p>
      </div>
    </div>
  );
}
