import Navigation from 'src/components/navigation/Navigation';
import './OpinionPage.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import bg from 'assets/machine.png'
import TitleArticle from 'src/components/titlearticle/TitleArticle';
import { useState } from 'react';

const style = {
  backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(" + bg + ")"
}

function OpinionPage() {

  const [validated, setValidated] = useState(false);
  const [op1, setOp1] = useState('');
  const [op2, setOp2] = useState('');
  const [op3, setOp3] = useState('');

  const handleOp1Change = (event) => {

  }
  const handleOp2Change = (event) => {

  }
  const handleOp3Change = (event) => {

  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  return (
    <>
      <Navigation />
      <Container fluid className='background-long anim opinion-container' style={style}>
        <Row>
          <Col>
            <div className='opinion-div'>
              <h1>Hodnocení knihy</h1>
              <p>Kniha Prašina od autora Vojtěcha Matochy představuje neobyčejný literární zážitek, který překračuje hranice běžné dětské či dobrodružné literatury. Jde o napínavý román, jenž si získal srdce čtenářů všech věkových kategorií svou originální zápletkou, důmyslnou atmosférou a silně vykreslenými postavami.</p>

              <p>Příběh sleduje trojici dětí – Jirku, jeho kamarádku En a jejího mladšího bratrance Tondu – kteří se zcela nečekaně ocitnou uprostřed záhady, jež přesahuje běžné dětské starosti. Děj se odehrává v tajemné pražské čtvrti zvané Prašina – místě, kde nefunguje žádná moderní technologie, neexistuje elektřina a celé území jakoby vypadlo z času. Zároveň jde o prostor, který si zachovává svou vlastní identitu, magickou přitažlivost i skrytou hrozbu.</p>

              <p>Autor se velmi přesvědčivě vypořádává s budováním napětí. Příběh má svižné tempo, ale zároveň si dává prostor pro hlubší rozvoj charakterů i vztahů mezi nimi. Právě přátelství mezi třemi hlavními hrdiny, jejich odvaha a soudržnost jsou hlavními hybnými silami celého příběhu. Zvláště pak postava En vyniká svou vynalézavostí a odvahou, Jirka je přirozeným spojovacím článkem a Tonda představuje nevinnost i dětskou zvídavost.</p>

              <p>Jedním z nejsilnějších prvků knihy je atmosféra – Prašina jako místo plné temných uliček, opuštěných domů a podivných zákoutí vyvolává pocit tajemna a zároveň naprosté reálnosti. Čtenář se do tohoto prostoru noří s každou další stránkou hlouběji a má pocit, že tuto čtvrť sám prochází. V kombinaci s nenápadnou, ale hlubokou reflexí témat jako jsou technologický pokrok, tradice, manipulace nebo touha po moci, se z Prašiny stává dílo s přesahem.</p>

              <p>Po jazykové stránce je kniha přístupná a čtivá, přesto však nepostrádá kvalitu. Matocha pracuje s vypravěčským jazykem přirozeně, s citem pro rytmus i napětí, a dokáže udržet čtenáře v pozornosti až do poslední stránky.</p>

              <p>Prašina je knihou, která osloví nejen děti a mládež, ale i dospělé čtenáře hledající poutavý příběh se silnou atmosférou, dobře vystavěnou zápletkou a výrazným morálním poselstvím. Ukazuje, že literatura pro mladé může být plnohodnotná, chytrá a přitom stále čtivá a zábavná.</p>

              <p>Bez nadsázky lze říci, že Prašina patří mezi nejzajímavější současné české knihy pro mládež. Je to dílo, které si zaslouží opakované čtení – pokaždé v něm najdete něco nového.</p>
            </div>
          </Col>
          <Col>
            <div className='opinion-div'>
              <h1>Morální otázky</h1>
              <p>Nejsubjektivnější stránkou celé knihy je rozhodně střet zájmů Václava Novotného a Klementa Hroudy. Pokud přehlédneme násilné střety mezi oběmi stranami a soustředíme se pouze na jejich ryzí cíle, nalezneme jednoznačnou odpověď na to, kdo je v příběhu ten dobrý?</p>

              <Form validated={validated} onSubmit={handleSubmit} data-bs-theme="dark">
                <br />
                <Form.Group className='mb-3' controlId='formName'>
                  <h2>Václav Novotný</h2>
                  <p>Jirkův děda, Václav Novotný, po léta střežil tajemství stroje, který udržuje Prašinu v temnotě – doslova i obrazně. Věřil, že svět bez elektřiny může být útočištěm pro staré hodnoty a klidný život. Neřekl však pravdu ani vlastnímu vnukovi, a když šlo o všechno, nevěděl, komu důvěřovat.
                    Jeho záměr nebyl zlý – ale svou mlčenlivostí možná ohrozil mnohem víc, než sám tušil.</p>
                  <Form.Label>Byl Václav Novotný vizionář, který chránil zbytek světa před neznámým, nebo člověk, který nese odpovědnost za nebezpečí, protože mlčel příliš dlouho?</Form.Label>
                  <Form.Control name='op1' type='text' placeholder='Váš názor' required></Form.Control>
                  <Form.Control.Feedback type='invalid'>Zadejte Váš názor!</Form.Control.Feedback>
                  <br />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formName'>
                  <h2>Klement Hrouda</h2>
                  <p>Klement Hrouda je postava, která vzbuzuje silné emoce. Usiluje o vypnutí stroje a likvidaci Prašiny, ale ne z hrdinských pohnutek – nýbrž proto, že vlastní pozemky, které chce zhodnotit. Jeho činy jsou motivovány ziskem, ale zároveň by přinesly obnovu – připojení ke světlu, k vodě, k modernímu světu.
                    Jeho pravda je tvrdá a bez iluzí – ale možná právě proto působí tak nebezpečně.</p>
                  <Form.Label>Je Klement Hrouda bezcitný padouch, nebo jen podnikatel, který vidí příležitost tam, kde jiní vidí jen nostalgii a chaos?</Form.Label>
                  <Form.Control name='op2' type='text' placeholder='Váš názor' required></Form.Control>
                  <Form.Control.Feedback type='invalid'>Zadejte Váš názor!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formName'>
                  <h2>Která strana má pravdu?</h2>
                  <p>Václav Novotný a Klement Hrouda představují střet dvou epoch – minulosti a budoucnosti, hodnot a výhod, ticha a hluku, tmy a světla. Jeden chrání stabilitu a tajemství, druhý boří vše, aby mohl stavět nové.
                    Mezi nimi stojí děti – Jirka, En a Tonda – a s nimi i čtenář, který se musí rozhodnout, čí cestu považuje za správnou.</p>
                  <Form.Label>A vy? Stojíte spíš na straně Václava Novotného a tradice, nebo Klementa Hroudy a modernizace?</Form.Label>
                  <Form.Check inline className='text-start' name='char' id='vn' type='radio' label={"Václav Novotný"} required></Form.Check>
                  <Form.Check inline className='text-start' name='char' id='kh' type='radio' label={"Klement Hrouda"} required></Form.Check>
                </Form.Group>
                <Button variant='secondary' type='submit'>Odeslat</Button><br />
                <Form.Text className='text-muted'>Odeslané názory jsou zcela anonymní</Form.Text>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default OpinionPage;