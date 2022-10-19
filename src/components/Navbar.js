import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from './SearchBar';

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                
               <Link to="/" className='brand'>
                    <img src="https://www.freepnglogos.com/uploads/circle-png/red-circle-fox-tail-transparent-images-5.png" alt="logo"></img>
               </Link> 
               <h1>Laptop store</h1>
               <SearchBar />
               <Link to="/create">Dodaj laptop</Link>
            </nav>
        </div>
  )
}