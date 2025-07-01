import {Section, SectionContent} from "~/components/public/section";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs"
import Price from "~/components/public/price";
import {useLoaderData} from "react-router";
import {othersService} from "~/services/others-service";

export async function loader() {
  const prices = await othersService.prices();

  return {prices};
}

export default function Page() {
  const {prices} = useLoaderData<typeof loader>();

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
            {prices.filter(price => price.type === 'product').map((record, i) => <Price price={record} key={`price-${i}`}/>)}
          </TabsContent>
          <TabsContent value="service" className="flex flex-col space items-stretch justify-center py-8 xl:flex-row">
            {prices.filter(price => price.type === 'service').map((record, i) => <Price price={record} key={`price-${i}`}/>)}
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
