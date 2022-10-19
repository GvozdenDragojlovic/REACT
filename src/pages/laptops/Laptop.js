import './Laptop.css';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export default function Laptop() {
  const { id } = useParams();
  const url = 'http://localhost:3000/laptops/' + id;
  const { error, isPending, data: laptop } = useFetch(url);
  

  return (
    <div className='laptop'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {laptop && (
        <div>
          <h2 className='page-title'>{laptop.title}</h2>
          <div className='card-img-center'>
                <img
                className="card-img"
                src={laptop.photo}
                alt="Neka slika"
                />
                </div>
          <p>CPU model: {laptop.cpu}</p>      
          <p>Ram memorija {laptop.memory} </p>
          <ul>
            {laptop.keywords.map(keyword => <li key={keyword}> {keyword} </li>)}
          </ul>
          <p className='description'>{laptop.description}</p>
        </div>
      )}
    </div>
  )
}
