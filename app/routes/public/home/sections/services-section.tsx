import React, {type PropsWithoutRef} from "react";
import {cn} from "~/lib/utils";
import Thumbnail from "~/components/public/thumbnail";

const ServicesSection = ({...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <section className={cn('public-section', props.className)}>
      <div className="content">
        <article className="title">
          <small>Serviços</small>
          <h1>Encontre Profissionais</h1>
        </article>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-8">
          <Thumbnail src="https://picsum.photos/id/292/500/500" alt="Profissional de Tecnologia" caption="Profissional de Tecnologia" className="aspect-square"/>
          <Thumbnail src="https://picsum.photos/id/367/500/500" alt="Profissional de Tecnologia" caption="Profissional de Tecnologia" className="aspect-square"/>
          <Thumbnail src="https://picsum.photos/id/787/500/500" alt="Profissional de Tecnologia" caption="Profissional de Tecnologia" className="aspect-square"/>
        </div>
      </div>
    </section>
  )
}
export default ServicesSection
