import {Outlet} from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Protected Layout</h1>
      <Outlet/>
    </div>
  )
}

export default Layout
