import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar'; // Ensure Navbar is imported
import Footer from './Components/Footer'; // Ensure Footer is imported
import NotPage from './Pages/NotPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import FaqPage from './Pages/FaqPage';
import ComeSoon from './Pages/ComeSoon';
import ThankYou from './Pages/ThankYou';
import BlogGrid from './Pages/BlogGrid';
import BlogLists from './Pages/BlogLists';
import SingleBlog from './Pages/SingleBlog';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/notpage", element: <NotPage /> },
      { path: "/privacypolicy", element: <PrivacyPolicy /> },
      { path: "/faqpage", element: <FaqPage /> },
      { path: "/comesoon", element: <ComeSoon /> },
      { path: "/thankyou", element: <ThankYou /> },
      { path: "/bloggrid", element: <BlogGrid /> },
      { path: "/bloglist", element: <BlogLists /> },
      { path: "/singleblog", element: <SingleBlog/> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
