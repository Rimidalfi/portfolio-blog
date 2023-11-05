import "./App.css";
import Blog from "./Components/Blog/Index";
import Impressum from "./Components/Impressum/Index";
import MainLayout from "./Components/MainLayout";

export default function App() {
  return (
    <>
      <MainLayout>
        <Blog />
        {/* <Impressum /> */}
      </MainLayout>
    </>
  );
}
