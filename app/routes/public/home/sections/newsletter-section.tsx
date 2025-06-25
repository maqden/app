import React, {type PropsWithoutRef} from "react";
import {Section, SectionContent} from "~/components/public/section";

const NewsletterSection = ({...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <Section className={props.className}>
      <SectionContent>
        Newsletter Section
      </SectionContent>
    </Section>
  )
}
export default NewsletterSection
