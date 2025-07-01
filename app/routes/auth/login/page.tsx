import React from "react";
import {Form, Link, redirect, useActionData} from "react-router";
import type {Route} from "./+types/page";
import {Button} from "~/components/ui/button";
import {Divider} from "~/components/ui/divider";
import {Alert, AlertDescription} from "~/components/ui/alert";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {Checkbox} from "~/components/ui/checkbox";
import {requireGuest} from "~/lib/auth";
import {api} from "~/lib/api";

export async function loader() {
  await requireGuest();
}

export async function action({request}: Route.ActionArgs) {
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  try {
    await api.getCsrfToken();

    const response = await api.post('/login', credentials);

    if (!response.ok) {
      return {error: 'Não foi possível efetuar o acesso com os dados informados.'};
    }

    return redirect('/painel');
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Erro no login'
    };
  }
}

export default function Page() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="title">Acesse sua conta</h1>
        <p className="sub-title">Clique no botão abaixo ou informe seus dados nos campos abaixo para ter acesso a sua conta!</p>
      </div>

      <Button variant="outline" size="sm" className="w-full" asChild>
        <a href="/login-with-google" className="flex items-center justify-center gap-1">
          <img src="/images/google.svg" alt="Google" className="size-5"/>
          acessar com o Goggle
        </a>
      </Button>

      <Divider text="ou" className="max-w-xs"/>

      <Form method="post" className="space-y-4">
        {actionData?.error.length && (
          <Alert variant="destructive">
            <AlertDescription>Não foi possível efetuar o acesso com as credênciais informadas.</AlertDescription>
          </Alert>
        )}

        <div>
          <Label children="Endereço de e-mail"/>
          <Input name="email" tabIndex={1} placeholder="email@dominio.com.br"/>
        </div>

        <div>
          <Label children="Senha de acesso"/>
          <Input name="password" type="password" tabIndex={2} placeholder="Senha de acesso"/>
        </div>

        <div className="flex items-center justify-between py-1 text-sm text-muted-foreground">
          <label className="flex items-center gap-x-1.5">
            <Checkbox name="remember" checked={true}/>
            <span className="cursor-pointer select-none">Lembrar senha</span>
          </label>

          <Link to="/recuperar-senha" className="link">Esqueceu sua senha?</Link>
        </div>

        <div>
          <Button className="w-full">Acessar minha conta</Button>
        </div>
      </Form>

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
