import React, {type PropsWithoutRef} from "react";
import Thumbnail from "~/components/public/thumbnail";
import {Section, SectionContent, SectionTitle} from "~/components/public/section";

const HighlightsSection = ({...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>) => {
  const records = [
    {cover: 'https://picsum.photos/id/356/1024/600', title: 'Jato Dágua FLOWmod. MACH3', description: 'Jado dágua FLOW, mod. Mach3 ano de fabricação 2012, cabeçote de corte Paer 4, intensificador 60 Ksi/4137 BAR, tanque dágua 4600 x 2500 x 800mm, com sistema de purificação de água (abrandador), chiler marca Monofrio, 15000Kcal, tratamento de efluentes, equipamento recentemente desmontado para uso do espaço, disponível no interior do RS'},
    {cover: 'https://picsum.photos/id/948/1024/600', title: 'Prensa viradeira hidráulica PROMECAN ASAMA 300 x 75 ton', description: 'Prensa viradeira hidráulica Promecan Asama, 75/30, com 3000mm de área livre e capacidade de 75 ton , acompanha plataforma hidráulica, equipamento em mjito bom estado, disponível no Paraná'},
    {cover: 'https://picsum.photos/id/169/1024/600', title: 'Furadeira radial Manrod 40mm bandeira 1000mm', description: 'Furadeira radial Manrod, mod. MD442, com bandeira de 1000mm, furação 40mm, acompanha mesa cúbica, equipamento em perfeito estado, instalado na indústria no interior do RS disponível para exame e testes. Valor R$ 40.000,00 - Maiores informações somente no privado'},
    {cover: 'https://picsum.photos/id/928/1024/600', title: 'Contra ponto robusto, altura 710mm', description: 'Contra ponto muito robusto, altura de 710mm, para torno de grande porte / plateau ou especial , mangote com diâmetro de 100mm, disponível em Carazinho - RS (para envio por transportadora favor consulta embalagem)'},
    {cover: 'https://picsum.photos/id/276/1024/600', title: 'Serra fita 300mm', description: 'Serra fita 300mm, nova, descida hidráulica, fornecida diretamente pelo fabricante (equipamento nacional) , com opção de financiamento via Finame / proger / cartão BNDS, temos também serras de 200 a 800mm, também com cabeçote giratório, automáticas, semi automáticas, de coluna, etc,'},
  ];

  return (
    <Section className={props.className}>
      <SectionContent>
        <SectionTitle small="Destaques" title="Os mais acessados da semana"/>

        <div className="grid space grid-cols-12">
          {records.map((record, index) => (
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
  )
}
export default HighlightsSection
