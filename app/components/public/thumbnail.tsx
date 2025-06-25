import React, {type PropsWithoutRef} from "react";
import {cn} from "~/lib/utils";

const Thumbnail = ({caption, link, ...props}: PropsWithoutRef<React.ImgHTMLAttributes<HTMLImageElement>> & { caption?: string; link?: string }) => {
  return (
    <figure className={cn('relative overflow-hidden', props.className)}>
      <a href={link || '/'} target="_blank" rel="noopener noreferrer">
        <img loading="lazy" {...props} alt={props.alt} className={cn('rounded-2xl aspect-video object-cover', props.className)} />
      </a>

      <figcaption className={cn('absolute flex flex-col justify-end w-full inset-0 rounded-b-2xl bg-gradient-to-t from-black/50 text-white', { 'p-6': caption, 'p-4': !caption })}>
        <h1 className="text-2xl font-bold tracking-tight line-clamp-1">{props.alt || 'Image'}</h1>
        <p className="line-clamp-1">{caption}</p>
      </figcaption>
    </figure>
  )
}
export default Thumbnail
