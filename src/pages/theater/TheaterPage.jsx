import Navigation from 'src/components/navigation/Navigation';
import './TheaterPage.css';

import photo from 'assets/theater.jpg'
import { Col, Container, Row } from 'react-bootstrap';

const style = {
  backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(" + photo + ")"
}

function TheaterPage() {
  return (
    <>
      <Navigation />
      <Container fluid className='anim p-5 background' style={style}>
        <Row>
          <Col>
            <h1>Divadelní zpracování</h1>
            <p>10. prosince 2022 mělo premiéru první divadelní zpracování Prašiny v Klicperově divadle.</p>
            <p>Celé představení režíruje Pavel Khek, kterému se perfektně povedlo vystihnout atmosféru Prašiny v nové, živější a osobnější formě.</p>
            <p>Postavy jsou perfektně zahrány zapálenými herci, kteří dávají divákovy zcela nový pohled na postavy, které připomínají knižní postavy, ale zároveň působí unikátně.</p>
            <p>Více informací naleznete na stránkách Klicperova divadla.</p>
            <a href='https://www.klicperovodivadlo.cz/inscenace/prasina-1-8478/'>Klicperovo Divadlo</a>
          </Col>
          <Col>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kRFOvGoB0js?si=qn7kaoo5ncEahZ79" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TheaterPage;