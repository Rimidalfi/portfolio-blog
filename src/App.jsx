import "./App.css";
import Blog from "./Components/Blog/Index";
import Impressum from "./Components/Impressum/Index";
import AboutUs from "./Components/AboutUs/Index";
import MainLayout from "./Components/MainLayout";
import { Routes, Route } from "react-router-dom";

export default function App() {

 
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/blog" element={<Blog />} />
        </Routes>
        {/* <AboutUs /> */}
        {/* <Blog /> */}
        {/* <Impressum /> */}
      </MainLayout>
    </>
  );
 }
