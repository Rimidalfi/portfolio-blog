import "./App.css";
import Blog from "./Components/Blog/Index";
import Impressum from "./Components/Impressum/Index";
import AboutUs from "./Components/AboutUs";
import MainLayout from "./Components/MainLayout";
// import { BrowserRouter, Routes, Route} from "react-router-dom"


export default function App() {

// const [page, setPage] = useState (<AboutUs />)
  return (
    <BrowserRouter>
    <MainLayout>
      <AboutUs />
    <Routes>
      <Route path="/AboutUs" element={<AboutUs />}/>
  </Routes>
    
     </MainLayout>
    </BrowserRouter>
    
  );
 }
