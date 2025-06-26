import React from 'react'
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {Checkbox} from "~/components/ui/checkbox";
import {Link} from "react-router";
import {Button} from "~/components/ui/button";
import {Divider} from "~/components/ui/divider";
import {Alert, AlertDescription} from "~/components/ui/alert";

const LoginForm = () => {
  const [status, setStatus] = React.useState<boolean>(false)

  return (
    <>
      <Button variant="outline" size="sm" className="w-full" asChild>
        <a href="/login-with-google" className="flex items-center justify-center gap-1">
          <img src="/images/google.svg" alt="Google" className="size-5"/>
          acessar com o Goggle
        </a>
      </Button>

      <Divider text="ou" className="max-w-xs"/>

      <form className="space-y-4">
        {status && (
          <Alert variant="destructive">
            <AlertDescription>Não foi possível efetuar o acesso com as credênciais informadas.</AlertDescription>
          </Alert>
        )}

        <div>
          <Label children="Endereço de e-mail"/>
          <Input tabIndex={1} placeholder="email@dominio.com.br"/>
        </div>

        <div>
          <Label children="Senha de acesso"/>
          <Input type="password" tabIndex={2} placeholder="Senha de acesso"/>
        </div>

        <div className="flex items-center justify-between py-1 text-sm text-muted-foreground">
          <label className="flex items-center gap-x-1.5">
            <Checkbox name="remember"/>
            <span className="cursor-pointer select-none">Lembrar senha</span>
          </label>

          <Link to="/recuperar-senha" className="link">Esqueceu sua senha?</Link>
        </div>

        <div>
          <Button className="w-full" onClick={() => setStatus(true)}>Acessar minha conta</Button>
        </div>
      </form>
    </>
  )
}

export default LoginForm
