import * as React from 'react';
import {cva, type VariantProps} from 'class-variance-authority';
import {cn} from "~/lib/utils";

const dividerVariants = cva(
  'relative flex items-center justify-center w-full mx-auto leading-none opacity-50',
  {
    variants: {
      variant: {
        default: 'text-sm',
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {
  text?: string;
}

function Divider({text, variant, className, ...props}: DividerProps) {
  return (
    <div className={cn(dividerVariants({variant}), className)} {...props}>
      <div className="flex-grow border-t border-foreground/50"/>
      {text && <span className="text-center mx-4 lowercase">{text}</span>}
      <div className="flex-grow border-t border-foreground/50"/>
    </div>
  );
}

export {Divider, dividerVariants};
