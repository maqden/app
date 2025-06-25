import {Outlet} from "react-router";
import {cn} from "~/lib/utils";
import {useStickyHeader} from "~/hooks/use-sticky-header";
import Brand from "~/components/ui/brand";
import {AlignRight} from "lucide-react";
import {Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "~/components/ui/sheet";
import Navigation from "~/components/ui/navigation";

const Layout = () => {
  const { showHeader, scrolled } = useStickyHeader(50);

  return (
    <>
      <div className="absolute inset-0 bg-[url(/images/hero.svg)] bg-[length:100%_auto] max-xl:bg-[length:300%_auto] bg-top bg-no-repeat -z-100"/>
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent -z-99" />

      <header
        className={cn('sticky top-0 z-40 transition-all duration-500', {
          'translate-y-0': showHeader,
          '-translate-y-full': !showHeader,
          'backdrop-blur': scrolled,
        })}
      >
        <div className="container flex items-center justify-between mx-auto p-4 xl:px-0 xl:py-8">
          <Brand className="text-4xl xl:text-6xl" />
          <Menu />
        </div>
      </header>

      <main className="px-4 xl:px-0">
        <Outlet/>
      </main>

      <footer className="bg-card text-card-foreground py-8 xl:py-16">
        <div className="space container flex flex-col-reverse items-center justify-between mx-auto px-4 opacity-65 xl:flex-row xl:p-0">
          <div className="text-center xl:text-start">
            <p>© 2024 MAQDEN Comércio de Máquinas.</p>
            <p>Todos os direitos reservados.</p>
          </div>
          <div className="text-center xl:max-w-xl xl:text-right">
            <p>A responsabilidade sobre máquinas e serviços anunciados na plataforma são única e exclusivamente responsabilidade dos anunciantes.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer clickable">
        <AlignRight className="size-8 xl:size-12" />
      </SheetTrigger>

      <SheetContent side="left" className="w-full max-w-[calc(100vw-2rem)] xl:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-start">
            <Brand className="text-4xl xl:text-6xl font-light" />
          </SheetTitle>

          <SheetDescription className="hidden" />
        </SheetHeader>

        <div className="grow flex items-center justify-center p-8">
          <Navigation />
        </div>

        <SheetFooter>
          Toggle
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default Layout
