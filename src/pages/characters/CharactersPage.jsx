import Navigation from 'src/components/navigation/Navigation';
import './CharactersPage.css'
import Character from 'src/components/character/Character';
import ubejt from 'assets/ubejt.jpg'
import jirka from 'assets/jirka.jpg'
import en from 'assets/en.jpg'
import tonda from 'assets/tonda.jpg'

import bg from 'assets/town.jpg'

import { Col, Container, Row } from 'react-bootstrap';

function CharactersPage() {
  //const char1 = {name: "ubejt", brief: "Kamarád", extra: "Dobrák od kosti", img: ubejt}; //pomiň

  const char1 = { name: "Jirka", brief: "Vyprávěč, hlavní postava", extra: "Jirka Klimeš je nerozhodný, ale zároveň nejstatečnější člen skupiny. Vždy uvítá práci v týmu, zejména s En.", img: jirka }
  const char2 = { name: "En", brief: "Tondova sestřenice", extra: "Jakožto nejchytřejší člen skupiny, Anastázie (En) dokáže vymyslet řešení k jakémukoli problému. Pokud však jde o rychlé, krizové situace, rychle znervózní.", img: en }
  const char3 = { name: "Tonda", brief: "Jirkův nejlepší kamarád", extra: "Jirkův dlouholetý nejlepší kamarád. Jirkou byl odstrčen poté, co poznal jeho sestřenici En, což ho nesmírně ranilo.", img: tonda }

  const style = {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(" + bg + ")"
  }

  return (
    <>
      <Navigation></Navigation>
      <Container fluid className='anim background' style={style}>
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