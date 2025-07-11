import {Outlet} from "react-router";
import {requireAuth} from "~/lib/auth";

export async function loader() {
  await requireAuth();
}

const Layout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Outlet/>
    </div>
  )
}

export default Layout
