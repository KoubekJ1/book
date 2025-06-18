import Character from '../character/Character';
import TestCharacter from '../test/testcharacter/TestCharacter';
import './TestResult.css';

import jirka from 'assets/jirka.jpg';
import en from 'assets/en.jpg';
import tonda from 'assets/tonda.jpg';
import silhouette from 'assets/silhouette.jpg';

function TestResult(props) {

  const char1 = { name: "Jirka", brief: "Týmový hráč", extra: "Jirka Klimeš je nerozhodný, ale zároveň nejstatečnější člen skupiny. Vždy uvítá práci v týmu, zejména s En.", img: jirka }
  const char2 = { name: "En", brief: "Mozek skupiny", extra: "Jakožto nejchytřejší člen skupiny, Anastázie (En) dokáže vymyslet řešení k jakémukoli problému. Pokud však jde o rychlé, krizové situace, rychle znervózní.", img: en }
  const char3 = { name: "Tonda", brief: "Odvážný cholerik", extra: "Jirkův dlouholetý nejlepší kamarád. Jirkou byl odstrčen poté, co poznal jeho sestřenici En, což ho nesmírně ranilo.", img: tonda }
  const char4 = { name: "Neznámý (ne)přeživší", brief: "V Prašině nemáte šanci přežít.", extra: "Váš tým by Vás možná ochraňoval do té doby než si uvědomí, že pro ně nejste přínosní a jen je zpomalujete. V Prašině moc dlouho nevydržíte.", img: silhouette };

  const desc1 = "Nejraději pracujete v týmu a věříte, že nejlepších výsledků dosáhnete správnou organizací a silnou spoluprací s ostatními.";
  const desc2 = "Jednáte s rozumem a myslí. Nejednáte impulzivně, nýbrž vždy všechno promyslíte do posledního detailu, teprve poté konáte.";
  const desc3 = "Jste odvážný, byť cholerický a impulzivní člověk. Nechcete plítvat časem a vždy vymyslíte rychlejší a jednodušší řešení k danému problému, i kdyby mělo vést k ještě větším problémům. S Vámi dojde k pěstem dříve než ke slovům.";
  const desc4 = "Rozhodování není Vaše parketa. V krizových situacích se potopíte pod hladinou nervoziti a napětí, což povede k Vaši skáze. Prašina Vás sní zaživa.";

  let strength = 0;
  let team = 0;
  let intelligence = 0;

  let character;
  let desc;

  /*for (let i = 0; i < props.answers.length; i++) {
    let answer = props.answers[i];
    strength += answer.strength;
    team += answer.team;
    intelligence += answer.intelligence;
  };*/

  for (const answerProp in props.answers) {
    const answer = props.answers[answerProp];
    if (typeof (answer.strength) === 'number') strength += answer.strength;
    if (typeof (answer.team) === 'number') team += answer.team;
    if (typeof (answer.intelligence) === 'number') intelligence += answer.intelligence;

  }

  if (strength + team + strength < 8) {
    character = char4;
    desc = desc4;
  }
  else if (strength > team && strength > intelligence) {
    character = char3;
    desc = desc3;
  }
  else if (team > strength && team > intelligence) {
    character = char1;
    desc = desc1;
  }
  else {
    character = char2;
    desc = desc2;
  };

  return (
    <>
      <Character character={character} />
      <p className="desc-text">{desc}</p>
    </>
  )
}

export default TestResult;