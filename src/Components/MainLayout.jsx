import Header from "./Header/Index";
import Footer from "./Footer/Index";


export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
