import {Section, SectionContent} from "~/components/public/section";
import React, {type PropsWithoutRef} from "react";

const NewsletterSection = ({...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <Section className={props.className}>
      <SectionContent className="items-center justify-center">
        <h1 className="text-center">Fique por dentro das novidades e atualizações dos nossos produtos!</h1>

        <div>
          <div>
            <input type="text" placeholder="Digite seu e-mail" />
            <button>Inscrever-se</button>
          </div>

          <div>Insira seu e-mail e comece agora mesmo!</div>
        </div>
      </SectionContent>
    </Section>
  )
}

export default NewsletterSection
