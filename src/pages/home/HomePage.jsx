import './HomePage.css'

import Navigation from 'components/navigation/Navigation.jsx'
import abandoned from 'assets/abandoned.png'
import dark from 'assets/dark.jpg'
import town from 'assets/town.jpg'
import cover from 'assets/cover.jpg'
import alley from 'assets/alley.jpg'
import story from 'assets/story.jpg'
import friends from 'assets/friends.jpg'
import { Col, Container, Row, Button } from 'react-bootstrap'
import TitleArticle from 'src/components/titlearticle/TitleArticle'
import { Link, useSearchParams } from 'react-router-dom'
import { useRef, useState } from 'react'

function HomePage(props) {
  const content1 = 'Prašina je dobrodružná kniha pro děti a mládež od českého spisovatele Vojtěcha Matochy. Příběh otevírá záhady tajuplného, tichého a nebezpečného místa uprostřed Prahy – Prašiny, kde z neznámých důvodů nefunguje elektřina. Ilustroval ji Karel Osoha.';
  const content2 = 'Prašina je místo, kde z neznámých důvodů nefunguje elektřina, mobily zhasínají a svět jako by přestal existovat. Úzké uličky, opuštěné domy a podivné ticho vytvářejí dusivou atmosféru, která člověka pohltí. Prašina je tajuplná, nebezpečná a jakoby odříznutá od času – místo, kam se odváží jen ti nejodhodlanější.';
  const content3 = 'Když do prašiny jednoho dne vkročí Jirka Klimeš, začíná závod s časem, plný nečekaných zvratů, temných tajemství a neviditelného nebezpečí. Odhalte, co se v Prašině opravdu skrývá… Pokud se odvážíte.';
  const content4 = 'Poznejte nerozlučnou trojici kamarádů, která se odváží vstoupit tam, kde se jiní bojí jen přiblížit. Jirka, En a Tonda – každý úplně jiný, ale společně tvoří tým, který dokáže čelit tajemstvím Prašiny i nebezpečím, která se skrývají ve tmě. Chcete vědět, co je spojuje a co všechno spolu zažili? Ponořte se do jejich příběhu a objevte sílu přátelství v neobyčejném světě bez elektřiny.';
  const link2 = <Link to="/setting" className="nav-link linkbutton text-center">Číst dále</Link>;
  const link3 = <Link to="/story" className="nav-link linkbutton text-center">Číst dále</Link>;
  const link4 = <Link to="/characters" className="nav-link linkbutton text-center">Číst dále</Link>;

  const style = {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(" + alley + ")"
  }

  const titleStyle = {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(" + dark + ")"
  }

  const enterButtonPressed = () => {
    //titleScreenRef.current.classList.add('hidden');
    const element = titleScreenRef.current;
    element.classList.add('away');
    setTimeout(() => {
      element.classList.add('hidden');
      setPassed(true);
    }, 500);
  }

  const titleScreenRef = useRef(null);
  const [passed, setPassed] = useState(!props.showTitle);
  console.log(passed);
  const [params, setParams] = useSearchParams();

  /*const titleElement = !passedBool ? <div ref={titleScreenRef} className='overlay text-center background-long' style={titleStyle}>
    <div className='overlay-content'>
      <h1>Prašina je místo, kam se jen tak někdo neodváží vstoupit.</h1>
      <h2>Jste si jistí, že chcete pokračovat?</h2>
      <Button variant='secondary' onClick={() => enterButtonPressed()}>Vstoupit</Button></div>
  </div> : <></>;*/

  let titleElement;
  if (!passed) {
    titleElement = <div ref={titleScreenRef} className='overlay background-long' style={titleStyle}>
      <div className='overlay-content'>
        <h1>Prašina je místo, kam se jen tak někdo neodváží vstoupit.</h1>
        <h2>Jste si jistí, že chcete pokračovat?</h2>
        <Button variant='secondary' className='continue-button' onClick={() => enterButtonPressed()}>Vstoupit</Button></div>
    </div>
  }
  else
  {
    titleElement = <></>;
  }

  return (
    <>
      {passed ? <Navigation></Navigation> : <></>}
      {titleElement}

      <div className='background-long anim' style={style}>
        <TitleArticle title='Prašina' sub='Vojtěch Matocha' content={content1} img={cover} subimg='Ilustrace od Karla Osohy' />
        <TitleArticle title='Prostředí' sub='Co je to prašina?' content={content2} img={alley} subimg='Opuštěná čtvrť' linkbutton={link2} />
        <TitleArticle title='Děj' sub='Napínavý příběh' content={content3} img={story} subimg='Nebezpečná cesta' linkbutton={link3} />
        <TitleArticle title='Postavy' sub='Nerozdělitelná trojice' content={content4} img={friends} subimg='Přátelé' linkbutton={link4} />
      </div>
    </>
  )
}

export default HomePage
