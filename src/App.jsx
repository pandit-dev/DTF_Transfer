import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import Footer from './pages/Footer';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import HeatPress from './pages/HeatPress';
import ProductPage from './pages/ProductPage';
 

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
