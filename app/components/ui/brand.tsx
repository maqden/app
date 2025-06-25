import React, {type PropsWithoutRef} from 'react'
import {cn} from "~/lib/utils";
import {Link} from "react-router";

const Brand = ({...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <Link to="/">
      <div className={cn('flex items-center justify-center tracking-tighter max-lg:tracking-tight', props.className)}>
        <p className="font-brand text-foreground">maq</p>
        <p className="font-brand text-primary">den</p>
      </div>
    </Link>
  )
}
export default Brand
