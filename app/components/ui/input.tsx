import * as React from "react"

import {cn} from "~/lib/utils"

function Input({className, type, onFocus, ...props}: React.ComponentProps<"input">) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      if (inputRef.current) {
        const textLength = inputRef.current.value.length;

        if (['text', 'search', 'tel', 'url', 'password'].includes(inputRef.current.type)) {
          inputRef.current.setSelectionRange(textLength, textLength);
        }
      }
    }, 0);

    if (onFocus) {
      onFocus(e);
    }
  };

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-14 w-full min-w-0 rounded-lg px-4 transition-[color] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "bg-input text-input-foreground placeholder:text-input-muted selection:bg-primary selection:text-primary-foreground text-lg font-bold tracking-wide",
        "border-input focus-visible:border-ring border focus-visible:border-2",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export {Input}
