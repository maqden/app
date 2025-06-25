import React, {type PropsWithoutRef} from "react";
import {cn} from "~/lib/utils";

const NewsletterSection = ({...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <section className={cn('public-section', props.className)}>
      <div className="content">
        Newsletter Section
      </div>
    </section>
  )
}
export default NewsletterSection
