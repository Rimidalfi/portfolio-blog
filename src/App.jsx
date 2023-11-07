import "./App.css";
import Blog from "./Components/Blog/Index";
import Impressum from "./Components/Impressum/Index";
import BlogCard from "./Components/BlogCard/Index";
import AboutUs from "./Components/AboutUs/Index";
import MainLayout from "./Components/MainLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Homepage/Index";
//Artikel: "KHX0ss4jw8yFseFtyk4Np", "6hrcPL5uujZTtr7oxQxkA2"
const entryID = "KHX0ss4jw8yFseFtyk4Np";
export default function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogcard" element={<BlogCard id={entryID} />} />
          <Route path="/blog" element={<Blog id={entryID} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/imprint" element={<Impressum />} />
        </Routes>
      </MainLayout>
    </>
  );
}
