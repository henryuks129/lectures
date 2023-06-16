import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Favourite from './component/Favourite';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/Favourite' element={<Favourite/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
