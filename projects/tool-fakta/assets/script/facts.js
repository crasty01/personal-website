let facts = [
  'v alubu Opiate existuje na konci titulní písně skrytý song s názvem "The Gaping Lotus Experience"?',
  'řádek písně "Sweet", který zní "Slipping into a dream within a dream”, odkazuje na báseň Edgara Allana Poa "A Dream Within a Dream"?',
  'neharmonické zvuky na začátku skladby "Disgustipated" vytvořila kapela údery kladiva a střílením z brokovnic na tři piana? Tyto záběry lze shlédnout na YouTube.',
  'mluvenou část v písni "Bottom" namluvil Henry Rollins?',
  'obal alba Undertow navrhl kytarysta kapely Adam Jones, čtyřnásobný výtěz cenny Grammy?',
  'píseň "4 Degrees" je založena na faktu, že lidský anální otvor je o čtyři stupně teplější, než vagína? Poukazuje na to, kromě jiného i řádek říkající "4 degrees warmer".',
  'komik Bill Hicks je v poznámkách k nahrávce alba Opiate označován jako inspirace pro album?',
  'název alba Ænima je kombinací slov enema, tedy odstraňování odpadu ze střeva pomocí tuby, a Anima, což je pojem používaný v analytické psychologii pro označení nevědomého ženského protějšku mužské vědomé psýchy, jehož autorem je švýarský psychoterapeut Carl Gustav Jung?',
  'kapela věnovala album Ænima komiku Billu Hicksovi, který je ve vnitřním obalu alba označován jako "Další padlý hrdina"?',
  'píseň “Die Eier Von Satan”, která se překládá jako "koule (vejce) satanovi", je název německého dezertu? Text písně je pak recepnem tohoto sladkého pokrmu.',
  'Danny Carey, bubeník skupiny tool, který je uvedený na 26. místě 100 největších bubeníků všech dob magazínem Rolling Stone, uvedl, že tématem písně "Eulogy" je zakladatel Scientologie Lafayette Ronald Hubbard?',
  'během vystoupení v roce 1997 uvedla Maynard píseň „H.“ odkazem na to, že máte na každém svém rameni anděla a ďábla a jde o zraňující, ale závislý vztah? V show v roce 1996 Maynard často říkal, že to nejsou andělé ani ďáblové, ale přátelé, kteří vám radí. A v rozhovoru v roce 1996, když diskutoval o písni, Maynard řekl: „Můj syn se jmenuje Devo H. To je vše, co řeknu.“',
  'koncept titulní skladby Ænima spochází od Billa Hickse a jeho „Arizona Bay“? Vyplívá to z refrénu písně.',
  'v písni „Third Eye“ je část „man on acid“ převzat ze stand-upu Revelations Billa Hickse? Název skladby odkazuje na tvrzení Billa Hickse, že magické houby mohou „vytřít třetí oko dočista“.',
  'píseň „Forty Six & 2“ je založena na Jungově konceptu „stínu“ a myšlenkách Drunvalo Melchizedeka? „Stín“ představuje část osobnosti, které jedinec nenávidí a bojí se ho.Melchizedek věřil, že další krok naší evoluce bude zahrnovat změnu naší DNA.V současné době mají lidé 44 autozómů a 2 pohlavní chromozomy.V dalším kroku naší evoluce by se DNA podle Melchizedeka přeskupila na 46 autozómů a 2 chromozomy.',
  'myšlenka písně Stinkfist spočívá v tom, že nejsilnějším způsobem, jak prokázat svou lásku k někomu, je dotknout se jeho srdce, jeho skutečného srdce, zkrze řitní otvor? Proto píseň postupuje s textem: „Prst hluboko za hranici“, poté „loket hluboko za hranici“ a nakonec „rameno hluboko za hranici“, kdy by se ruka člověka pravděpodobně mohla dostat k jeho srdci. Ve skutečnosti je téměř nemožné se takto dotknout něčího srdce, bez poškození tkáně a vnitřností. Cestování střevem by vás tedy k lidskému srdci nezavedlo.',
  'Danny uvedl, že na nahrávání alba Ænima mělo velký vliv album Discipline od Kinga Crimsona (1980)? Danny uvedl, že jeho styl ovlivnil bubeník King Crimsona - Bill Bruford,',
  'píseň „Jimmy“ odkazuje na událost v životě Maynarda Jamese (alias Jimmyho) Kennana? „11 and she was gone“ - 11 let je Maynardovi, když byla jeho matka invalidní. „Under a dead Ohio sky“ - Maynard pochází z Ohia.',
  'skladba „Useful Idiot“ obsahuje zvuk přeskakování jehly na konci gramofonové desky, který s postupujícím sledováním hlasitěji roste? Píseň se nachází na konci první strany vinylové verze Ænima jako žert, aby oklamala ty, kteří tuto verzi vlastnili.',
  'V živé verzi „Third Eye“ je muž, který na začátku hovoří, Timothy Leary, převzato z „How to Operate Your Brain“ (1994), zhudebněné řízené meditace, kterou vypráví Leary?',
  'Merkaba, název skadby v albu Salival, je také označení pro školu rané židovské mystiky, která se zaměřuje na „vize“ nalezené v knize Ezechiel?',
  'skladba „L.A.M.C.“ obsahuje skrytou stopu nazvanou „Maynard’s Dick"?',
  'zvuk v písni „Mantra“ v albu Lateralus vytvořil Maynard pomalým mačkáním své kočky?',
  'řádek „Transmutate these leaden grudges into gold“ (Přeměňte tyto olověné zášti na zlato) z písně „The Grudge“ odkazuje na praxi alchymie ve snaze přeměnit olovo ve zlato?',
  'šum ve skladbě „Buddhist chanting“ v písni „Parabol“ vytvořil bubeník Danny Carey foukající do plastových trubek?',
  'titulní skladba „Lateralus“ využívá Fibonacciho sekvence? Čísla Fibonacciho sekvence jsou 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144… a při vykreslení jako čtverce lze nakreslit „golden spiral“? Počet slabik v každém řádku písně „Lateralus“ jsou všechno Fibonacciho čísla. "Black (1) Then (1) White are (2) All I see (3) In my infancy (5) Red and yellow then came to be (8) Reaching out to me (5) Let’s me see (3)". V textu písně je také výraz „Ride the spiral“, který s největší pravděpodobností odkazuje na „zlatou spirálu“.',
  'skladby „Disposition“, „Reflection“ a „Triad“ byly původně zamýšleny jako jedna dlouhá píseň?',
  'při hledání nových technik studoval Danny tabla (dvojice bubnů odlišné velikosti, konstrukce i zvuku) u Aloke Dutty (slavný hráč na tabla)? Tímto nástrojem se vyznačuje například skladba „Disposition“.',
  'grafika alba Lateralus byla jedinečným designem vytvořeným umělcem Alexem Grayem? Grafika je složena z různých vrstvev lidského těla. V knize „Transfigurations“ Alexe Greye říká, že „pilový kotouč“ vyrobený z očí „představuje prvotního ducha prázdnoty a vědomí. Další vrstva byla vajra emitující energii, jemná podstata duše, kolem které koaguluje fyzické tělo. Dalších několik vrstev podrobně popisuje fyzické systémy vnitřností, kosterní, svalové, nervové a kardiovaskulární systémy.“',
  'nápady v knize “Nothing in This Book is True, But it’s Exactly How Things Are” (Nic v této knize není pravda, ale je to přesně tak, jak se věci mají) od Boba Frissella jsou použity pro některé koncepty na albu Lateralus? Kniha se zabývá posvátnou geometrií, mimozemským životem a meditacemi o znovuzrození.',
  'píseň „Faaip De Oaid“ je Enochian (okultní nebo andělský jazyk zaznamenaný v soukromých časopisech Johna Deea a jeho kolegy Edwarda Kelleye na konci 16. století v Anglii.) pro „Hlas Boží“? Píseň obsahuje záznam rozhlasové show pořádané Art Bell v roce 1997. Art Bell dostává zběsilý telefonát od anonymního bývalého zaměstnance z oblasti 51, který popisuje tajemství oblasti 51. Volající říká, že vláda je ve spiknutí s mimozemšťany, kteří jsou „mimodimenzionálními bytostmi“. Volající je přerušen, když začne popisovat plány této mimozemské / vládní koalice.',
  'skladba „Eon Blue Apocalypse“ je o psovi kytaristy Adama Jonese, německé doze jménem „Eon“, který zemřel na rakovinu kostí?',
  '10 000 dní měla být doba, po kterou byla Maynardova matka Judith Marie Keenan částečně ochrnutá poté, co utrpěla mozkovou mrtvici?',
  '„Křídla pro Marii (1. část)“ odkazuje na Maynardovu matku? „Marie“ je její druhé jméno.',
  'hudební video pro film „Vicarious“ bylo vyvinuto s umělcem Alexem Grayem a obsahuje 3D animaci jeho obrazu „Net of Being“? Pokud jde o všechna videa Tool, Adam Jones byl tvůrčí silou, která stála za jeho vytvořením a výrobou.',
  'název „Jambi“ byl převzat z názvu džina v dětském televizním programu „Pee-wee’s Playhouse“?',
  '„Rosetta Stone“ označuje kámen vyrobený z černé žuly, na kterém je napsáno nařízení vydané králem Ptolemaiosem V? v roce 196 př. N. L. Vyhláška má tři různé druhy písma: egyptské hieroglyfy, demotické (staroegyptský jazyk) a starořečtinu. Díky Rosettskému kameni mohl západní svět poprvé pochopit hieroglyfy tím, že měl vedle starořečtinu a egyptské hieroglyfy.',
  'píseň „Lipan Conjuring“ obsahuje indiánské zpěvy? Lidé „Lipan Apache“ tradičně žijí v Texasu, Novém Mexiku a Coloradu.',
  'grafika alba 10,000 Days je dílo umělce Alexa Graye a využívá jeho obrazů „Net of Being“ a „Inner Being“?',
  'jak Maynard porovnává album 10,000 Days s předchozími dvěmi? V rozhovoru řekl: „Na posledních několika albech jsme měli pocit, že pokud představíme tyto vyšší meditace, nějakým způsobem by to lidi otevřelo a pomohlo jim otevřít třetí oko a pomoci jim na jejich cestě. Myslím, že na tomto albu je ve srovnání s ostatními jakýsi vnitřní pocit smutku.“',
];