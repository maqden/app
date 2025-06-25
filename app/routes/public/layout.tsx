import {Outlet} from "react-router";
import {cn} from "~/lib/utils";
import {useStickyHeader} from "~/hooks/use-sticky-header";
import Brand from "~/components/ui/brand";

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
          'backdrop-blur-lg': scrolled,
        })}
      >
        <div className="container flex items-center justify-between mx-auto px-4">
          <Brand className="text-4xl" />
          <nav>NAV</nav>
        </div>
      </header>

      <main className="px-4">
        <Outlet/>
      </main>

      <footer className="bg-card text-card-foreground py-8">
        <div className="container flex items-center justify-between mx-auto">
          <div className="text-start max-xl:text-center">
            <p>© 2024 MAQDEN Comércio de Máquinas.</p>
            <p>Todos os direitos reservados.</p>
          </div>
          <div className="text-right max-xl:text-center">
            <p>A responsabilidade sobre máquinas e serviços anunciados na plataforma são única e exclusivamente responsabilidade dos anunciantes.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
