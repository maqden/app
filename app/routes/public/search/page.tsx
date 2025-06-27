import type {Route} from "./+types/page";
import React, {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router";

import {Section, SectionContent} from "~/components/public/section";
import InputSearch from "~/components/public/input-search";
import Thumbnail from "~/components/public/thumbnail";

export async function loader({request}: Route.LoaderArgs) {
  // const url = new URL(request.url);

  return [
    {cover: 'https://picsum.photos/id/356/1024/600', title: 'Jato Dágua FLOWmod. MACH3', description: 'Jado dágua FLOW, mod. Mach3 ano de fabricação 2012, cabeçote de corte Paer 4, intensificador 60 Ksi/4137 BAR, tanque dágua 4600 x 2500 x 800mm, com sistema de purificação de água (abrandador), chiler marca Monofrio, 15000Kcal, tratamento de efluentes, equipamento recentemente desmontado para uso do espaço, disponível no interior do RS'},
    {cover: 'https://picsum.photos/id/948/1024/600', title: 'Prensa viradeira hidráulica PROMECAN ASAMA 300 x 75 ton', description: 'Prensa viradeira hidráulica Promecan Asama, 75/30, com 3000mm de área livre e capacidade de 75 ton , acompanha plataforma hidráulica, equipamento em mjito bom estado, disponível no Paraná'},
    {cover: 'https://picsum.photos/id/169/1024/600', title: 'Furadeira radial Manrod 40mm bandeira 1000mm', description: 'Furadeira radial Manrod, mod. MD442, com bandeira de 1000mm, furação 40mm, acompanha mesa cúbica, equipamento em perfeito estado, instalado na indústria no interior do RS disponível para exame e testes. Valor R$ 40.000,00 - Maiores informações somente no privado'},
    {cover: 'https://picsum.photos/id/928/1024/600', title: 'Contra ponto robusto, altura 710mm', description: 'Contra ponto muito robusto, altura de 710mm, para torno de grande porte / plateau ou especial , mangote com diâmetro de 100mm, disponível em Carazinho - RS (para envio por transportadora favor consulta embalagem)'},
    {cover: 'https://picsum.photos/id/276/1024/600', title: 'Serra fita 300mm', description: 'Serra fita 300mm, nova, descida hidráulica, fornecida diretamente pelo fabricante (equipamento nacional) , com opção de financiamento via Finame / proger / cartão BNDS, temos também serras de 200 a 800mm, também com cabeçote giratório, automáticas, semi automáticas, de coluna, etc,'},
    {cover: 'https://picsum.photos/id/486/1024/600', title: 'Serra fita 300mm', description: 'Serra fita 300mm, nova, descida hidráulica, fornecida diretamente pelo fabricante (equipamento nacional) , com opção de financiamento via Finame / proger / cartão BNDS, temos também serras de 200 a 800mm, também com cabeçote giratório, automáticas, semi automáticas, de coluna, etc,'},
    {cover: 'https://picsum.photos/id/387/1024/600', title: 'Forno tratamento térmico', description: 'Forno para tratamento Térmico novo, tsmb´m fbricamos para fundiçãso de alumiio / bronze, etc, fornecido diretamente pelo fabricante. Consulte conf. sua necessidade.'},
    {cover: 'https://picsum.photos/id/111/1024/600', title: 'Frezadora ferramenteira Time master 4 VS Iso 40', description: 'Frezadora ferramenteira TIMEMASTER, mod. 4VS, Iso 40, com digital 2 eixos, morsa e jg de pinças , equipamento em bom estado, disponível para exame no interior do RS -'},
    {cover: 'https://picsum.photos/id/736/1024/600', title: 'Prensa viradeira hidráulica PROMECAN ASAMA 300 x 75 ton', description: 'Prensa viradeira hidráulica Promecan Asama, 75/30, com 3000mm de área livre e capacidade de 75 ton , acompanha plataforma hidráulica, equipamento em mjito bom estado, disponível no Paraná'},
  ];
}

export default function Page({loaderData}: Route.ComponentProps) {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  useEffect(() => {
    let query = searchParams.get('q') ?? null;

    if (!query) {
      navigate(`/`);
    }
  }, [searchParams]);

  return (
    <Section className="!pt-4 !xl:pt-8">
      <SectionContent className="flex flex-col items-center min-h-[55dvh]">
        <div className="w-full max-w-2xl space-y-4">
          <InputSearch placeholder="Pesquisar"/>
        </div>

        <div className="space-y-4">
          <h1 className="text-center text-lg">Resultados de pesquisa para: <b className="text-primary brightness-75">{searchParams.get('q') ?? ''}</b></h1>

          <div className="grid grid-cols-3 space max-lg:grid-cols-1">
            {loaderData?.map((record, i) => (
              <Thumbnail key={i} src={record.cover} alt={record.title} caption={record.description} target="/account/product-or-service" className="aspect-video"/>
            ))}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}

