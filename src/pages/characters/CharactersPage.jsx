import Navigation from 'src/components/navigation/Navigation';
import './CharactersPage.css'
import Character from 'src/components/character/Character';
import ubejt from 'assets/ubejt.jpg'
import jirka from 'assets/jirka.jpg'
import en from 'assets/en.jpg'
import tonda from 'assets/tonda.jpg'
import { Col, Container, Row } from 'react-bootstrap';

function CharactersPage() {
  //const char1 = {name: "ubejt", brief: "Kamarád", extra: "Dobrák od kosti", img: ubejt}; //pomiň

  const char1 = { name: "Jirka Klimeš", brief: "Vyprávěč, hlavní postava", extra: "Jirka je nerozhodný, ale zároveň nejstatečnější člen skupiny. Vždy uvítá práci v týmu, zejména s En.", img: jirka }
  const char2 = { name: "En", brief: "Tondova sestřenice", extra: "Jakožto nejchytřejší člen skupiny, Anastázie (En) dokáže vymyslet řešení k jakémukoli problému. Pokud však jde o rychlé, krizové situace, rychle znervózní.", img: en }
  const char3 = { name: "Tonda", brief: "Jirkův nejlepší kamarád", extra: "Jirkův dlouholetý nejlepší kamarád, kterého Jirka odstrčí dál poté, co poznal jeho sestřenici En.", img: tonda }

  return (
    <>
      <Navigation></Navigation>
      <Container className='anim'>
        <Row>
          <Col>
            <Character character={char1}></Character>
          </Col>
          <Col>
            <Character character={char2}></Character>
          </Col>
          <Col>
            <Character character={char3}></Character>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CharactersPage;