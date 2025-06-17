import { Form } from "react-bootstrap";

function setObject(object, props) {
  props.setVal(object);
}

export function Test1(props) {

  return (
    <>
      <p>Za rohem slyšíte neznámého muže, který vás zřejmě sleduje. Jak se zachováte?</p>
      <Form>
        <Form.Check onClick={() => { setObject({ team: 1, intelligence: 1 }, props) }} name='t1' type='radio' label={"Navrhnete, aby se skupina rozdělila a zjistila, odkud přesně přichází"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ strength: 2   }, props) }} name='t1' type='radio' label={"Připravíte se na možný fyzický střet, pokud se přiblíží"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ intelligence: 2 }, props) }} name='t1' type='radio' label={"Navrhnete ukrýt se a v tichosti vyčkat"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ team: 2, }, props) }} name='t1' type='radio' label={"Pokusíte se s ním promluvit a zjistit jeho úmysly"} required></Form.Check>
        <Form.Check onClick={() => { setObject({}, props) }} name='t1' type='radio' label={"Vyběhnete proti němu bez rozmyslu a začnete křičet"} required></Form.Check>
      </Form>
    </>
  )
}

export function Test2(props) {
  return (
    <>
      <p>Nepřátelský muž vás zadržel v místnosti. Jeden z vašich přátel má pepřový sprej. Co navrhnete?</p>
      <Form>
        <Form.Check onClick={() => { setObject({ team: 2, intelligence: 1 }, props) }} name='t2' type='radio' label={"Rozptýlíte ho konverzací, zatímco druhý ho zneškodní"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ strength: 2 }, props) }} name='t2' type='radio' label={"Vrhnete se na něj okamžitě, bez ohledu na riziko"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ intelligence: 2 }, props) }} name='t2' type='radio' label={"Počkáte na správný okamžik a navrhnete tichý útěk"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ intelligence: 1, }, props) }} name='t2' type='radio' label={"Vymyslíte důvěryhodnou lež, která ho přiměje odejít"} required></Form.Check>
        <Form.Check onClick={() => { setObject({}, props) }} name='t2' type='radio' label={"Zpanikaříte, stáhnete se a odmítnete jednat"} required></Form.Check>
      </Form>
    </>
  )
}

export function Test3(props) {
  return (
    <>
      <p>Neznámý muž vás sleduje už delší dobu, ale dosud nejednal. Co navrhnete ostatním?</p>
      <Form>
        <Form.Check onClick={() => { setObject({ intelligence: 2 }, props) }} name='t3' type='radio' label={"Navrhnete vést skupinu jinou cestou, abyste zjistili, zda vás sleduje"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ team: 2 }, props) }} name='t3' type='radio' label={"Navrhnete, aby jeden z vás šel vpřed a druhý se vrátil, abyste ho obklíčili"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ strength: 2 }, props) }} name='t3' type='radio' label={"Navrhnete, aby se jeden z vás připravil na případný útok"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ team: 1, intelligence: 1 }, props) }} name='t3' type='radio' label={"Navrhnete informovat další přátele a získat posilu"} required></Form.Check>
        <Form.Check onClick={() => { setObject({}, props) }} name='t3' type='radio' label={"Ignorujete to, protože 'určitě si to jen představujete'"} required></Form.Check>
      </Form>
    </>
  )
}

export function Test4(props) {
  return (
    <>
      <p>Musíte vyřešit záhadný mechanismus, abyste unikli z budovy. Jaký přístup zvolíte?</p>
      <Form>
        <Form.Check onClick={() => { setObject({ intelligence: 2 }, props) }} name='t4' type='radio' label={"Navrhnete detailní prohlídku okolí a hledání nápověd"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ strength: 2 }, props) }} name='t4' type='radio' label={"Pokoušíte se mechanismus násilím otevřít"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ team: 2, intelligence: 1 }, props) }} name='t4' type='radio' label={"Navrhnete rozdělit úkoly – někdo hledá, jiný přemýšlí"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ team: 1 }, props) }} name='t4' type='radio' label={"Dovolíte ostatním vést, zatímco nabídnete pomoc"} required></Form.Check>
        <Form.Check onClick={() => { setObject({}, props) }} name='t4' type='radio' label={"Sednete si stranou a čekáte, že to někdo jiný vyřeší"} required></Form.Check>
      </Form>
    </>
  )
}

export function Test5(props) {
  return (
    <>
      <p>Jeden člen vaší skupiny se zranil a nepřátelé jsou nedaleko. Jak se zachováte?</p>
      <Form>
        <Form.Check onClick={() => { setObject({ team: 2 }, props) }} name='t5' type='radio' label={"Navrhnete vytvořit nosítka a utéct společně"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ strength: 2 }, props) }} name='t5' type='radio' label={"Přenesete zraněného na zádech a utečete"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ intelligence: 2 }, props) }} name='t5' type='radio' label={"Navrhnete vymyslet lest, která odláká nepřátele"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ team: 1, intelligence: 1 }, props) }} name='t5' type='radio' label={"Navrhnete se rozdělit – jeden pomáhá, druhý hledá cestu"} required></Form.Check>
        <Form.Check onClick={() => { setObject({}, props) }} name='t5' type='radio' label={"Opustíte zraněného a utečete sami"} required></Form.Check>
      </Form>
    </>
  )
}

export function Test6(props) {
  return (
    <>
      <p>Čelíte ozbrojenému muži, který chce vaši skupinu donutit k poslušnosti. Co navrhnete?</p>
      <Form>
        <Form.Check onClick={() => { setObject({ intelligence: 2 }, props) }} name='t6' type='radio' label={"Snažíte se ho přelstít taktickým rozhovorem a otázkami"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ strength: 2 }, props) }} name='t6' type='radio' label={"Využijete moment překvapení k odzbrojení"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ team: 2 }, props) }} name='t6' type='radio' label={"Navrhnete sehrát s ostatními scénku, která ho zmate"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ intelligence: 1, team: 1 }, props) }} name='t6' type='radio' label={"Nenápadně signalizujete skupině plán útěku"} required></Form.Check>
        <Form.Check onClick={() => { setObject({}, props) }} name='t6' type='radio' label={"Začnete na něj křičet a vyhrožovat bez plánu"} required></Form.Check>
      </Form>
    </>
  )
}

export function Test7(props) {
  return (
    <>
      <p>Dva členové vaší skupiny se neshodnou na dalším postupu. Co uděláte?</p>
      <Form>
        <Form.Check onClick={() => { setObject({ team: 2 }, props) }} name='t7' type='radio' label={"Snažíte se mezi nimi zprostředkovat kompromis"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ intelligence: 2 }, props) }} name='t7' type='radio' label={"Analyzujete situaci a navrhnete racionální řešení"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ team: 1 }, props) }} name='t7' type='radio' label={"Navrhnete hlasování v týmu"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ strength: 2 }, props) }} name='t7' type='radio' label={"Rozhodnete za ostatní a převezmete vedení"} required></Form.Check>
        <Form.Check onClick={() => { setObject({}, props) }} name='t7' type='radio' label={"Ignorujete konflikt a jdete pryč bez vysvětlení"} required></Form.Check>
      </Form>
    </>
  )
}

export function Test8(props) {
  return (
    <>
      <p>Před vámi je složitá logická hádanka, která blokuje další postup. Jak postupujete?</p>
      <Form>
        <Form.Check onClick={() => { setObject({ intelligence: 2 }, props) }} name='t8' type='radio' label={"Zklidníte situaci a pustíte se do analýzy krok za krokem"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ team: 2 }, props) }} name='t8' type='radio' label={"Navrhnete rozdělit části hádanky mezi členy týmu"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ strength: 2 }, props) }} name='t8' type='radio' label={"Zkoušíte hádanku obejít fyzickým způsobem"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ intelligence: 1 }, props) }} name='t8' type='radio' label={"Hledáte podobné vzorce a nápovědy v okolí"} required></Form.Check>
        <Form.Check onClick={() => { setObject({}, props) }} name='t8' type='radio' label={"Mávnete rukou a vzdáte to bez pokusu"} required></Form.Check>
      </Form>
    </>
  )
}

export function Test9(props) {
  return (
    <>
      <p>Jeden člen vaší skupiny skrývá důležité informace. Jak se zachováte?</p>
      <Form>
        <Form.Check onClick={() => { setObject({ team: 2 }, props) }} name='t9' type='radio' label={"Snažíte se s ním otevřeně a nenásilně promluvit"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ intelligence: 2 }, props) }} name='t9' type='radio' label={"Analyzujete jeho chování a hledáte důvody mlčení"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ strength: 2 }, props) }} name='t9' type='radio' label={"Zastrašíte ho, aby mluvil"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ intelligence: 1, team: 1 }, props) }} name='t9' type='radio' label={"Navrhnete skupinové řešení a vyzvete ho k důvěře"} required></Form.Check>
        <Form.Check onClick={() => { setObject({}, props) }} name='t9' type='radio' label={"Ignorujete ho a jednáte, jako by nebyl součástí týmu"} required></Form.Check>
      </Form>
    </>
  )
}

export function Test10(props) {
  return (
    <>
      <p>Skupina se přiblížila k opuštěné budově. Může jít o past. Co navrhnete?</p>
      <Form>
        <Form.Check onClick={() => { setObject({ intelligence: 2 }, props) }} name='t10' type='radio' label={"Zhodnotíte rizika a provedete vnější průzkum"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ team: 2 }, props) }} name='t10' type='radio' label={"Navrhnete, aby jeden člen hlídal, zatímco ostatní zkoumají"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ strength: 2 }, props) }} name='t10' type='radio' label={"Připravíte se na útok a jdete jako první"} required></Form.Check>
        <Form.Check onClick={() => { setObject({ team: 1, intelligence: 1 }, props) }} name='t10' type='radio' label={"Navrhnete se držet v těsné formaci a krýt si záda"} required></Form.Check>
        <Form.Check onClick={() => { setObject({}, props) }} name='t10' type='radio' label={"Bezhlavě vběhnete dovnitř bez domluvy"} required></Form.Check>
      </Form>
    </>
  )
}
