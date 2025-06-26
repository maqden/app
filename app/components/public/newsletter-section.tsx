import {Section, SectionContent} from "~/components/public/section";
import React, {type PropsWithoutRef} from "react";
import {Input} from "~/components/ui/input";
import {Button} from "~/components/ui/button";

const NewsletterSection = ({...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <Section className={props.className}>
      <SectionContent className="items-center justify-center">
        <h1 className="font-hero mx-auto max-w-4xl text-6xl leading-none font-bold tracking-tight max-lg:max-w-full max-lg:text-center max-lg:text-2xl">Fique por dentro das novidades e atualizações dos nossos produtos!</h1>

        <form className="w-full">
          <div className="mx-auto w-full max-w-xl space-y-4">
            <div className="flex flex-col items-start justify-start gap-1">
              <div className="bg-input flex w-full items-center gap-2 rounded-lg px-2">
                <Input placeholder="email@dominio.com.br" className="h-18 w-full border-none font-bold bg-transparent px-4 focus:outline-none placeholder:text-muted-foreground/50"/>
                <Button variant="default" className="h-14 px-6 font-bold">
                  <span>Receber</span>
                  <span className="max-lg:hidden">Notificações</span>
                </Button>
              </div>
            </div>

            <h2 className="text-muted-foreground text-center text-sm leading-none font-bold uppercase max-lg:text-xs">Insira seu e-mail e comece agora mesmo!</h2>
          </div>
        </form>
      </SectionContent>
    </Section>
  )
}

export default NewsletterSection
