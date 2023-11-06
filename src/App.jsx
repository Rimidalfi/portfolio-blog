import "./App.css";
import Blog from "./Components/Blog/Index";
import Impressum from "./Components/Impressum/Index";
import BlogCard from "./Components/BlogCard/Index";
import AboutUs from "./Components/AboutUs/Index";
import MainLayout from "./Components/MainLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Homepage/Index"


export default function App() {

// const [page, setPage] = useState (<AboutUs />)
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        {/* <AboutUs />
        <Blog /> */}
        {/* {/* <Impressum /> */}
        {/* <BlogCard /> */}
      </MainLayout>
    </>
  );
 }
