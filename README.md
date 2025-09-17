# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.

https://kaj-benjaminsitanala.github.io/SushiMania/




## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Kaj-Benjamin Sitanala

  #### Je startniveau:
  Rood
  #### Je focus:
  Responsiveness 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://sushimania.co.uk/
  Een sushi website uit de UK, waarvan ik denk dat het wel moet lukken voor mij om dat na te maken...

  #### Screenshot(s) van de eerste pagina (small screen): 
  Homepage
  <img src="./readme-images/pagina-1.png" width="375px" alt="homepage met een hamburger menu, een slide menu/hero images.">
  <img src="./readme-images/pagina-2.png" width="375px" alt="dan nog een hero met een welcome en drie knop menu.">
  <img src="./readme-images/pagina-3.png" width="375px" alt="een klein tekst sectie met een knop">
  <img src="./readme-images/pagina-4.png" width="375px" alt="een uitgebreidde google map met een menu om de map aan te passen, deze wordt lastig.">

  #### Screenshot(s) van de tweede pagina (small screen):
  Menu
  Een pagina waarvan ik denk dat het moeilijk is, maar ook
  doormiddel van hulp wel moet lukken en tegelijkertijd handig kan zijn voor mijn buitenschoolse activiteiten (ik werk in horeca).
  <img src="./readme-images/paginatwee-1.png" width="375px" alt="navigatie is beetje veranderd en de pagina heeft een groot menu">
  <img src="./readme-images/paginatwee-2.png" width="375px" alt="het menu heeft een uitzetbaar slidemenu waarmee je het restaurantmenu weergeeft per pagina/categorie.">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details open>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Bevindingen ScreenReader:
  Op de eerste pagina van mijn website zijn meeste linkjes logisch, behalve de drie knoppen in de Welcome section van de pagina, hierbij zijn 3 knoppen met als knop een icon en een lapje text die de knop beschrijft, maar de icons zijn ook linkjes die als alt text alleen wat er weergegeven wordt aangeeft. Dus voor de screenreader is het hier handiger om per link de img en de p in 1 link te zetten met 1 omschrijving van de link.

  Voornamelijk op mijn 2<sup>e</sup> pagina (het menu) is het erg lastig navigeren door de vele optie's én omdat elke zin een heading is, dus als je door de headings heen gaat leest hij elke zin voor en elke prijs en elke beschrijving.

  Ook de besturing door het menu heen, met de verschillende opties is erg groot en een volledige lijst als navigatie.

  Ook de 'Mild' en de 'Vegetarian' is aangegeven met kleur (en omdat dat ook als heading is aangegeven) kan het erg verwarrend zijn. Ik ging er met de screenreader door (door de headings) en hij zegt bij elke pagina van het menu eerst mild en vegetarisch als aanwijzing dat rood mild betekent en groen vegetarisch. De kleuren worden niet aangegeven in de screenreader en bij elke optie die vegetarisch is wordt het ook niet aangegeven, dus hier zit ook nog verbetering in. Even gedouble checked bij studentassistent en inderdaad alle text is in headings tot en met heading 6.

  Bevindingen WCAG Checklist:
<img src="./readme-images/wcag_1.JPG" width="375px" alt="Scan van WCAG Checklist's eerste bladzijde">
<img src="./readme-images/wcag_2.JPG" width="375px" alt="Scan van WCAG Checklist's tweede blz.">
<img src="./readme-images/wcag_3.JPG" width="375px" alt="Scan van WCAG Checklist's derde blz.">
<img src="./readme-images/wcag_4.JPG" width="375px" alt="Scan van WCAG Checklist's vierde blz.">
<img src="./readme-images/wcag_5.JPG" width="375px" alt="Scan van WCAG Checklist's vijfde blz.">
</details>



## Breakdownschets (week 1)

<details open>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="./readme-images/Fullpage-01.jpg" width="375px" alt="breakdown van de hele pagina">
  <img src="./readme-images/Fullpage-02.jpg" width="375px" alt="breakdown van de tweede hele pagina">


  ### dynamisch deel (bijv menu): 
  <img src="./readme-images/DynamicElements.png" width="375px" alt="Een header met een dropdown hamburger navigatie en een slide menu met een achtergrond die automatisch wisselt en de optie om met knoppen te besturen.">
 

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="./readme-images/DynamicElementMap.png" width="375px" alt="Een google maps met een besturing (knoppen) om de plaatsen te veranderen.">
</details>





## Voortgang 1 (week 2)

<details open>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Het ging over het algemeen heel soepel met de homepage, ik heb de dingen die ik vorige keer (twee jaar terug alweer) mis deed flink vermeden: De dingen die ik vermeed zijn onder andere 'Display: Grid', positioneren vooral door margins te gebruiken, widths buiten het scherm door 'vw' te gebruiken (dit gaat nogsteeds soms, dus goed op letten).
  <img src="./readme-images/Screenshot - Width bug.PNG" width="375px" alt="Een screenshot van de width buiten het scherm, ookal heb ik horzintaal scrollen (x-overlfow) op hidden gezet.">

  Verder heb ik heel erg geprobeerd om mijn website snel af te maken, niet gehaast, maar er gewoon echt veel aan te zitten. Ik heb de eerste keer (de vorige keer) veel problemen gehad met tijdsnood en daardoor heb ik toen niks in deze readme gezet, allemaal opstapelende problemen. 

  Verder begrijp ik code in het algemeen beter dan vorige keer, wellicht door meer tijd (dit is mijn enige vak op het moment).

  ### Agenda voor meeting
  samen met je groepje opstellen

  | Lisa      
  Hoe ga ik de slider op de homepage aanpakken?
  Breakdownschets nagaan
  De divs / classes op sommige plekken, correct gebruikt of niet?
  Kijken of mijn Html semantisch correct is
  Css  opzet checken
  Ik wil minder gaan nesten en onnodige divs gbruiken, hoe pak ik dit aan

  | Kaa
  Breakdownschets nakijken
  Html structuur controleren of het matcht met breakdownschets
  Groenlicht krijgen voor css

  | Robin
  *
  Breakdownschets nakijken
  Html structuur controleren of het matcht met breakdownschets
  Groenlicht krijgen voor css

  | Kaj
  Minder nesten - inline style
  Verbeterpunten in schoonheid... Wat moet ik veranderen (ID's, classes, mediaqueries)
  Wat valt nog niet te snappen in mijn code...
  Breakdownschets nakijken en verbeteren.

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - AutoSlide kan in CSS niet met javascript. Author toevoegen in head, FaviCon terugzetten.
  - SVG gebruiken voor social media iconen, vooral later makelijkker om die te veranderen van kleur.
  - Screenreader tips voor control-option-u als lijst om mijn website te checken. p boven img, informatie altijd boven decoratie.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>
