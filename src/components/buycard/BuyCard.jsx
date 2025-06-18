import './BuyCard.css';

function BuyCard(props)
{
  return (
    <div className={props.best ? 'card buy-card-best' : 'card buy-card'} data-bs-theme="dark">
      <div className='card-body'>
        <h5 className='card-title'>{props.name}</h5>
        <p className='card-text'>{props.price} Kč</p>
        {props.best ? <p className='card-text'>Nejvýhodnější cena!</p> : <></>}
        <a href={props.link} className='btn btn-secondary'>Koupit</a>
      </div>
    </div>
  )
}

export default BuyCard;