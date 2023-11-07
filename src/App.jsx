import "./App.css";
import Blog from "./Components/Blog/Index";
import Impressum from "./Components/Impressum/Index";
import BlogCard from "./Components/BlogCard/Index";
import AboutUs from "./Components/AboutUs/Index";
import MainLayout from "./Components/MainLayout";
import { Routes, Route } from "react-router-dom";
//Artikel: "KHX0ss4jw8yFseFtyk4Np", "6hrcPL5uujZTtr7oxQxkA2"
const entryID = "KHX0ss4jw8yFseFtyk4Np";
export default function App() {
  console.log("id:", entryID, "Type:", typeof entryID);
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/blog" element={<BlogCard id={entryID} />} />
          <Route path="/imprint" element={<Impressum />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        {/* <AboutUs /> */}
        {/* <Blog /> */}
        {/* <Impressum /> */}
        {/* <BlogCard /> */}
      </MainLayout>
    </>
  );
}
