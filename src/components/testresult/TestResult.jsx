import Character from '../character/Character';
import TestCharacter from '../test/testcharacter/TestCharacter';
import './TestResult.css';

import jirka from 'assets/jirka.jpg';
import en from 'assets/en.jpg';
import tonda from 'assets/tonda.jpg';

function TestResult(props) {

  const char1 = { name: "Jirka", brief: "Vyprávěč, hlavní postava", extra: "Jirka Klimeš je nerozhodný, ale zároveň nejstatečnější člen skupiny. Vždy uvítá práci v týmu, zejména s En.", img: jirka }
  const char2 = { name: "En", brief: "Tondova sestřenice", extra: "Jakožto nejchytřejší člen skupiny, Anastázie (En) dokáže vymyslet řešení k jakémukoli problému. Pokud však jde o rychlé, krizové situace, rychle znervózní.", img: en }
  const char3 = { name: "Tonda", brief: "Jirkův nejlepší kamarád", extra: "Jirkův dlouholetý nejlepší kamarád. Jirkou byl odstrčen poté, co poznal jeho sestřenici En, což ho nesmírně ranilo.", img: tonda }
  const char4 = { name: "Bad" };

  let strength = 0;
  let team = 0;
  let intelligence = 0;

  let character;
  for(let i = 0; i < props.answers.length; i++) {
    let answer = props.answers[i];
    strength += answer.strength;
    team += answer.team;
    intelligence += answer.intelligence;

    if (strength + team + strength < 8) character = char4;
    else if (strength > team && strength >> intelligence) character = char3;
    else if (team > strength && team >> intelligence) character = char1;
    else character = char2;
  };

  return (
    <>
      <Character character={character} />
    </>
  )
}

export default TestResult;