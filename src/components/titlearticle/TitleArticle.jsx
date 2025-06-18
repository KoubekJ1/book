import { Container, Row, Col } from 'react-bootstrap';
import './TitleArticle.css';

function TitleArticle(props) {
  return (
    <>
      <Container fluid className={!props.small ? 'title-article' : 'title-article-small'}>
        <Row>
          <Col>
            <Container fluid className='title-text'>
              <Row>
                <Col>
                  <h1>{props.title}</h1>
                  <h4>{props.sub}</h4>
                </Col>
              </Row>
              <Row>
                <p>{props.content}</p>
              </Row>
              {typeof (props.linkbutton) === "object" ? <Row><Col>{props.linkbutton}</Col></Row> : <></>}
            </Container>
          </Col>
          <Col>
            <Container fluid>
              <Row>
                <img src={props.img} className={!props.small ? 'title-image mx-auto d-block' : 'title-image-small mx-auto d-block'}></img>
              </Row>
              <Row>
                <h4 className='mt-1 text-center'>{props.subimg}</h4>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container >
    </>
  )
}

export default TitleArticle;