import "./App.css";
import Blog from "./Components/Blog/Index";
import Impressum from "./Components/Impressum/Index";
import AboutUs from "./Components/AboutUs/Index";
import MainLayout from "./Components/MainLayout";

export default function App() {
  return (
    <>
      <MainLayout>
        <AboutUs />
        {/* <Blog /> */}
        {/* <Impressum /> */}
      </MainLayout>
    </>
  );
}
