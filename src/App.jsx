import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar'; // Ensure Navbar is imported
import Footer from './Components/Footer'; // Ensure Footer is imported
import BlogGrid from "./Pages/BlogGrid";
import BlogLists from "./Pages/BlogLists";
import SingleBlog from "./Pages/SingleBlog";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import NotPage from "./Pages/NotPage";
import FaqPage from "./Pages/FaqPage";
import ComeSoon from "./Pages/ComeSoon";
import ShopColumn from "./Pages/ShopColumn";
import ShopColumnSecond from "./Pages/ShopColumnSecond";

const Mainlayout = () =>{
  return(
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Mainlayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/privacypolicy", element: <PrivacyPolicy /> },
      { path: "/notpage", element: <NotPage /> },
      { path: "/faqpage", element: <FaqPage /> },
      { path: "/comesoon", element: <ComeSoon /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/bloggrid", element: <BlogGrid /> },
      { path: "/bloglist", element: <BlogLists /> },
      { path: "/singleblog", element: <SingleBlog /> },
      { path: "/shopcolumn", element: <ShopColumn /> },
      { path: "/shopcolumnsecond", element: <ShopColumnSecond /> }
    ]
  }
]);

function App(){
  return <RouterProvider router={router}/>;
}







export default App;
