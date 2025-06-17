import { useContext } from "react";
import { Form } from "react-bootstrap";
import { TestContext } from "src/pages/test/TestContext";

function setObject(object, questionIndex, answerIndex, context) {
  console.log(object);
  console.log(context.answers);
  context.setAnswers(old => ({...old, [questionIndex]: object}));
  context.setAnswerIndexes(old => ({...old, [questionIndex]: answerIndex}));
}

export function Test1(props) {
  const context = useContext(TestContext);

  return (
    <>
      <p>Za rohem slyšíte neznámého muže, který vás zřejmě sleduje. Jak se zachováte?</p>
      <Form>
        <Form.Check readOnly {...((context.answerIndexes[0] === 0 && {checked:true}) || {checked:false})} onClick={() => { setObject({ team: 1, intelligence: 1 }, 0, 0, context) }} name='t1' type='radio' label={"Navrhnete, aby se skupina rozdělila a zjistila, odkud přesně přichází"} required />
        <Form.Check readOnly {...((context.answerIndexes[0] === 1 && {checked:true}) || {checked:false})} onClick={() => { setObject({ strength: 2 }, 0, 1, context) }} name='t1' type='radio' label={"Připravíte se na možný fyzický střet, pokud se přiblíží"} required />
        <Form.Check readOnly {...((context.answerIndexes[0] === 2 && {checked:true}) || {checked:false})} onClick={() => { setObject({ intelligence: 2 }, 0, 2, context) }} name='t1' type='radio' label={"Navrhnete ukrýt se a v tichosti vyčkat"} required />
        <Form.Check readOnly {...((context.answerIndexes[0] === 3 && {checked:true}) || {checked:false})} onClick={() => { setObject({ team: 2 }, 0, 3, context) }} name='t1' type='radio' label={"Pokusíte se s ním promluvit a zjistit jeho úmysly"} required />
        <Form.Check readOnly {...((context.answerIndexes[0] === 4 && {checked:true}) || {checked:false})} onClick={() => { setObject({}, 0, 4, context) }} name='t1' type='radio' label={"Vyběhnete proti němu bez rozmyslu a začnete křičet"} required />
      </Form>
    </>
  )
}

export function Test2() {
  const context = useContext(TestContext);

  return (
    <>
      <p>Nepřátelský muž vás zadržel v místnosti. Jeden z vašich přátel má pepřový sprej. Co navrhnete?</p>
      <Form>
        <Form.Check readOnly {...((context.answerIndexes[1] === 0 && {checked:true}) || {checked:false})} onClick={() => setObject({ team: 2, intelligence: 1 }, 1, 0, context)} name='t2' type='radio' label="Rozptýlíte ho konverzací, zatímco druhý ho zneškodní" required />
        <Form.Check readOnly {...((context.answerIndexes[1] === 1 && {checked:true}) || {checked:false})} onClick={() => setObject({ strength: 2 }, 1, 1, context)} name='t2' type='radio' label="Vrhnete se na něj okamžitě, bez ohledu na riziko" required />
        <Form.Check readOnly {...((context.answerIndexes[1] === 2 && {checked:true}) || {checked:false})} onClick={() => setObject({ intelligence: 2 }, 1, 2, context)} name='t2' type='radio' label="Počkáte na správný okamžik a navrhnete tichý útěk" required />
        <Form.Check readOnly {...((context.answerIndexes[1] === 3 && {checked:true}) || {checked:false})} onClick={() => setObject({ intelligence: 1 }, 1, 3, context)} name='t2' type='radio' label="Vymyslíte důvěryhodnou lež, která ho přiměje odejít" required />
        <Form.Check readOnly {...((context.answerIndexes[1] === 4 && {checked:true}) || {checked:false})} onClick={() => setObject({}, 1, 4, context)} name='t2' type='radio' label="Zpanikaříte, stáhnete se a odmítnete jednat" required />
      </Form>
    </>
  );
}


export function Test3() {
  const context = useContext(TestContext);

  return (
    <>
      <p>Neznámý muž vás sleduje už delší dobu, ale dosud nejednal. Co navrhnete ostatním?</p>
      <Form>
        <Form.Check readOnly {...((context.answerIndexes[2] === 0 && {checked:true}) || {checked:false})} onClick={() => setObject({ intelligence: 2 }, 2, 0, context)} name='t3' type='radio' label="Navrhnete vést skupinu jinou cestou, abyste zjistili, zda vás sleduje" required />
        <Form.Check readOnly {...((context.answerIndexes[2] === 1 && {checked:true}) || {checked:false})} onClick={() => setObject({ team: 2 }, 2, 1, context)} name='t3' type='radio' label="Navrhnete, aby jeden z vás šel vpřed a druhý se vrátil, abyste ho obklíčili" required />
        <Form.Check readOnly {...((context.answerIndexes[2] === 2 && {checked:true}) || {checked:false})} onClick={() => setObject({ strength: 2 }, 2, 2, context)} name='t3' type='radio' label="Navrhnete, aby se jeden z vás připravil na případný útok" required />
        <Form.Check readOnly {...((context.answerIndexes[2] === 3 && {checked:true}) || {checked:false})} onClick={() => setObject({ team: 1, intelligence: 1 }, 2, 3, context)} name='t3' type='radio' label="Navrhnete informovat další přátele a získat posilu" required />
        <Form.Check readOnly {...((context.answerIndexes[2] === 4 && {checked:true}) || {checked:false})} onClick={() => setObject({}, 2, 4, context)} name='t3' type='radio' label="Ignorujete to, protože 'určitě si to jen představujete'" required />
      </Form>
    </>
  );
}

export function Test4() {
  const context = useContext(TestContext);

  return (
    <>
      <p>Musíte vyřešit záhadný mechanismus, abyste unikli z budovy. Jaký přístup zvolíte?</p>
      <Form>
        <Form.Check readOnly {...((context.answerIndexes[3] === 0 && {checked:true}) || {checked:false})} onClick={() => setObject({ intelligence: 2 }, 3, 0, context)} name='t4' type='radio' label="Navrhnete detailní prohlídku okolí a hledání nápověd" required />
        <Form.Check readOnly {...((context.answerIndexes[3] === 1 && {checked:true}) || {checked:false})} onClick={() => setObject({ strength: 2 }, 3, 1, context)} name='t4' type='radio' label="Pokoušíte se mechanismus násilím otevřít" required />
        <Form.Check readOnly {...((context.answerIndexes[3] === 2 && {checked:true}) || {checked:false})} onClick={() => setObject({ team: 2, intelligence: 1 }, 3, 2, context)} name='t4' type='radio' label="Navrhnete rozdělit úkoly – někdo hledá, jiný přemýšlí" required />
        <Form.Check readOnly {...((context.answerIndexes[3] === 3 && {checked:true}) || {checked:false})} onClick={() => setObject({ team: 1 }, 3, 3, context)} name='t4' type='radio' label="Dovolíte ostatním vést, zatímco nabídnete pomoc" required />
        <Form.Check readOnly {...((context.answerIndexes[3] === 4 && {checked:true}) || {checked:false})} onClick={() => setObject({}, 3, 4, context)} name='t4' type='radio' label="Sednete si stranou a čekáte, že to někdo jiný vyřeší" required />
      </Form>
    </>
  );
}



export function Test5() {
  const context = useContext(TestContext);

  return (
    <>
      <p>Jeden člen vaší skupiny se zranil a nepřátelé jsou nedaleko. Jak se zachováte?</p>
      <Form>
        <Form.Check readOnly {...((context.answerIndexes[4] === 0 && {checked:true}) || {checked:false})} onClick={() => setObject({ team: 2 }, 4, 0, context)} name='t5' type='radio' label="Navrhnete vytvořit nosítka a utéct společně" required />
        <Form.Check readOnly {...((context.answerIndexes[4] === 1 && {checked:true}) || {checked:false})} onClick={() => setObject({ strength: 2 }, 4, 1, context)} name='t5' type='radio' label="Přenesete zraněného na zádech a utečete" required />
        <Form.Check readOnly {...((context.answerIndexes[4] === 2 && {checked:true}) || {checked:false})} onClick={() => setObject({ intelligence: 2 }, 4, 2, context)} name='t5' type='radio' label="Navrhnete vymyslet lest, která odláká nepřátele" required />
        <Form.Check readOnly {...((context.answerIndexes[4] === 3 && {checked:true}) || {checked:false})} onClick={() => setObject({ team: 1, intelligence: 1 }, 4, 3, context)} name='t5' type='radio' label="Navrhnete se rozdělit – jeden pomáhá, druhý hledá cestu" required />
        <Form.Check readOnly {...((context.answerIndexes[4] === 4 && {checked:true}) || {checked:false})} onClick={() => setObject({}, 4, 4, context)} name='t5' type='radio' label="Opustíte zraněného a utečete sami" required />
      </Form>
    </>
  );
}



export function Test6() {
  const context = useContext(TestContext);

  return (
    <>
      <p>Čelíte ozbrojenému muži, který chce vaši skupinu donutit k poslušnosti. Co navrhnete?</p>
      <Form>
        <Form.Check readOnly {...((context.answerIndexes[5] === 0 && {checked:true}) || {checked:false})} onClick={() => setObject({ intelligence: 2 }, 5, 0, context)} name='t6' type='radio' label="Snažíte se ho přelstít taktickým rozhovorem a otázkami" required />
        <Form.Check readOnly {...((context.answerIndexes[5] === 1 && {checked:true}) || {checked:false})} onClick={() => setObject({ strength: 2 }, 5, 1, context)} name='t6' type='radio' label="Využijete moment překvapení k odzbrojení" required />
        <Form.Check readOnly {...((context.answerIndexes[5] === 2 && {checked:true}) || {checked:false})} onClick={() => setObject({ team: 2 }, 5, 2, context)} name='t6' type='radio' label="Navrhnete sehrát s ostatními scénku, která ho zmate" required />
        <Form.Check readOnly {...((context.answerIndexes[5] === 3 && {checked:true}) || {checked:false})} onClick={() => setObject({ intelligence: 1, team: 1 }, 5, 3, context)} name='t6' type='radio' label="Nenápadně signalizujete skupině plán útěku" required />
        <Form.Check readOnly {...((context.answerIndexes[5] === 4 && {checked:true}) || {checked:false})} onClick={() => setObject({}, 5, 4, context)} name='t6' type='radio' label="Začnete na něj křičet a vyhrožovat bez plánu" required />
      </Form>
    </>
  );
}



export function Test7() {
  const context = useContext(TestContext);

  return (
    <>
      <p>Dva členové vaší skupiny se neshodnou na dalším postupu. Co uděláte?</p>
      <Form>
        <Form.Check readOnly {...((context.answerIndexes[6] === 0 && {checked:true}) || {checked:false})} onClick={() => setObject({ team: 2 }, 6, 0, context)} name='t7' type='radio' label="Snažíte se mezi nimi zprostředkovat kompromis" required />
        <Form.Check readOnly {...((context.answerIndexes[6] === 1 && {checked:true}) || {checked:false})} onClick={() => setObject({ intelligence: 2 }, 6, 1, context)} name='t7' type='radio' label="Analyzujete situaci a navrhnete racionální řešení" required />
        <Form.Check readOnly {...((context.answerIndexes[6] === 2 && {checked:true}) || {checked:false})} onClick={() => setObject({ team: 1 }, 6, 2, context)} name='t7' type='radio' label="Navrhnete hlasování v týmu" required />
        <Form.Check readOnly {...((context.answerIndexes[6] === 3 && {checked:true}) || {checked:false})} onClick={() => setObject({ strength: 2 }, 6, 3, context)} name='t7' type='radio' label="Rozhodnete za ostatní a převezmete vedení" required />
        <Form.Check readOnly {...((context.answerIndexes[6] === 4 && {checked:true}) || {checked:false})} onClick={() => setObject({}, 6, 4, context)} name='t7' type='radio' label="Ignorujete konflikt a jdete pryč bez vysvětlení" required />
      </Form>
    </>
  );
}



export function Test8() {
  const context = useContext(TestContext);

  return (
    <>
      <p>Před vámi je složitá logická hádanka, která blokuje další postup. Jak postupujete?</p>
      <Form>
        <Form.Check readOnly {...((context.answerIndexes[7] === 0 && {checked:true}) || {checked:false})} onClick={() => setObject({ intelligence: 2 }, 7, 0, context)} name='t8' type='radio' label="Zklidníte situaci a pustíte se do analýzy krok za krokem" required />
        <Form.Check readOnly {...((context.answerIndexes[7] === 1 && {checked:true}) || {checked:false})} onClick={() => setObject({ team: 2 }, 7, 1, context)} name='t8' type='radio' label="Navrhnete rozdělit části hádanky mezi členy týmu" required />
        <Form.Check readOnly {...((context.answerIndexes[7] === 2 && {checked:true}) || {checked:false})} onClick={() => setObject({ strength: 2 }, 7, 2, context)} name='t8' type='radio' label="Zkoušíte hádanku obejít fyzickým způsobem" required />
        <Form.Check readOnly {...((context.answerIndexes[7] === 3 && {checked:true}) || {checked:false})} onClick={() => setObject({ intelligence: 1 }, 7, 3, context)} name='t8' type='radio' label="Hledáte podobné vzorce a nápovědy v okolí" required />
        <Form.Check readOnly {...((context.answerIndexes[7] === 4 && {checked:true}) || {checked:false})} onClick={() => setObject({}, 7, 4, context)} name='t8' type='radio' label="Mávnete rukou a vzdáte to bez pokusu" required />
      </Form>
    </>
  );
}



export function Test9() {
  const context = useContext(TestContext);

  return (
    <>
      <p>Jeden člen vaší skupiny skrývá důležité informace. Jak se zachováte?</p>
      <Form>
        <Form.Check readOnly {...((context.answerIndexes[8] === 0 && {checked:true}) || {checked:false})} onClick={() => setObject({ team: 2 }, 8, 0, context)} name='t9' type='radio' label="Snažíte se s ním otevřeně a nenásilně promluvit" required />
        <Form.Check readOnly {...((context.answerIndexes[8] === 1 && {checked:true}) || {checked:false})} onClick={() => setObject({ intelligence: 2 }, 8, 1, context)} name='t9' type='radio' label="Analyzujete jeho chování a hledáte důvody mlčení" required />
        <Form.Check readOnly {...((context.answerIndexes[8] === 2 && {checked:true}) || {checked:false})} onClick={() => setObject({ strength: 2 }, 8, 2, context)} name='t9' type='radio' label="Zastrašíte ho, aby mluvil" required />
        <Form.Check readOnly {...((context.answerIndexes[8] === 3 && {checked:true}) || {checked:false})} onClick={() => setObject({ intelligence: 1, team: 1 }, 8, 3, context)} name='t9' type='radio' label="Navrhnete skupinové řešení a vyzvete ho k důvěře" required />
        <Form.Check readOnly {...((context.answerIndexes[8] === 4 && {checked:true}) || {checked:false})} onClick={() => setObject({}, 8, 4, context)} name='t9' type='radio' label="Ignorujete ho a jednáte, jako by nebyl součástí týmu" required />
      </Form>
    </>
  );
}


export function Test10() {
  const context = useContext(TestContext);

  return (
    <>
      <p>Skupina se přiblížila k opuštěné budově. Může jít o past. Co navrhnete?</p>
      <Form>
        <Form.Check readOnly {...((context.answerIndexes[9] === 0 && {checked:true}) || {checked:false})} onClick={() => setObject({ intelligence: 2 }, 9, 0, context)} name='t10' type='radio' label="Zhodnotíte rizika a provedete vnější průzkum" required />
        <Form.Check readOnly {...((context.answerIndexes[9] === 1 && {checked:true}) || {checked:false})} onClick={() => setObject({ team: 2 }, 9, 1, context)} name='t10' type='radio' label="Navrhnete, aby jeden člen hlídal, zatímco ostatní zkoumají" required />
        <Form.Check readOnly {...((context.answerIndexes[9] === 2 && {checked:true}) || {checked:false})} onClick={() => setObject({ strength: 2 }, 9, 2, context)} name='t10' type='radio' label="Připravíte se na útok a jdete jako první" required />
        <Form.Check readOnly {...((context.answerIndexes[9] === 3 && {checked:true}) || {checked:false})} onClick={() => setObject({ team: 1, intelligence: 1 }, 9, 3, context)} name='t10' type='radio' label="Navrhnete se držet v těsné formaci a krýt si záda" required />
        <Form.Check readOnly {...((context.answerIndexes[9] === 4 && {checked:true}) || {checked:false})} onClick={() => setObject({}, 9, 4, context)} name='t10' type='radio' label="Bezhlavě vběhnete dovnitř bez domluvy" required />
      </Form>
    </>
  );
}
