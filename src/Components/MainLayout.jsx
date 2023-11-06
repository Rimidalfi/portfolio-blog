import Header from "./Header/Index";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main><Outlet/></main>
      <Footer />
    </>
  );
}
