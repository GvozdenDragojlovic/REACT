import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Laptop from './pages/laptops/Laptop';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
        <Route path="/laptops/:id" element={<Laptop />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
