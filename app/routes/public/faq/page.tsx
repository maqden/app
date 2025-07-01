import {Section, SectionContent} from "~/components/public/section";
import NewsletterSection from "~/components/public/newsletter-section";
import {Card, CardContent} from "~/components/ui/card";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "~/components/ui/accordion";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {Textarea} from "~/components/ui/textarea";
import {Button} from "~/components/ui/button";
import {othersService} from "~/services/others-service";
import {useLoaderData} from "react-router";

export async function loader() {
  const faqs = await othersService.faqs();

  return {faqs};
}

export default function Page() {
  const {faqs} = useLoaderData<typeof loader>();

  return (
    <>
      <Section className="!pt-16">
        <SectionContent className="flex flex-col items-center justify-center">
          <div className="text-center mx-auto max-w-4xl space-y-4 pt-0 xl:space-y-8">
            <div className="space-y-2">
              <p className="uppercase text-xs text-primary font-bold font-title">Perguntas & Respostas</p>
              <h1 className="text-foreground font-hero text-3xl font-bold tracking-tight text-balance xl:text-6xl">Aqui você encontra as dúvidas mais comuns.</h1>
            </div>

            <p className="text-muted-foreground mx-auto max-w-lg text-center text-sm xl:text-lg font-medium text-pretty">Encontre respostas rápidas para as dúvidas mais comuns e saiba tudo sobre como usar nossa plataforma.</p>
          </div>

          <Card className="mx-auto w-full max-w-5xl px-6">
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((record, i) => (
                  <AccordionItem key={`item-${i}`} value={`item-${i}`}>
                    <AccordionTrigger className="font-hero text-lg xl:text-2xl font-bold cursor-pointer">{record.question}</AccordionTrigger>
                    <AccordionContent className="text-lg leading-relaxed font-medium tracking-wide">{record.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </SectionContent>
      </Section>

      <NewsletterSection className="bg-accent text-accent-foreground"/>

      <Section>
        <SectionContent className="flex-row justify-center space">
          <div className="flex items-center justify-center px-4 space-y-8 basis-full xl:basis-1/2 lg:space-x-8">
            <div className="grow max-w-md space-y-4 xl:space-y-8">
              <article className="space-y-2">
                <h2 className="font-title text-3xl leading-tight font-bold tracking-tight xl:text-3xl">Ainda ficou com dúvida?</h2>
                <p className="text-muted-foreground leading-relaxed font-bold">Preencha as informações abaixo para entrar em contato diretamente com nossa equipe de suporte!</p>
              </article>

              <form className="space-y-4">
                <div className="space-y-2">
                  <Label children="Nome"/>
                  <Input tabIndex={1} placeholder="Nome completo"/>
                </div>

                <div>
                  <Label children="Endereço de Email"/>
                  <Input tabIndex={2} placeholder="email@dominio.com.br"/>
                </div>

                <div>
                  <Label children="Mensagem"/>
                  <Textarea tabIndex={3} placeholder="Qual a sua dúvida?"/>
                </div>

                <div className="pt-4">
                  <Button className="w-full" tabIndex={4}>
                    Enviar minha dúvida
                  </Button>
                </div>
              </form>

              <p className="text-muted-foreground py-1 text-center text-sm">Qualquer envio de spam por este canal será descartado.</p>
            </div>
          </div>

          <div className="hidden relative aspect-square overflow-hidden rounded-3xl basis-1/2 lg:block">
            <img src="/images/contact.jpg" className="h-full w-full rounded-md object-cover" alt="Imagem ilustrativa de uma máquina industrial."/>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
