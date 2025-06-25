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
    <div className={cn('container flex flex-col mx-auto space-y-8 xl:space-y-12 px-4 xl:px-0', props.className)}>
      {children}
    </div>
  )
}

const SectionTitle = ({title, small, ...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>> & { title: string; small: string; }) => {
  return (
    <article className={cn('uppercase flex items-center justify-center text-center leading-none text-muted-foreground gap-8 xl:gap-12 px-4 xl:px-72', props.className)}>
      <hr className="grow h-px"/>

      <div className="shrink">
        <small className="text-xs font-sans font-medium tracking-tight text-nowrap opacity-75">{small}</small>
        <h1 className="text-sm font-sans font-bold text-nowrap">{title}</h1>
      </div>

      <hr className="grow h-px"/>
    </article>
  )
}

export {Section, SectionContent, SectionTitle}
