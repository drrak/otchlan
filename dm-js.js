function getUrlVars(){return location.search.substring(1).split(',');}

function LoadCoordinates(x,y,l){
var r=document.getElementById('map');
var href='<a href=?';
var li='LOKUM ('+href+x+','+y+','+l+'>'+x+','+y+','+l+'</a>)<span style="float:right;">'+href+x+','+y+','+(l+1)+'>LEVEL UP</a>'+' | '+href+x+','+y+','+(l-1)+'>LEVEL DOWN</a></span>';
var lu=li+href+x+','+y+','+(l+1)+'><br><br>';
var ld=li+href+x+','+y+','+(l-1)+'><br><br>';
var su='. Schody Up</a>';
var sd='. Schody Down</a>';
var c=li+'<br><br>';
var n='';

document.getElementById('cel').style.top=((y-lvy)*14)+'px'; 
document.getElementById('cel').style.left=((x-lvx)*14)+'px';

if(l==11){
li='LOKUM ('+href+x+','+y+','+l+'>'+x+','+y+','+l+'</a>)<span style="float:right;">'+href+x+','+y+','+(l+1)+'>LEVEL UP</a></span>';
ld=li+href+x+','+y+','+(l-1)+'><br><br>';
c=li+'<br><br>';

if(x==294&&y==350){n=c+'???';}
else if(x==2&&y==5){n=c+'...';}
else if(x==9&&y==4){n=c+'B. Choose four <a href="http://dmweb.free.fr/?q=node/199">Dungeon Master Champions</a>.';}
else if(x==4&&y==15){n=c+'...';}
else if(x==4&&y==17){n=c+'05. Scroll ("New lives for old bones")<br>I02. "Vi Altar Of Rebirth"';}
else{n=li;}
r.innerHTML=n;
}
if(l==12){
if(x==270&&y==345){n=c+'Latarnia<p>przeszukaj skrzynki (zarysowana soczewka)</p>';}
else if(x==291&&y==331){n=c+'Geezhul';}
else if(x==271&&y==328){n=c+'???';}
else if(x==272&&y==328){n=c+'???';}
else if(x==273&&y==355){n=c+'badziewnik bulgotliwy (porwane dzieci #2)';}
else if(x==288&&y==337){n=c+'Pomieszczenie<p>przeszukaj biurko (klucz do magazynku, tabliczka z biurka, 15*złota moneta)</p>';}
else if(x==288&&y==338){n=c+'Chodnik<p>Kratę można łatwo wyważyć.</p>';}
else if(x==282&&y==349){n=c+'Mistrz Nekromantów - <a href="otchlan-um.txt">umiejętności</a>';}
else if(x==274&&y==355){n=c+'Kratę można wyważyć.';}
else if(x==282&&y==331){n=c+'Za beczką znajduje się ukryte przejście. Potrzebny jest kurek, podobno wytrych też da radę. Komenda wyważ też niby działa, ale nie w moim przypadku. Może byłem za słaby.';}
else{n=li;}
r.innerHTML=n;
}
if(l==13){
if(x==283&&y==334){n=c+'Komnata<p>Na górze znajdziesz '+href+'283,332,14>Hansa Caranela</a>.</p>';}
else if(x==275&&y==342){n=c+'Główny plac<p>11n - brama północna<br>19s - brama południowa<br>5n, 8e - przed rezydencją Caranela<br>12s - okolice gildi łowców<br>5e, 7s - naganiacz<br>6s - okolice rudery<br>8e - zbrojmistrz<br>5e, 3s - cmentarz<br>3s, 4w - latarnia<br></p>';}
else if(x==285&&y==338){n=c+'Brama wschodnia - tutaj zaczynasz.<p>5e, 13n - wioska gnomów<br>5e, 26s, 10e - wioska (córka kupca #2)</p>';}//<img src="file/mapa.png" width="528" height="338" alt="mapa" />';}
else if(x==286&&y==338){n=c+'Znacznik na mapie możesz przenieść kursorem, albo jednym z linków pod mapą, ewentualnie wpisując współrzędne na końcu adresu URL. Jeśli na zaznaczonym obszarze jest coś interesującego, pojawi się dodatkowy opis podobny do tego który teraz czytasz. Zaznaczony obszar można zapamiętać klikając w odnośnik w nawiasie obok LOKUM. Przyciski LEVEL UP i DOWN wiadomo, zmiana poziomów.';}
else if(x==274&&y==336){n=c+'Tawerna "Pod Czerwonym Bykiem"<p>Udziec barani ............... 9<br>Pieczeń z ziemniakami ....... 12<br>Zupa grzybowa ............... 8<br>Kurczak i frytki ............ 10</p><p>SPECIALNOŚĆ ZAKŁADU:<br>Krwawy befsztyk (zapiekany w piwie) .... 11</p><p>pokój (reg. hp i many +200 - 15/dzień)</p>';}
else if(x==281&&y==341){n=c+'Karczma "Pod Klonem"<p>Rosół ....................... 7<br>Kotlety wieprzowe ........... 10<br>Śledzie marynowane .......... 8<br>Pasztet z zająca ............ 13</p><p>SPECIALNOŚĆ ZAKŁADU:<br>Roladki wieprzowe (z piklami) .... 11</p><p>pokój (reg. hp i many +100 - 10/dzień)</p><p>Możesz zapytać barmana o Victorie albo Lothara.</p>';}
else if(x==276&&y==353){n=c+'Bar "Pod Zranionym Turem"';}
else if(x==271&&y==334){n=c+'Bar "W Mrocznym Zaułku"<p>pasztecik 9<br>kufel piwa 4<br>pieczony szczur 9</p>';}
else if(x==273&&y==343){n=c+'Bar<p>MENU:<br>Wędzony pstrąg . . . . . . . . . . . . . 15 złotych monet<br>Potrawa z trąbików . . . . . . . . . . . 18 złotych monet<br>Karp w galarecie . . . . . . . . . . . . 17 złotych monet<br>Miętus pieczony. . . . . . . . . . . . . 21 złotych monet<br>Sandacz zapiekany z warzywami. . . . . . 20 złotych monet<br>Filety z suma. . . . . . . . . . . . . . 23 złotych monet<br>Raki w potrawce. . . . . . . . . . . . . 27 złotych monet<br>Ostrygi opiekane . . . . . . . . . . . . 17 złotych monet</p>';}
else if(x==281&&y==335){n=c+'Pokój gościnny<p>przeszukaj gablota (sakiewka, marka estharyjska, dziwny dolar, kryształ Careliusa)</p>';}
else if(x==280&&y==333){n=c+'Magazyn<p>przeszukaj skrzynie (water chip)</p>';}
else if(x==280&&y==335){n=c+'Magazyn<p>przeszukaj kufry (normalny posążek ptaka)</p>';}
else if(x==282&&y==333){n=c+'Spiżarnia<p>Smakowita połeć boczku kusi zapachem.<br>Wędzona szyneczka czeka na jakiegoś łakomczucha.<br>Pęto kiełbasy kusi subtelnie wędzonym zapachem.<br>Stoi tutaj słoik marmolady z jabłek.<br>Gruby worek mąki stoi tutaj.<br>Gruby worek prosa stoi tutaj</p>';}
else if(x==287&&y==341){n=c+'Szyb<p>gwóźdź</p>';}
else if(x==279&&y==346){n=c+'Kapliczka<p>święty obrazek, można sprzedać '+href+'278,338,13>w sklepie z artefaktami</a></p>';}
else if(x==273&&y==333){n=c+'Hol Gildii Magów<p>Na górze '+href+'274,333,14>Mistrz Magów</a> i pokój wypoczynkowy.</p>';}
else if(x==273&&y==334){n=c+'Restauracja "Pod Fajerbolem"<p>Polędwica z mozarellą ....... 13<br>Zupa wiejska ................ 9<br>Leczo ....................... 9<br>Piersi kaczki z papryką ..... 12</p>';}
else if(x==273&&y==346){n=c+'Rudera<p>Na górze - za ukrytym przejściem - znajdziesz '+href+'274,349,14>Gildie Kleryków</a>.</p>';}
else if(x==283&&y==346){n=c+'Wschodni Kraniec Cmentarza<p>Zejście do kanałaów i '+href+'282,349,12>Gildii Nekromantów</a>.</p>';}
else if(x==270&&y==338){n=c+'Cwaniak<p>Można tu kupić/sprzedać wytrychy i kilka mikstur.</p>';}
else if(x==270&&y==342){n=c+'Mistrz Wojowników - <a href="otchlan-um.txt">umiejętności</a>';}
else if(x==277&&y==353){n=c+'Mistrz Łowców - <a href="otchlan-um.txt">umiejętności</a>';}
else if(x==282&&y==343){n=c+'Mistrz Złodziei - <a href="otchlan-um.txt">umiejętności</a><p>łom</p>';}
else if(x==278&&y==344){n=c+'Mistrz Oprawców - <a href="otchlan-um.txt">umiejętności</a>';}
else if(x==279&&y==349){n=c+'Mistrz Skrytobójców - <a href="otchlan-um.txt">umiejętności</a><p>poradnik skrytobójcy</p>';}
else if(x==281&&y==339){n=c+'Piekarnia';}
else if(x==284&&y==334){n=c+'Szatnia<p>przeszukaj kufry (długa błękitna sukienka, lekki czerwony kaftan z aksamitu, jedwabne rękawiczki)</p>';}
else if(x==283&&y==341){n=c+'Kuźnia - Zbrojmistrz';}
else if(x==283&&y==340){n=c+'Kuźnia - Kowal<p>Kowal ma dla nas zadanie.</p>';}
else if(x==284&&y==348){n=c+'Biblioteka<p>Można tu sprzedać mapy, recepty albo książki.</p>';}
else if(x==274&&y==356){n=c+'Warzywniak';}
else if(x==276&&y==338){n=c+'Sklep Zielarski i nie tylko';}
else if(x==277&&y==338){n=c+'Apteka<p>Można tu sprzedać różne mikstury.</p>';}
else if(x==278&&y==338){n=c+'Sklep z Artefaktami<p>Można tu sprzedać artefakty, czyli przedmioty w białym kolorze.</p>';}
else if(x==279&&y==338){n=c+'Jubiler';}
else if(x==274&&y==347){n=c+'Sklep Taumaturgiczny';}
else if(x==277&&y==354){n=c+'Sklep - Młody Łowca<p>Można tu sprzedać skóry.</p>';}
else if(x==274&&y==337){n=c+'Sklep Wielobranżowy<p>Można tu sprzedać np. ubrania.</p>';}
else if(x==273&&y==342){n=c+'Bank';}
else if(x==275&&y==331){n=c+'Brama północna<p>131n - Skulldust<br>30n, 4e, n - stodoła (córka kupca #1)<br>9n, 4w, n, w, n - kamienne serce<br>n, 6e, 8n - ogród Justyny (pierścień), regeneracja hp i many: +400<br>14n, 10e - pająki<br>38n, 2e - krypta zagadek <span style="color:#484848;">(pchnij kamien)</span></p>';}
else if(x==274&&y==343){n=c+'Biuro Tajemnic<p>'+href+'280,350,13>(279-83,350-54,13) Arena</a><br>'+href+'284,357,13>(284,357-8,13) Slumsy</a><br>'+href+'277,358,13>(277,358,13) Klatki</a><br>'+href+'275,341,13>(275,341,13) Centrum placu</a><br>'+href+'270,348,13>(270,348,13) Wewnątrz Kamienicy</a><br>'+href+'273,346,13>(273,346,13) Rudera</a><br>'+href+'287,341,13>(287,341,13) Szyb</a><br>'+href+'270,345,13>(270,345,13) Latarnia</a><br>'+href+'271,335,13>(271,335,13) Skład</a><br>'+href+'269,332,13>(269,332,13) Opuszczony Dom</a><br>'+href+'284,347,13>(284,347,13) Kaplica</a><br>'+href+'283,346,13>(283,346,13</a> - '+href+'284,345,13>284,345,13) Wschodni Kraniec Cmentarza</a><br>'+href+'272,343,13>(272,343,13</a> - '+href+'273,344,13>273,344,13) Tawerna</p>';}
else if(x==270&&y==345){n=c+'Latarnia<p>Na górze znajdziesz świetlistą kule, doskonałe źródło światła. Na dole jest skrzynia.</p>';}
else if(x==275&&y==361){n=c+'Brama południowa<p>4s, 15e, 10e - wioska (córka kupca #2)</p>';}
else if(x==271&&y==352){n=c+'Gabinet Burmistrza';}
else if(x==270&&y==352){n=c+'Dział Nieruchomości<p>'+href+'276,349,13>&nbsp;40402 - Mieszkanie na Południowej</a><br>'+href+'276,343,13>&nbsp;23429 - Sutereny na Południowej</a><br>'+href+'270,351,13>&nbsp;72778 - Domek przy Klifowej</a><br>'+href+'278,356,13>&nbsp;70719 - Domek przy Ogrodowej</a><br>'+href+'273,359,13>123720 - Rezydencja przy Pogodnej</a><br>'+href+'271,356,13>109361 - Magazyn na Klifowej</a></p>';}
else if(x==280&&y==349){n=c+'Alejka - Naganiacz';}
else if(x==279&&(y==351 || y==352 || y==353)){n=c+'pociagnij dzwignia';}
else if(x==281&&y==338){n=c+'Świątynia<p>przeszukaj skrzynia (miecz, maczeta, czaszka)</p>';}
else if(x==282&&y==338){n=c+'Fontanna przed Świątynią<p>Można tu napełnić bukłak, albo napić się bezpośrednio z fontanny.</p>';}
else if(x==274&&y==350){n=c+'Ukryte zejście do kanałów. Droga w jedną stronę.';}
else if(x==270&&y==336){n=c+'Miałem 8 poziom kiedy jakiś typek zaproponował mi zadanie z gnomami. Nie wziąłem go.';}
else if(x==258&&y==331){n=c+'<a href="https://drrak.github.io/arcanum.map/">Mapa Świata Arcanum</a><br><a href="http://dmweb.free.fr/?q=node/1517">Mapy Dungeon Master i Chaos Strikes Back</a><br><a href="https://drrak.github.io/ultima4/">Mapa Świata Ultima 4</a><br><a href="https://drrak.github.io/ultima5/">Mapa Świata Ultima 5</a><br><a href="https://drrak.github.io/prywatne.sledzctwo/">GP - Prywatne śledztwo</a><br><a href="https://drrak.github.io/kosmolot.podroznik/">GP - Kosmolot „Podróżnik”</a><br><a href="https://drrak.github.io/tajemne.oblicze.swiata/">GP - Tajemne Oblicze Świata</a><br><a href="https://drrak.github.io/otchlan/index.htm?286,338,13">Otchłań - plan miasta Mantar</a><a href="otchlan-lokum.html">&nbsp;</a>';}
else if(x==276&&y==343){n=c+'Suterena<p>Regeneracja hp i mana: +200</p>';}
else if(x==276&&y==349){n=c+'Mieszkanie<p>Regeneracja hp i mana: +200</p>';}
else if(x==270&&y==350){n=c+'Sypialnia<p>Regeneracja hp i mana: +300</p>';}
else if(x==274&&y==359){n=c+'Pokój gościnny<p>Regeneracja hp i mana: +300</p>';}
else if(x==258&&y==361){n=c+'<pre>           .                                                     .\n         .n                 .                   .                 n.\n  .    .dP                dP                     9b                9b.    .\n 4     qXb        .      dX                       Xb      .        dXp     t\ndX.     9Xb     .dXb    __                         __    dXb.     dXP     .Xb\n9XXb._       _.dXXXXb dXXXXbo.                 .odXXXXb dXXXXb._       _.dXXP\n 9XXXXXXXXXXXXXXXXXXXVXXXXXXXXOo.           .oOXXXXXXXXVXXXXXXXXXXXXXXXXXXXP\n  `9XXXXXXXXXXXXXXXXXXXXX\'~   ~`OOO8b   d8OOO\'~   ~`XXXXXXXXXXXXXXXXXXXXXP\'\n    `9XXXXXXXXXXXP\' `9XX\'          `98v8P\'          `XXP\' `9XXXXXXXXXXXP\'\n        ~~~~~~~       9X.          .db|db.          .XP       ~~~~~~~\n                        )b.  .dbo.dP\'`v\'`9b.odb.  .dX(\n                      ,dXXXXXXXXXXXb     dXXXXXXXXXXXb.\n                     dXXXXXXXXXXXP\'   .   `9XXXXXXXXXXXb\n                    dXXXXXXXXXXXXb   d|b   dXXXXXXXXXXXXb\n                    9XXb\'   `XXXXXb.dX|Xb.dXXXXX\'   `dXXP\n                     `\'      9XXXXXX(   )XXXXXXP      `\'\n                              XXXX X.`v\'.X XXXX\n                              XP^X\'`b   d\'`X^XX\n                              X. 9  `   \'  P )X\n                              `b  `       \'  d\'\n                               `             \'\n                               THE NECROMANCER!\n                                 by  @xerubus</pre>';}
//else if((x>=279&&x<=283)&&(y>=350&&y<=354)){n=c+'Arena';}
//else if(x==279&&y==354){n=c+'Arena<br>Kukła';}
//https://googledrive.com/host/0Bx0KpmqOLi2WaUZEYmc5SlVNQVE
//https://googledrive.com/host/0Bx0KpmqOLi2WMmg3N1FpTTE4Q0E
//https://googledrive.com/host/0Bx0KpmqOLi2WWVFuZHhfRS0xRW8
//https://googledrive.com/host/0Bx0KpmqOLi2Wc2Y4ZFdjT0FMQXc
else{n=li;}
r.innerHTML=n;
}
if(l==14){
if(x==281&&y==333){n=c+'Pokój gościnny<p>przeszukaj skrzynia (toga)</p>';}
else if(x==281&&y==334){n=c+'Pokój gościnny<p>lampa</p>';}
else if(x==281&&y==340){n=c+'Pokój<p>Regeneracja hp i mana: +100</p>';}
else if(x==283&&y==332){n=c+'Gabinet Hansa Caranela<p>przeszukaj biurko (sakiewka)</p>';}
else if(x==273&&y==348){n=c+'Sklepik';}
else if(x==274&&y==333){n=c+'Mistrz Magów - <a href="otchlan-um.txt">umiejętności</a>';}
else if(x==274&&y==349){n=c+'Mistrz Kleryków - <a href="otchlan-um.txt">umiejętności</a>';}
else if(x==274&&y==337){n=c+'Pokój<p>Regeneracja hp i mana: +200</p>';}
else if(x==274&&y==346){n=c+'Sypialnia<p>Ukryte przejście za lustrem można otworzyć sześciokątnym lusterkiem. Podobno każdy kleryk ma coś takiego.</p>';}
else if(x==273&&y==334){n=c+'Pokój wypoczynkowy<p>Regeneracja mana: +500</p>';}
else if(x==278&&y==356){n=c+'Sypialnia<p>Regeneracja hp i mana: +300</p>';}
else{n=li;}
r.innerHTML=n;
}
if(l==15){
if(x==270&&y==345){n=c+'Latarnia<p>świetlista kula</p>';}
else if(x==281&&y==332){n=c+'bratek zielenny (porwane dzieci #1)';}
else if(x==20&&y==10){n=c+'B. Directions to go through the room:<br>N E E W E N W N E W E N N E to go from ('+href+'4,20,10>20,10</a>) to ('+href+'4,23,5>23,05</a>)<br>W W W S S(!) S W W N S N N N W to go from ('+href+'4,23,5>23,05</a>) to ('+href+'4,17,5>17,05</a>)<br>E S S S S E E S to go from ('+href+'4,17,5>17,05</a>) to ('+href+'4,20,10>20,10</a>)</a>';}
else{n=li;}
r.innerHTML=n;
}
}

function GetCoordinates(x,y,l){
var rx=(Math.floor(x/14))*1;
var ry=(Math.floor(y/14))*1;
var px=rx+lvx;
var py=ry+lvy;
var mapw=lvw-lvx-1;
var maph=lvh-lvy-1;

if(rx<=mapw&&rx>0&&ry<=maph&&ry>0){
document.getElementById('cel').style.top=(ry*14)+'px'; 
document.getElementById('cel').style.left=(rx*14)+'px'; 
LoadCoordinates(px,py,l);
}
}
