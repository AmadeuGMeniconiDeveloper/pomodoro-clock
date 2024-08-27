import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

import { LayoutContainer } from "./styled";

export function MainLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
