import Navigation from 'src/components/navigation/Navigation';
import './CharactersPage.css'
import Character from 'src/components/character/Character';
import ubejt from 'assets/ubejt.jpg'

function CharactersPage()
{
  //const char1 = {name: "ubejt", desc: "Kamarád", Extra: "Dobrák od kosti", img:{ubejt}};
  const char1 = {name: "ubejt", brief: "Kamarád", extra: "Dobrák od kosti", img: ubejt};
  
  return (
    <>
      <Navigation></Navigation>
      <div className='anim'>
        <Character character={char1}></Character>
      </div>
    </>
  )
}

export default CharactersPage;