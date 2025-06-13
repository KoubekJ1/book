import './HomePage.css'

import Navigation from 'components/navigation/Navigation.jsx'
import cover from 'assets/cover.jpg'
import { Col, Container, Row } from 'react-bootstrap'

function HomePage() {
  return (
    <>
      <Navigation></Navigation>
      <Container fluid className='text-center mt-5 p-5 anim'>
        <Row>
          <Col>
            <Container fluid>
              <Row>
                <Col>
                  <h1>Prašina</h1>
                  <h4>Vojtěch Matocha</h4>
                </Col>
              </Row>
              <Row>
                <p>
                  Prašina je dobrodružná kniha pro děti a mládež od českého spisovatele Vojtěcha Matochy. Příběh otevírá záhady tajuplného, tichého a nebezpečného místa uprostřed Prahy – Prašiny, kde z neznámých důvodů nefunguje elektřina. Ilustroval ji Karel Osoha.
                </p>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container fluid>
              <Row>
                <img src={cover} alt='Prašina' className='rounded w-50 rounded mx-auto d-block'></img>
              </Row>
              <Row>
                <h4 className='mt-1'>Ilustrace od Karla Osohy</h4>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage
