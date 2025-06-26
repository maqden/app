import React from 'react'
import {Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "~/components/ui/sheet";
import {AlignRight} from "lucide-react";
import Brand from "~/components/ui/brand";
import Navigation from "~/components/ui/navigation";

const Aside = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="cursor-pointer clickable" asChild>
        <AlignRight className="size-8 xl:size-12" />
      </SheetTrigger>

      <SheetContent side="left" className="w-full max-w-[calc(100vw-2rem)] md:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-start">
            <Brand className="text-4xl xl:text-6xl font-light" />
          </SheetTitle>

          <SheetDescription className="hidden" />
        </SheetHeader>

        <div className="grow flex items-center justify-center p-8">
          <Navigation setState={setOpen} />
        </div>

        <SheetFooter>
          Toggle
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default Aside
