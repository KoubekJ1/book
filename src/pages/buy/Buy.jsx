import { useState } from 'react';
import './Buy.css';

import bg from 'assets/cover.jpg';
import BuyCard from 'src/components/buycard/BuyCard';
import Navigation from 'src/components/navigation/Navigation';

function Buy() {
  const style = {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(" + bg + ")",
  }

  const [page, setPage] = useState(1);

  return (
    <>
      <Navigation />
      <div className='anim background-long p-5' style={style}>
        <h1>Koupit knihu</h1>
        <div className='buy-container'>
          <label htmlFor="type">Druh</label><br />
          <select className='form-select' name="type" id="type" data-bs-theme="dark">
            <option value={"new"} onClick={() => setPage(1)}>Nová</option>
            <option value={"used"} onClick={() => setPage(2)}>Použitá</option>
            <option value={"ebook"} onClick={() => setPage(3)}>E-Kniha</option>
            <option value={"audiobook"} onClick={() => setPage(4)}>Audiokniha</option>
          </select>

          {page == 1 ?
            <div className='book-container'>
              <BuyCard name="MegaKnihy" price={252} best={true} link="https://www.megaknihy.cz/kluci-napeti/646205-prasina-1.html?utm_sh=RFlidjRTZUc2TmpRMk1qQTFOalEyTWpBMQ==&utm_source=heureka.cz&utm_campaign=h001" />
              <BuyCard name="Nejlevnější knihy" price={260} link="https://www.nejlevnejsi-knihy.cz/kniha/prasina-1_33347906.html" />
              <BuyCard name="Paseka" price={279} link="https://www.paseka.cz/produkt/prasina-1-2-vydani/" />
              <BuyCard name="KNIHCENTRUM.cz" price={286} link="https://www.knihcentrum.cz/prasina-1-dil-1?utm_campaign=Filmy%2C+knihy%2C+hry+%7C+Knihy&utm_medium=referral&utm_source=heureka.cz&utm_term=0346832" />
              <BuyCard name="Knihy Dobrovský" price={312} link="https://www.knihydobrovsky.cz/kniha/prasina-1-286656330" />
            </div> : <></>}
          {page == 2 ?
            <div className='book-container'>
              <BuyCard name="Bazoš" price={175} best={true} link="https://knihy.bazos.cz/inzerat/203198190/knihy-pro-deti-super-stav-i-cena.php" />
              <BuyCard name="Apokryf" price={219} link="https://www.apokryf.cz/prasina-1/" />
              <BuyCard name="Od Karla" price={269} link="https://www.odkarla.cz/prasina-partnersky-prodej~p579719" />
            </div> : <></>}
          {page == 3 ?
            <div className='book-container'>
              <BuyCard name="Knihy Dobrovský" price={135} best={true} link="https://www.knihydobrovsky.cz/kniha/prasina-1-286656330" />
              <BuyCard name="Palm knihy" price={135} best={true} link="https://www.palmknihy.cz/ekniha/prasina-184024?sznaiid=7517368727956676560&utm_source=seznam&utm_medium=cpc&utm_campaign=Zbo%c5%be%c3%ad.cz:+Palmknihy.cz&utm_id=4269106&utm_term=--&utm_creative_format=Pra%c5%a1ina&utm_content=V%c5%a1echny+produkty" />
              <BuyCard name="KNIHCENTRUM.cz" price={145} link="https://www.knihcentrum.cz/prasina-cerny-merkurit-2-dil-2?utm_campaign=Kultura+a+zabava+%7C+Knihy+%7C+Beletrie+pro+deti+a+mladez+%7C+Dobrodruzstvi+a+western&utm_medium=referral&utm_source=bidZbozi&utm_term=0327534&sznaiid=7517368727565556776" />
            </div> : <></>}
          {page == 4 ?
            <>
              <div className='book-container'>
                <BuyCard name="MegaKnihy" price={288} best={true} link="https://www.megaknihy.cz/pro-deti/320410-prasina-1x-audio-na-cd-mp3.html?utm_source=zbozi.cz&utm_campaign=z001&sznaiid=7517369454124671795" />
                <BuyCard name="audiolibrix" price={299} link="https://www.audiolibrix.com/cs/Directory/Book/5282/Audiokniha-Prasina-Vojtech-Matocha?utm_source=zbozicz&utm_medium=cpc&utm_campaign=5282&sznaiid=7517369453011042111" />
                <BuyCard name="Knihy Dobrovský" price={299} link="https://www.knihydobrovsky.cz/audiokniha-mp3/prasina-343521739" />
                <BuyCard name="Knihy Dobrovský" price={326} link="https://www.dobre-knihy.cz/prasina-1-cdmp3-cte-matous-ruml?utm_campaign=200-500&utm_content=Heureka.cz+%7C+Filmy%2C+knihy%2C+hry+%7C+Poslech+%7C+Audioknihy&utm_medium=product&utm_source=Zbozi.cz&utm_term=zbozi.cz_product&sznaiid=7517369454217729665" />
              </div>
            </> : <></>}
        </div>
      </div>
    </>
  )
}

export default Buy;