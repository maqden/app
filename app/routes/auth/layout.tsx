import {Outlet} from "react-router";
import Brand from "~/components/ui/brand";

const Layout = () => {
  return (
    <div className="flex h-screen p-4 xl:p-8">
      <div className="flex flex-col items-center justify-center basis-full xl:basis-1/2">
        <div className="flex flex-col items-start space w-full max-w-md">
          <Brand className="text-4xl xl:text-6xl"/>

          <div className="auth">
            <Outlet/>
          </div>
        </div>
      </div>

      <div className="hidden relative aspect-square overflow-hidden rounded-3xl basis-1/2 lg:block">
        <img src="/images/auth.jpg" className="h-full w-full rounded-md object-cover" alt="Imagem ilustrativa de uma máquina industrial."/>
      </div>
    </div>
  )
}

export default Layout
