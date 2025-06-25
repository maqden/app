import React, {type PropsWithoutRef} from "react";
import {cn} from "~/lib/utils";
import {Link} from "react-router";

const Thumbnail = ({caption, link, ...props}: PropsWithoutRef<React.ImgHTMLAttributes<HTMLImageElement>> & { caption?: string; link?: string }) => {
  return (
    <Link to={link || '/'} className={cn('group relative overflow-hidden cursor-pointer shadow-lg rounded-3xl', props.className)} rel="noopener noreferrer">
      <figure>
        <img loading="lazy" {...props} alt={props.alt} className={cn('aspect-video object-cover overflow-hidden transform transition-all duration-150 group-hover:scale-105', props.className)} />

        <figcaption className={cn('absolute flex flex-col justify-end w-full inset-0 rounded-b-2xl bg-gradient-to-t from-black/90 text-white', { 'px-6 py-4': caption, 'p-8': !caption })}>
          <h1 className="text-2xl font-title font-bold tracking-tight line-clamp-1">{props.alt || 'Image'}</h1>
          <p className="line-clamp-1 opacity-60">{caption}</p>
        </figcaption>
      </figure>
    </Link>
  )
}
export default Thumbnail
