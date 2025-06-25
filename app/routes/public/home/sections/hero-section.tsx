import React, {type PropsWithoutRef} from "react";
import {Section, SectionContent} from "~/components/public/section";
import {cn} from "~/lib/utils";

const HeroSection = ({...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <Section>
      <SectionContent className={cn('items-center justify-center', props.className)}>
        <h1>Hero Section</h1>
      </SectionContent>
    </Section>
  )
}
export default HeroSection
