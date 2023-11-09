import "./App.css";
import Blog from "./Components/Blog/Index";
import Impressum from "./Components/Impressum/Index";
import BlogCard from "./Components/BlogCard/Index";
import AboutUs from "./Components/AboutUs/Index";
import MainLayout from "./Components/MainLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Homepage/Index";
import BlogFeed from "./Components/BlogFeed/Index";

export default function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/imprint" element={<Impressum />} />
          <Route path="/blogfeed" element={<BlogFeed />} />
        </Routes>
      </MainLayout>
    </>
  );
}
