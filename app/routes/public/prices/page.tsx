import {Section, SectionContent} from "~/components/public/section";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs"
import Price from "~/components/public/price";
import type { Route } from "./+types/page";

export async function loader() {
  return {
    products: [
      {name: 'Básico', description: 'O Plano Básico é perfeito para quem deseja anúnciar sua máquina de forma prática e eficiente.', amount: 4990, order: 1, features: ['1 Anúncio', 'Participação da newsletter', 'Marketing social', 'Relatórios desempenho'], settings: {popular: false}},
      {name: 'Revenda', description: 'O Plano Revenda é perfeito para quem deseja anunciar até 50 máquinas.', amount: 9990, order: 2, features: ['Até 50 anúncios', 'Participação da newsletter', 'Marketing social', 'Relatórios desempenho'], settings: {popular: true}},
      {name: 'Ilimitado', description: 'O Plano ilimitado é perfeito para quem tem um alto volume de máquinas para negociação.', amount: 34990, order: 3, features: ['Anúncios ilimitados', 'Participação da newsletter', 'Marketing social', 'Relatórios desempenho'], settings: {popular: false}},
    ],
    services: [
      {name: 'Único', description: 'O Plano Único é perfeito para quem deseja anúnciar seu serviço de forma prática e eficiente.', amount: 1990, order: 1, features: ['1 Anúncio', 'Participação da newsletter', 'Marketing social', 'Relatórios desempenho'], settings: {popular: false}},
      {name: 'Empreendedor', description: 'O Plano Empreendedor é perfeito para quem deseja anunciar até 10 serviços.', amount: 3990, order: 2, features: ['Até 50 anúncios', 'Participação da newsletter', 'Marketing social', 'Relatórios desempenho'], settings: {popular: true}},
      {name: 'Ilimitado', description: 'O Plano ilimitado é perfeito para quem tem presta um alto número de serviços para o público.', amount: 8990, order: 3, features: ['Anúncios ilimitados', 'Participação da newsletter', 'Marketing social', 'Relatórios desempenho'], settings: {popular: false}},
    ],
  };
}

export default function Page({loaderData}: Route.ComponentProps) {
  return (
    <Section className="!pt-16">
      <SectionContent className="flex flex-col items-center justify-center">
        <div className="text-center mx-auto max-w-4xl space-y-4 pt-0 xl:space-y-8">
          <div className="space-y-2">
            <p className="uppercase text-xs text-primary font-bold font-title">Planos & Preços</p>
            <h1 className="text-foreground font-hero text-3xl font-bold tracking-tight text-balance xl:text-6xl">Planos que se adaptam ao tamanho da sua empresa.</h1>
          </div>

          <p className="text-muted-foreground mx-auto max-w-lg text-center text-sm xl:text-lg font-medium text-pretty">Escolha o plano mais adequado para sua empresa e crie oportunidades para impulsionar suas vendas.</p>
        </div>

        <Tabs defaultValue="product" className="w-full mx-auto">
          <TabsList className="w-full max-w-xl mx-auto">
            <TabsTrigger value="product">Máquinas</TabsTrigger>
            <TabsTrigger value="service">Serviços</TabsTrigger>
          </TabsList>

          <TabsContent value="product" className="flex flex-col space items-stretch justify-center py-8 xl:flex-row">
            {loaderData.products.map((product, i) => <Price price={product} key={`product-price-${i}`}/>)}
          </TabsContent>
          <TabsContent value="service" className="flex flex-col space items-stretch justify-center py-8 xl:flex-row">
            {loaderData.services.map((service, i) => <Price price={service} key={`service-price-${i}`}/>)}
          </TabsContent>
        </Tabs>


        <p className="inline-flex items-center text-muted-foreground text-sm gap-1">Assinaturas gerenciadas por:
          <a href="https://www.stripe.com" target="_blank">
            <img src="/images/stripe.png" className="h-5" alt="Stripe.com"/>
          </a>
        </p>
      </SectionContent>
    </Section>
  );
}
