import React, {type PropsWithoutRef} from "react";
import {cn} from "~/lib/utils";
import Thumbnail from "~/components/public/thumbnail";

const PopularSection = ({...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <section className={cn('public-section', props.className)}>
      <div className="content">
        <article className="title">
          <small>Populares</small>
          <h1>Os mais acessados da semana</h1>
        </article>

        <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-8">
          <Thumbnail src="https://picsum.photos/id/837/1024/600" alt="Highlights" />
          <Thumbnail src="https://picsum.photos/id/736/1024/600" alt="Highlights" />
          <Thumbnail src="https://picsum.photos/id/283/1024/600" alt="Highlights" />
          <Thumbnail src="https://picsum.photos/id/918/1024/600" alt="Highlights" />
          <Thumbnail src="https://picsum.photos/id/486/1024/600" alt="Highlights" />
          <Thumbnail src="https://picsum.photos/id/387/1024/600" alt="Highlights" />
          <Thumbnail src="https://picsum.photos/id/111/1024/600" alt="Highlights" />
          <Thumbnail src="https://picsum.photos/id/635/1024/600" alt="Highlights" />
        </div>
      </div>
    </section>
  )
}

export default PopularSection
