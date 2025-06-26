import * as React from "react"

import {cn} from "~/lib/utils"

function Textarea({className, ...props}: React.ComponentProps<"textarea">) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    const textLength = textarea.value.length;

    textarea.setSelectionRange(textLength, textLength);

    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  React.useEffect(() => {
    if (textareaRef.current) {
      adjustHeight();
    }
  }, [textareaRef.current?.value]);

  return (
    <textarea
      ref={textareaRef}
      data-slot="textarea"
      className={cn(
        "flex min-h-[150px] w-full overflow-hidden resize-none rounded-lg bg-input text-lg text-input-foreground px-4 py-2.5 font-bold ring-offset-input file:border-0 file:bg-transparent file:text-sm file:text-foreground placeholder:text-input-muted placeholder:font-medium focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onInput={adjustHeight}
      onFocus={handleFocus}
      {...props}
    />
  )
}

export {Textarea}
