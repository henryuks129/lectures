import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import Error from './components/Error';
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='*' element={<Error/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
