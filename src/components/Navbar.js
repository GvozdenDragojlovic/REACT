import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from './SearchBar';

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav>
               <Link to="/" className='brand'>
                    <h1>Ponuda laptopova</h1>
               </Link> 
               <SearchBar />
               <Link to="/create">Dodaj laptop</Link>
            </nav>
        </div>
  )
}