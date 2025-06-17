import Navigation from 'src/components/navigation/Navigation';
import './TestPage.css';

import bg from 'assets/machine.png'
import { useContext, useEffect, useState } from 'react';
import { Test1, Test2, Test3, Test4, Test5, Test6, Test7, Test8, Test9, Test10 } from 'src/components/test/Tests';
import { Button } from 'react-bootstrap';
import TestResult from 'src/components/testresult/TestResult';
import { TestContext } from './TestContext';

import jirka from 'assets/jirka.jpg'

function TestPage() {
  const style = {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(" + bg + ")"
  }

  const {answers, answerIndexes} = useContext(TestContext);

  const [page, setPage] = useState(0);
  const [testFinished, setTestFinished] = useState(false);

  /*useEffect(() => {
    console.log(answerIndexes);
  }, [answerIndexes])*/

  const calcPerson = () =>
  {
    return { name: "Jirka", brief: "Vyprávěč, hlavní postava", extra: "Jirka Klimeš je nerozhodný, ale zároveň nejstatečnější člen skupiny. Vždy uvítá práci v týmu, zejména s En.", img: jirka };
  }

  const pages = [<Test1/>, <Test2/>, <Test3/>, <Test4/>, <Test5/>, <Test6/>, <Test7/>, <Test8/>, <Test9/>, <Test10/>];

  const nextButton = <Button className='test-button' variant='secondary' disabled={answerIndexes[page] == undefined} onClick={() => { setPage(page + 1); }}>Další</Button>;
  const previousButton = <Button className='test-button' variant='secondary' onClick={() => { setPage(page - 1); }}>Předchozí</Button>;
  const submitButton = <Button className='test-button' variant='secondary' onClick={() => { setTestFinished(true) }}>Hotovo</Button>;

  let y = 0;
  return (
    <>
      <Navigation />
      <div className='anim background-long test-container' style={style}>
        <h1>Test osobnosti</h1>
        <h4>Která z hlavních postav je Vám nejpodobnější?</h4>
        <p>Tento test otestuje Vaše dovednosti v situacích, do kterých byste se mohli v Prašině dostat.</p>
        <p>Před odpovězením si Vaši odpověď vždy dobře rozmyslete.</p>
        {testFinished ? <TestResult answers={answers}/> :
          <>
            <h4 className='mt-5'>Otázka {page + 1}</h4>
            {pages[page]}
            {page > 0 ? previousButton : <></>}
            {page < pages.length - 1 ? nextButton : submitButton}
          </>}
      </div>
    </>
  )
}

export default TestPage;