import Navigation from 'src/components/navigation/Navigation';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

function ErrorPage()
{
  return (
    <>
      <Navigation/>
      <h1>Chyba</h1>
      <Link className='btn btn-primary' to="/">Zpět na domovskou stránku</Link>
    </>
  )
}

export default ErrorPage;