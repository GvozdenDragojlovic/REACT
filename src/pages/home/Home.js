import { useFetch } from '../../hooks/useFetch';
import './Home.css';
import LaptopList from '../../components/LaptopList';

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/laptops');

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <LaptopList laptops={data} />}
    </div>
  )
}