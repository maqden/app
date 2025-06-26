import {Link} from "react-router";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {Button} from "~/components/ui/button";
import React from "react";

export default function Page() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="title">Termos e condições de uso</h1>
        <p className="sub-title">Transparência e segurança para você. Acesse os termos e condições de uso da MAQDEN e conheça os detalhes do nosso acordo de utilização.</p>
      </div>

      <section className="no-scrollbar max-h-[65dvh] overflow-y-auto">
        <h2 className="text-lg font-bold">1. Introdução</h2>

        <p className="p-4 text-base">
          Este termo de uso estabelece as condições gerais para o uso do deste aplicativo desenvolvido por <b>Maqden comércio de máquinas LTDA</b>. Ao acessar e utilizar o aplicativo, o membro concorda expressamente com todos os termos e condições aqui estabelecidos.
        </p>

        <h2 className="mt-8 text-lg font-bold">2. Objeto</h2>
        <p className="p-4 text-base">
          O Aplicativo tem como objetivo principal permitir que os membros cadastrem suas máquinas industriais ou máquinas operatrizes para exposição, mediante a assinatura de um dos planos oferecidos. O Aplicativo também oferece funcionalidades adicionais que podem ser alteradas a
          critério do Desenvolvedor.
        </p>

        <h2 className="mt-8 text-lg font-bold">3. Cadastro e Conta de Membro</h2>
        <h3 className="p-4">3.1. Para utilizar o Aplicativo, o membro deverá se cadastrar, fornecendo informações precisas e completas.</h3>
        <h3 className="p-4">3.2. O membro é responsável por manter a confidencialidade de sua senha e por todas as atividades realizadas em sua conta.</h3>
        <h3 className="p-4">3.3. O Desenvolvedor se reserva o direito de suspender ou cancelar a conta de qualquer membro que viole estes termos.</h3>

        <h2 className="mt-8 text-lg font-bold">4. Conteúdo do membro</h2>
        <h3 className="p-4">4.1. O membro é o único responsável pelo conteúdo por ele publicado no Aplicativo.</h3>
        <h3 className="p-4">4.2. É expressamente proibido publicar qualquer tipo de conteúdo que:</h3>
        <ul className="list-disc space-y-2 px-12">
          <li>Seja ofensivo, discriminatório, ilícito ou que infrinja direitos de terceiros;</li>
          <li>Seja falso, enganoso ou que induza ao erro;</li>
          <li>Promova produtos ou serviços de terceiros não relacionados ao objetivo do aplicativo;</li>
          <li>Seja irrelevante ao tema de máquinas industriais ou máquinas operatrizes.</li>
        </ul>

        <h3 className="p-4">4.3. O Desenvolvedor se reserva o direito de remover qualquer conteúdo que viole estes termos.</h3>

        <h2 className="mt-8 text-lg font-bold">5. Direitos de Propriedade Intelectual</h2>
        <h3 className="p-4">5.1. Todos os direitos de propriedade intelectual sobre o aplicativo, incluindo, mas não se limitando a, marcas, logotipos, textos, imagens e softwares, pertencem ao desenvolvedor ou seus licenciantes.</h3>
        <h3 className="p-4">5.2. Ao publicar conteúdo no aplicativo, o membro concede ao desenvolvedor uma licença não exclusiva, mundial e gratuita para utilizar, reproduzir, modificar e distribuir tal conteúdo.</h3>

        <h2 className="mt-8 text-lg font-bold">6. Isenção de Responsabilidade</h2>
        <h3 className="p-4">6.1. O Desenvolvedor não se responsabiliza por qualquer dano direto, indireto, incidental ou consequencial decorrente do uso do aplicativo ou de qualquer informação nele contida.</h3>
        <h3 className="p-4">6.2. O Desenvolvedor não garante a precisão, integridade ou confiabilidade das informações fornecidas pelos membro.</h3>

        <h2 className="mt-8 text-lg font-bold">7. Alterações nestes Termos</h2>
        <p className="p-4 text-base">O Desenvolvedor se reserva o direito de modificar estes termos a qualquer momento. As alterações serão comunicadas aos membros e entrarão em vigor a partir da data de sua publicação no aplicativo.</p>

        <h2 className="mt-8 text-lg font-bold">8. Lei Aplicável e Foro</h2>
        <p className="p-4 text-base">Este termo será regido e interpretado de acordo com a legislação brasileira. Qualquer disputa será submetida ao foro da comarca de Carazinho.</p>
      </section>

      <div className="flex flex-col items-center max-w-sm">
        <Button onClick={() => history.back()} variant="link" className="link font-bold">
          Voltar
        </Button>
      </div>
    </div>
  );
}
