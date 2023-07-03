import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { info } from "../info/info";

function Layout() {
  const nav = info.nav;

  return (
    <>
      <MainNavigation nav={nav} />
      <Outlet />
    </>
  );
}

export default Layout;
