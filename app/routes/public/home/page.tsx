import React, {useEffect} from "react";
import type {Route} from "./+types/page";
import NewsletterSection from "~/components/public/newsletter-section";
import {Section, SectionContent, SectionTitle} from "~/components/public/section";
import Thumbnail from "~/components/public/thumbnail";
import InputSearch from "~/components/public/input-search";
import {Link, useNavigate, useSearchParams} from "react-router";
import {Divider} from "~/components/ui/divider";
import {cn} from "~/lib/utils";
import {Search} from "lucide-react";

export async function loader() {
  return {
    highlights: [
      {cover: 'https://picsum.photos/id/356/1920/600', title: 'Jato Dágua FLOWmod. MACH3', description: 'Jado dágua FLOW, mod. Mach3 ano de fabricação 2012, cabeçote de corte Paer 4, intensificador 60 Ksi/4137 BAR, tanque dágua 4600 x 2500 x 800mm, com sistema de purificação de água (abrandador), chiler marca Monofrio, 15000Kcal, tratamento de efluentes, equipamento recentemente desmontado para uso do espaço, disponível no interior do RS'},
      {cover: 'https://picsum.photos/id/948/1920/600', title: 'Prensa viradeira hidráulica PROMECAN ASAMA 300 x 75 ton', description: 'Prensa viradeira hidráulica Promecan Asama, 75/30, com 3000mm de área livre e capacidade de 75 ton , acompanha plataforma hidráulica, equipamento em mjito bom estado, disponível no Paraná'},
      {cover: 'https://picsum.photos/id/169/1920/600', title: 'Furadeira radial Manrod 40mm bandeira 1000mm', description: 'Furadeira radial Manrod, mod. MD442, com bandeira de 1000mm, furação 40mm, acompanha mesa cúbica, equipamento em perfeito estado, instalado na indústria no interior do RS disponível para exame e testes. Valor R$ 40.000,00 - Maiores informações somente no privado'},
      {cover: 'https://picsum.photos/id/928/1920/600', title: 'Contra ponto robusto, altura 710mm', description: 'Contra ponto muito robusto, altura de 710mm, para torno de grande porte / plateau ou especial , mangote com diâmetro de 100mm, disponível em Carazinho - RS (para envio por transportadora favor consulta embalagem)'},
      {cover: 'https://picsum.photos/id/276/1920/600', title: 'Serra fita 300mm', description: 'Serra fita 300mm, nova, descida hidráulica, fornecida diretamente pelo fabricante (equipamento nacional) , com opção de financiamento via Finame / proger / cartão BNDS, temos também serras de 200 a 800mm, também com cabeçote giratório, automáticas, semi automáticas, de coluna, etc,'},
    ],
    populars: [
      {cover: 'https://picsum.photos/id/837/1920/600', title: 'Jato Dágua FLOWmod. MACH3', description: 'Jado dágua FLOW, mod. Mach3 ano de fabricação 2012, cabeçote de corte Paer 4, intensificador 60 Ksi/4137 BAR, tanque dágua 4600 x 2500 x 800mm, com sistema de purificação de água (abrandador), chiler marca Monofrio, 15000Kcal, tratamento de efluentes, equipamento recentemente desmontado para uso do espaço, disponível no interior do RS'},
      {cover: 'https://picsum.photos/id/736/1920/600', title: 'Prensa viradeira hidráulica PROMECAN ASAMA 300 x 75 ton', description: 'Prensa viradeira hidráulica Promecan Asama, 75/30, com 3000mm de área livre e capacidade de 75 ton , acompanha plataforma hidráulica, equipamento em mjito bom estado, disponível no Paraná'},
      {cover: 'https://picsum.photos/id/283/1920/600', title: 'Furadeira radial Manrod 40mm bandeira 1000mm', description: 'Furadeira radial Manrod, mod. MD442, com bandeira de 1000mm, furação 40mm, acompanha mesa cúbica, equipamento em perfeito estado, instalado na indústria no interior do RS disponível para exame e testes. Valor R$ 40.000,00 - Maiores informações somente no privado'},
      {cover: 'https://picsum.photos/id/918/1920/600', title: 'Contra ponto robusto, altura 710mm', description: 'Contra ponto muito robusto, altura de 710mm, para torno de grande porte / plateau ou especial , mangote com diâmetro de 100mm, disponível em Carazinho - RS (para envio por transportadora favor consulta embalagem)'},
      {cover: 'https://picsum.photos/id/486/1920/600', title: 'Serra fita 300mm', description: 'Serra fita 300mm, nova, descida hidráulica, fornecida diretamente pelo fabricante (equipamento nacional) , com opção de financiamento via Finame / proger / cartão BNDS, temos também serras de 200 a 800mm, também com cabeçote giratório, automáticas, semi automáticas, de coluna, etc,'},
      {cover: 'https://picsum.photos/id/387/1920/600', title: 'Forno tratamento térmico', description: 'Forno para tratamento Térmico novo, tsmb´m fbricamos para fundiçãso de alumiio / bronze, etc, fornecido diretamente pelo fabricante. Consulte conf. sua necessidade.'},
      {cover: 'https://picsum.photos/id/111/1920/600', title: 'Frezadora ferramenteira Time master 4 VS Iso 40', description: 'Frezadora ferramenteira TIMEMASTER, mod. 4VS, Iso 40, com digital 2 eixos, morsa e jg de pinças , equipamento em bom estado, disponível para exame no interior do RS -'},
      {cover: 'https://picsum.photos/id/635/1920/600', title: 'Torno CNC Nardini Logic 195 II 2012', description: 'Torno CNC Nardini, mod. Logic 195 II, ano de fabricação 2012, com placa e contra ponto pneumático, torre elétrica, comando Fagor, equipamento em perfeito estado de conservação, instalado na indústria e disponível para exame e testes no interior do RS'},
    ],
    services: [
      {cover: 'https://picsum.photos/id/292/1920/800', title: 'Torneiro Mecânico'},
      {cover: 'https://picsum.photos/id/367/1920/800', title: 'Torneiro Mecânico'},
      {cover: 'https://picsum.photos/id/787/1920/800', title: 'Torneiro Mecânico'},
    ],
    tags: ['torno', 'furadeira', 'maqden', 'torneiro']
  };
}

export default function Page({loaderData}: Route.ComponentProps) {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  useEffect(() => {
    let query = searchParams.get('q') ?? '';

    if (query) {
      navigate(`/pesquisar?q=${encodeURIComponent(query)}`);
    }
  }, [searchParams]);

  return (
    <>
      <Section className="items-center justify-center py-0 h-[65dvh]">
        <SectionContent className="items-center justify-center gap-2">
          <div className="text-center mx-auto max-w-md md:max-w-2xl xl:max-w-5xl">
            <h1 className="font-extrabold text-4xl md:text-5xl xl:text-7xl">A forma <b className="text-primary">mais fácil</b> de encontrar o equipamento que sua empresa precisa.</h1>
          </div>

          <div className="w-full max-w-xl space-y-4">
            <InputSearch />

            <div className="mx-auto space-y-2">
              <Divider text="mais buscados" className="mx-auto max-w-1/3 text-nowrap max-lg:max-w-1/2" />

              <div className="flex items-center justify-center gap-2">
                {loaderData.tags?.map((text) => (
                  <Link to={`/pesquisar?q=${encodeURIComponent(text)}`} key={`tag=${text}`} className="clickable bg-input text-input-foreground item-center flex max-w-fit justify-center gap-1 rounded-xs pl-2 pr-3 py-1 hover:brightness-75">
                    <Search className="size-3 leading-none" />
                    <span className="text-xs leading-none">{text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </SectionContent>
      </Section>

      <Section>
        <SectionContent>
          <SectionTitle small="Destaques" title="Os mais acessados da semana"/>

          <div className="grid space grid-cols-12">
            {loaderData.highlights.map((record, index) => (
              <Thumbnail
                key={index}
                src={record.cover}
                alt={record.title}
                caption={record.description}
                target="/account/product-or-service"
                className={`${index < 2 ? 'col-span-6' : 'col-span-4'} max-xl:col-span-12`}
              />
            ))}
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-accent text-accent-foreground">
        <SectionContent>
          <SectionTitle small="Populares" title="Os mais acessados da semana"/>

          <div className="grid space grid-cols-4 max-xl:grid-cols-1">
            {loaderData.populars.map((record, index) => (
              <Thumbnail
                key={index}
                src={record.cover}
                alt={record.title}
                target="/account/product-or-service"
                caption={record.description}
              />
            ))}
          </div>
        </SectionContent>
      </Section>

      <NewsletterSection/>

      <Section className="bg-accent text-accent-foreground">
        <SectionContent>
          <SectionTitle small="Serviços" title="Encontre Profissionais"/>

          <div className="grid grid-cols-3 space max-lg:grid-cols-1">
            {loaderData.services.map((record, index) => (
              <Thumbnail key={index} src={record.cover} alt={record.title} target="/account/product-or-service" className="aspect-square"/>
            ))}
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
