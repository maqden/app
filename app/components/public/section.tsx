import React, {type HTMLAttributes, type PropsWithChildren, type PropsWithoutRef} from "react";
import {cn} from "~/lib/utils";

const Section = ({children, ...props}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <section className={cn('flex flex-col py-24 xl:py-32', props.className)}>
      {children}
    </section>
  )
}

const SectionContent = ({children, ...props}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={cn('container flex flex-col mx-auto space-y-8 xl:space-y-12', props.className)}>
      {children}
    </div>
  )
}

const SectionTitle = ({title, small, ...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>> & { title: string; small: string; }) => {
  return (
    <article className={cn('uppercase text-center leading-none text-muted-foreground', props.className)}>
      <small className="text-xs font-sans font-medium tracking-tight opacity-75">{small}</small>
      <h1 className="text-sm font-sans font-bold">{title}</h1>
    </article>
  )
}

export {Section, SectionContent, SectionTitle}
