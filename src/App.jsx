import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar.jsx';
import Home from './pages/Home.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Footer from './pages/Footer.jsx';
import BlogPage from './pages/BlogPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import HeatPress from './pages/HeatPress.jsx';
import ProductPage from './pages/ProductPage.jsx';
 

function App() {
 

  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/blogs' element={<BlogPage/>}/>
        <Route path='/faq' element={<FAQPage/>}/>
        <Route path='/HeatPress' element={<HeatPress/>}/>
        <Route path='/products/:id' element={<ProductPage />}/>
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App
