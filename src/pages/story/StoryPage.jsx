import Navigation from 'src/components/navigation/Navigation';
import './StoryPage.css';

import dark from 'assets/dark.jpg';
import TitleArticle from 'src/components/titlearticle/TitleArticle';
import machine from 'assets/machineSmall.png'
import library from 'assets/librarySmall.jpg'
import abandoned from 'assets/abandoned.png'

const style = {
  backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(" + dark + ")"
}

function StoryPage() {
  return (
    <>
      <Navigation />
      <div className='anim background-long' style={style}>
        <h1 className='h-story'>Příběh</h1>
        <TitleArticle small={true}
          content='Kniha Prašina vypráví o trojici dětí – Jirkovi, Anastázii (En) a Tondovi.'
        />
        <TitleArticle small={true} img={abandoned} subimg='Prašina' content='Jirkovi rodiče odjeli za prací do zahraničí, a tak se musel vydat na návštěvu ke svému dědovi na Prašinu sám. Prašina je podivná čtvrť Prahy – jakoby z jiné doby. Nejde tam elektřina, nefungují telefony, světla, ani žádná moderní technika. Hned po přechodu hranice se Jirkovi zastavily hodinky a vypnul mobil. K dědovi byli zvyklí chodit alespoň jednou za měsíc a nosili mu jídlo. Když Jirka dorazil k dědovu bytu, neotevřel mu děda, ale nějaký cizí muž. Ten ho okamžitě popadl za kapuci, jako by ho chtěl zastavit. Po chvíli se naštěstí objevil děda, omluvil se a vysvětlil, že ten muž se jmenuje Patrik a pomáhá mu s něčím přísně tajným. Jirka předal jídlo a chtěl odejít, ale děda mu řekl, že je nebezpečné pohybovat se po Prašině sám. Požádal Patrika, aby ho doprovodil.' />

        <TitleArticle small={true}
          content='Během cesty si Patrik všiml, že je někdo sleduje. Popadl Jirku a schovali se v opuštěném domě. Slyšeli hlasy a kroky, jak někdo vstupuje do budovy. Patrik vytáhl papírový sáček a ukryl ho za knihy v knihovně. Pak ukázal Jirkovi úzkou římsu pod oknem, po které mohou utéct. Jirka ji přelezl a slézal po žebříku dolů. Když se po něm vydal i Patrik, žebřík se pod ním utrhl. Patrik spadl a zůstal nehybně ležet. Jirka si uvědomil, že pád nepřežil.'
        />
        <TitleArticle small={true}
          content='Zanedlouho se objevil muž, který si prohlédl mrtvého Patrika a vrhl se po Jirkovi. Ten utekl, ale trvalo dlouho, než se pronásledovatele zbavil. Už se stmívalo a Jirka nechtěl být doma sám. Zavolal proto kamarádce En.'
        />
        <TitleArticle small={true}
          content='S En a jejím bratrancem Tondou měli tajnou základnu na půdě paneláku. Tam se Jirka ukryl a společně se setkali. En zrovna sledovala zprávy a s hrůzou oznámila, že Prašina se začíná rozpínat a může zasáhnout i jejich domy.'
        />
        <TitleArticle small={true}
          content='Náhle zaslechli kroky na schodech. Jirka se protáhl nad dveře a podíval se škvírou – poznal muže, který ho pronásledoval. Pokusil se ho vyfotit, ale při zmáčknutí spouště fotoaparát cvakl. Muž si zvuku všiml, popadl Jirku a stáhl ho dolů. Jirka začal křičet, muž se lekl a utekl. Zdálo se, jako by se vypařil. Jirka nakonec přespal u En a její babičky, zatímco Tonda šel domů.'
        />

        <TitleArticle small={true} img={library} subimg='Knihovna' content='Ráno se Jirka a En rozhodli vyrazit zpět na Prašinu a promluvit si s dědou. Ten jim zoufale oznámil, že je vše ztraceno, protože Patrik měl u sebe důležitý sáček. Jirka si vzpomněl, kam ho Patrik ukryl, a s En se vydali zpět do onoho domu. Po chvíli ho našli, ale když vyšli ven, znovu je napadl známý muž. Sáček se rozbil, zelená tekutina vytekla a děti byly uneseny. Odvedli je do opuštěné budovy a zavřeli do temné místnosti. Po chvíli Jirku odvedli a chtěli po něm informace o nějakém stroji, ale Jirka nic nevěděl. Stejně dopadla i En. Když je muži vrátili do místnosti, slyšeli jen, jak si někdo stěžuje, že u nich musí zůstat. En si vzpomněla, že má pepřový sprej od babičky. Po domluvě Jirka nalákal hlídače ke dveřím, En mu nastříkala sprej do očí, a oni utekli k dědovi.' />

        <TitleArticle small={true}
          content='Děda jim konečně vysvětlil, co je ten stroj zač – udržuje hranice Prašiny stabilní. Bez něj by se začala šířit do okolí. Děti vyrazily hledat náhradní palivo. Po zemětřesení objevily světélkující látku v nádrži, do které prý kdysi spadl kočár s Hanušem Nápravníkem, stavitelem stroje, a jeho přítelkyní. Náhrdelník s krystalem se zřejmě ve vodě rozpustil a vytvořil nové palivo.'
        />
        <TitleArticle small={true} img={machine} subimg='Stroj' content='En nabrala tekutinu do láhve a spěchali k dědovi. Doma byl ale byt převrácený a děda zmizel. Po chvilce hledání našli na klavíru skrytý znak se zprávou – ukazovala cestu ke stroji. Když k němu dorazili, objevili obrovský stroj a připravili se vložit palivo. Náhle zaslechli hlasy. Objevili se známí muži – šéf celé skupiny, muž se sprejem v očích a další, který držel Jirkova dědu. Děti přivázali k trubce, dědu hodili na zem. Šéf řekl, že chce stroj vypnout, protože podle něj Prašinu vytváří. Děda smutně přiznal, že ano – stroj vznikl pro lidi, kteří chtějí žít bez moderních technologií. Když funguje správně, Prašinu udržuje ve stabilním stavu. Ale jakmile se porouchá, začne se šířit. Šéf chtěl stroj zničit, protože na Prašině vlastnil pozemky a chtěl je po jejím zániku zpeněžit. En však vytáhla mobil a oznámila, že celý rozhovor nahrála a odeslala kamarádkám – pokud se do hodiny neozve, zveřejní vše policii. Šéf se rozčílil, ale uvědomil si, že stroji došlo palivo – což je důvod, proč telefon zase funguje.' />

        <TitleArticle small={true}
          content='Muži je propustili. Děti vložily palivo do stroje, který se znovu spustil. Prašina se začala zmenšovat. Jirka se vrátil do normálního života, ale otázka zůstává: bude Prašina navždy pod kontrolou?'
        />
      </div>
    </>
  )
}

export default StoryPage;