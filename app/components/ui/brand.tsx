import React, {type PropsWithoutRef} from 'react'
import {cn} from "~/lib/utils";

const Brand = ({...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={cn('flex items-center justify-center tracking-tighter max-lg:tracking-tight', props.className)}>
      <p className="font-brand text-foreground">maq</p>
      <p className="font-brand text-primary">den</p>
    </div>
  )
}
export default Brand
