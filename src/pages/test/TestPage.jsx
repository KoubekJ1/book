import Navigation from 'src/components/navigation/Navigation';
import './TestPage.css';

import bg from 'assets/machine.png'
import { useState } from 'react';
import { Test1, Test2, Test3, Test4, Test5, Test6, Test7, Test8, Test9, Test10 } from 'src/components/test/Tests';
import { Button } from 'react-bootstrap';
import TestResult from 'src/components/testresult/TestResult';

function TestPage() {
  const style = {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(" + bg + ")"
  }

  const [page, setPage] = useState(0);
  const [testFinished, setTestFinished] = useState(false);

  const pages = [<Test1 setVal={(ans) => {setAns(0, ans)}}/>, <Test2 setVal={(ans) => {setAns(1, ans)}} />, <Test3 setVal={(ans) => {setAns(2, ans)}} />, <Test4 setVal={(ans) => {setAns(3, ans)}} />, <Test5 setVal={(ans) => {setAns(4, ans)}} />, <Test6 setVal={(ans) => {setAns(5, ans)}} />, <Test7 setVal={(ans) => {setAns(6, ans)}} />, <Test8 setVal={(ans) => {setAns(7, ans)}} />, <Test9 setVal={(ans) => {setAns(8, ans)}} />, <Test10 setVal={(ans) => {setAns(9, ans)}} />];
  const [answerObjects, setAnswerObjects] = useState(new Array(1));

  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);

  const setAns = (ans, object) => {
    answerObjects[ans] = object;
    console.log(answerObjects);
    console.log(answerObjects.length);
    setNextButtonEnabled(true);
  }

  const nextButton = <Button className='test-button' variant='secondary' disabled={!nextButtonEnabled} onClick={() => {setPage(page + 1); setNextButtonEnabled(false) }}>Další</Button>;
  const previousButton = <Button className='test-button' variant='secondary' onClick={() => { setPage(page - 1); setNextButtonEnabled(true) }}>Předchozí</Button>;
  const submitButton = <Button className='test-button' variant='secondary' onClick={() => { setTestFinished(true) }}>Hotovo</Button>;

  return (
    <>
      <Navigation />
      <div className='anim background-long test-container' style={style}>
        <h1>Test osobnosti</h1>
        <h4>Která z hlavních postav je Vám nejpodobnější?</h4>
        <p>Tento test otestuje Vaše dovednosti v situacích, do kterých byste se mohli v Prašině dostat.</p>
        <p>Před odpovězením si Vaši odpověď vždy dobře rozmyslete.</p>
        {testFinished ? <TestResult /> :
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