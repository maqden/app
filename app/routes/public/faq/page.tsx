import {Section, SectionContent} from "~/components/public/section";
import NewsletterSection from "~/components/public/newsletter-section";
import {Card, CardContent} from "~/components/ui/card";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "~/components/ui/accordion";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";
import {Textarea} from "~/components/ui/textarea";
import {Button} from "~/components/ui/button";

export default function Page() {
  const records = [
    {question: 'O que é a MAQDEN e como funciona?', answer: 'A MAQDEN é um marketplace online especializado na divulgação de anúncios de máquinas e equipamentos industriais, além de serviços relacionados ao setor metal mecânico. Aqui, você pode criar anúncios para expor seus produtos e serviços para um público segmentado, mas as vendas não são realizadas diretamente pela plataforma. Os interessados entram em contato com os anunciantes para negociar diretamente.'},
    {question: 'Como posso anunciar minhas máquinas ou serviços na MAQDEN?', answer: 'Para criar um anúncio, basta cadastrar-se na nossa plataforma, acessar sua área privada e navegar pelas opções do menu na parte superior. Você poderá adicionar detalhes, fotos, tags, e uma descrição das suas máquina ou serviço. Após a aprovação, seu anúncio estará visível na plataforma para o público em geral.'},
    {question: 'A MAQDEN cobra alguma comissão sobre as vendas?', answer: 'A grande maioria dos nossos anúncios são de vendedores independentes. Nesses casos, a MAQDEN funciona como um ponto de encontro, e a negociação é 100% direta entre o comprador e o vendedor, sem comissões da plataforma. Para alguns equipamentos de clientes e parceiros estratégicos, nossa equipe gerencia o processo de venda. Nestes anúncios, a negociação é feita com o time da MAQDEN, seguindo condições pré-acordadas com o proprietário do equipamento.'},
    {question: 'Como faço para entrar em contato com um anunciante?', answer: 'Ao visualizar um anúncio, você encontrará um formulário de contato com anunciante. Basta utilizar essas informações para entrar e solicitar maiores detalhes e negociar diretamente a aquisição da máquina ou a contratação do serviço com o anunciante.'},
    {question: 'Como posso garantir que meu anúncio tenha mais visibilidade na MAQDEN?', answer: 'Todos os anúncios na MAQDEN são pagos, mas você pode aumentar a visibilidade do seu anúncio investindo em uma descrição detalhada, fotos de qualidade, tags e informações completas sobre seu produto ou serviço. O motor de busca da plataforma prioriza anúncios com mais riqueza de detalhes, facilitando a conexão com potenciais compradores interessados no seu equipamento ou serviço.'},
  ];

  return (
    <>
      <Section className="!pt-0">
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
                {records.map((record, i) => (
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
        <SectionContent className="flex items-center justify-center">
          <div className="grow">
            <article className="space-y-2">
              <h2 className="font-title text-3xl leading-tight font-bold tracking-tight xl:text-3xl">Ainda ficou com dúvida?</h2>
              <p className="text-muted-foreground leading-relaxed font-bold">Preencha as informações abaixo para entrar em contato diretamente com nossa equipe de suporte!</p>
            </article>

            <form className="space-y-4">
              <div>
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

          <div className="grow relative aspect-square overflow-hidden rounded-3xl max-lg:hidden">
            <img src="/images/contact.jpg" className="h-full w-full rounded-md object-cover" alt="Imagem ilustrativa de uma máquina industrial."/>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
