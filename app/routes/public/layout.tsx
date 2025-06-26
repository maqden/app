import {Outlet} from "react-router";
import {cn} from "~/lib/utils";
import {useStickyHeader} from "~/hooks/use-sticky-header";
import Brand from "~/components/ui/brand";
import Aside from "~/components/public/aside";

const Layout = () => {
  const {showHeader, scrolled} = useStickyHeader(50);

  return (
    <>
      <div className="absolute inset-0 bg-[url(/images/hero.svg)] bg-[length:300%_auto] xl:bg-[length:100%_auto] lg:bg-[length:110%_auto] bg-top bg-no-repeat -z-100"/>
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent -z-99"/>

      <header
        className={cn('sticky top-0 z-40 transition-all duration-500', {
          'translate-y-0': showHeader,
          '-translate-y-full': !showHeader,
          'backdrop-blur backdrop-brightness-110': scrolled,
        })}
      >
        <div className="container flex items-center justify-between mx-auto p-4 xl:px-0 xl:py-8">
          <Brand className="text-4xl xl:text-6xl"/>
          <Aside/>
        </div>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer className="bg-card text-card-foreground py-8 xl:py-16">
        <div className="container flex flex-col-reverse items-center justify-between mx-auto px-4 opacity-65 xl:flex-row xl:p-0 gap-8">
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

export default Layout
