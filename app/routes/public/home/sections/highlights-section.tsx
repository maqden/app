import React, {type PropsWithoutRef} from "react";
import {cn} from "~/lib/utils";
import Thumbnail from "~/components/public/thumbnail";

const HighlightsSection = ({...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <section className={cn('public-section', props.className)}>
      <div className="content">
        <article className="title">
          <small>Seleção do dia</small>
          <h1>Confira nossos destaques</h1>
        </article>

        <div className="grid grid-cols-12 gap-8">
          <Thumbnail src="https://picsum.photos/id/356/1024/600" alt="Jato Dágua FLOWmod. MACH3" caption="Jado dágua FLOW, mod. Mach3 ano de fabricação 2012, cabeçote de corte Paer 4, intensificador 60 Ksi/4137 BAR, tanque dágua 4600 x 2500 x 800mm, com sistema de purificação de água (abrandador), chiler marca Monofrio, 15000Kcal, tratamento de efluentes, equipamento recentemente desmontado para uso do espaço, disponível no interior do RS" className="col-span-6 max-lg:col-span-12"/>
          <Thumbnail src="https://picsum.photos/id/948/1024/600" alt="Prensa viradeira hidráulica PROMECAN ASAMA 300 x 75 ton" caption="Prensa viradeira hidráulica Promecan Asama, 75/30, com 3000mm de área livre e capacidade de 75 ton , acompanha plataforma hidráulica, equipamento em mjito bom estado, disponível no Paraná" className="col-span-6 max-lg:col-span-12"/>
          <Thumbnail src="https://picsum.photos/id/169/1024/600" alt="Furadeira radial Manrod 40mm bandeira 1000mm" caption="Furadeira radial Manrod, mod. MD442, com bandeira de 1000mm, furação 40mm, acompanha mesa cúbica, equipamento em perfeito estado, instalado na indústria no interior do RS disponível para exame e testes. Valor R$ 40.000,00 - Maiores informações somente no privado" className="col-span-4 max-lg:col-span-12"/>
          <Thumbnail src="https://picsum.photos/id/928/1024/600" alt="Contra ponto robusto, altura 710mm" caption="Contra ponto muito robusto, altura de 710mm, para torno de grande porte / plateau ou especial , mangote com diâmetro de 100mm, disponível em Carazinho - RS (para envio por transportadora favor consulta embalagem)" className="col-span-4 max-lg:col-span-12"/>
          <Thumbnail src="https://picsum.photos/id/276/1024/600" alt="Serra fita 300mm" caption="Serra fita 300mm, nova, descida hidráulica, fornecida diretamente pelo fabricante (equipamento nacional) , com opção de financiamento via Finame / proger / cartão BNDS, temos também serras de 200 a 800mm, também com cabeçote giratório, automáticas, semi automáticas, de coluna, etc," className="col-span-4 max-lg:col-span-12"/>
        </div>
      </div>
    </section>
  )
}
export default HighlightsSection
