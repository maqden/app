import React, {type PropsWithoutRef} from "react";
import {cn} from "~/lib/utils";

const HeroSection = ({...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <section className={cn('public-section items-center justify-center h-[76vh] max-lg:h-[46vh]', props.className)}>
      Hero Section
    </section>
  )
}
export default HeroSection
