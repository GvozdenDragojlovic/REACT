import './LaptopList.css';
import { Link } from 'react-router-dom';

export default function LaptopList({ laptops }) {
  

  if(laptops.length === 0) {
    return <div className='error'>Nema laptopova za prikaz...</div>
  }

  return ( 
    <div className='car-list'>
        {laptops.map(laptop => (
            <div key={laptop.id} className='card'>
                <h3>{laptop.title}</h3>
                <div className='card-img-center'>
                <img
                className="card-img"
                src={laptop.photo}
                alt="Neka slika"
                />
                </div>
                <p>CPU model: {laptop.cpu}</p>
                <p>Ram memorija: {laptop.memory}</p>
                <div>{laptop.description.substring(0, 25)}...</div>
                <Link to={`/laptops/${laptop.id}`}>Detalji</Link>
            </div>
        ))}
    </div>
  )
}
