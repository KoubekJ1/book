import Navigation from 'src/components/navigation/Navigation';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <Navigation />
      <div className='text-center p-5'>
        <h1>Stránka nebyla nalezena</h1>
        <Link className='btn btn-primary' to="/">Zpět na domovskou stránku</Link>
      </div>
    </>
  )
}

export default ErrorPage;