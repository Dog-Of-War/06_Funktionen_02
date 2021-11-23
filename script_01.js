
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check!
*/




// Modul: Multiplikation a * b |  Test:
// ausgabe(multiplizieren(33))
// ausgabe(multiplizieren(-3,2))
// ausgabe(multiplizieren(0,2))
function multiplizieren(a,b) {
    return a * b ;
}

// Modul: Subtraktion a - b |  Test:
// ausgabe(subtrahieren(2.0,1.1));
// ausgabe(subtrahieren(2,10));
// ausgabe(subtrahieren(2,0));
function subtrahieren(a,b) {
    return a - b;
}

// Modul: Addition a + b |  Test:
// ausgabe(addieren(2,1));
// ausgabe(addieren(2,-5));
// ausgabe(addieren(0,1.1));
function addieren(a,b) {
    return a + b;
}

// Modul: Konsolenausgabe | Test:
// ausgabe("Hallo, Welt!")
function ausgabe(outputData) {
    console.log(outputData);
}

/*
 Heute bleibt die Küche kalt ...
 wir gehen in den Wienerwald. 
*/

/*
 servieren(anrichten(gemuesekoch(),saucenkoch()));

function servieren(teller) {
    console.log("Einmal einen " + teller +  " Bitte sehr!")
}

function anrichten(kartoffeln,soße) {
    return "Teller mit: "+ kartoffeln + " " + soße;
}

function gemuesekoch(){
    return "gekochte Kartoffeln";
 }
 
 function saucenkoch() {
     return "lecker Sauce";
 }
 */