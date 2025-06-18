import Navigation from 'src/components/navigation/Navigation';
import './SettingPage.css';

import scenery from 'assets/scenery.jpg';
import { Link } from 'react-router-dom';

const style = {
  backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(" + scenery + ")"
}

function SettingPage() {
  return (
    <>
      <Navigation></Navigation>
      <div className='anim setting-bg background-long p-5' style={style}>
        <h1>Co je to Prašina?</h1>
        <h4>Nejzáhadnější místo v Praze</h4>
        <p>
          Prašina je podivná čtvrť uprostřed zářící Prahy, rozprostírající se kdesi mezi Václavským náměstím a čtvrtí Vinohrady, ohraničena je Karlovým náměstím a Národním muzeem. Rozkládá se na dvou pahorcích: Šibeničním vrchu a Krchlebech. Ve čtvrti se nachází knihovna, ve které se nachází přes 50 tisíc knih. Zastoupeny jsou převážně české, částečně pak německé, anglické, francouzské a ruské. Většina knih je však ve špatném stavu. Další významnou stavbou je divadlo postavené v klasicistním stylu; budova má bohatě zdobené interiéry, nachází se zde také řada soch a bust. Na úpatí Šibeničního vrchu stojí také nemocnice, ve čtvrti jsou 2 kostely.
        </p>
        <p>
          Čtvrť byla založena ve středověku, což dokládají domy z nepálených cihel v nejstarších částech čtvrti. Prašina má také barokní opevnění. V 19. století, před nástupem elektřiny, se Prašina stala jednou z nejbohatších a nejvýstavnějších pražských čtvrtí. Pravděpodobně nejvýznamnější osobností historie čtvrti se stal geniální vynálezce Hanuš Nápravník, který na Prašině žil a tvořil právě v této době. Založil zde knihovnu a spolu se svou snoubenkou Annou také novou nemocnici.
        </p>
        <p>
          Hanuš Nápravník na Prašině také zemřel. Spolu se svou snoubenkou zahynuli při nehodě kočáru, který se nekontrolovatelně rozjel z kopce a vjel do potoka tekoucího ze Šibeničního vrchu. Tuto událost připomíná malý památník.
        </p>
        <p>
          Po nástupu elektřiny ale bylo zjištěno, že na Prašině elektřina nefunguje, a většina bohatých obyvatel se odstěhovala do jiných čtvrtí.
        </p>
        <div>
          Ale proč? <Link to="/story">Co by mohlo způsobovat tak zvláštní jev?</Link>
        </div>
      </div>
    </>
  )
}

export default SettingPage;