
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung : check!
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

// Start der Applikation / App
startApp();
function startApp() {
    ausgabe(rechner(getZahl("1"),getZahl("2"),getOp()));
}

// Modul: Zahl eingeben | Test:
//ausgabe(getZahl("1"));
function getZahl(numStr){

    const displayStr = "Bitte Zahl " + numStr + " eingeben:"
    let ziffer = prompt(displayStr);
    let zahl = parseInt(ziffer);

    while (isNaN(zahl) && (ziffer !== null)) {
        ziffer =  prompt(displayStr);
        zahl = parseInt(ziffer); 
    }

    return zahl;
}

 // Modul: Operand eingeben | Test:
// ausgabe(getOp());
function getOp() {

    const displayStr = "Bitte + | - | * | / eingeben."
    let op = prompt(displayStr);

    // wenn op NICHT gültig ist UND user NICHT auf Abbrechen geklickt hat   
    while (!isOpValid(op) && (op !== null)) {
        op = prompt(displayStr);
    }

    return op;
}

 // Modul: Operand überprüfen | Test:
//  ausgabe(isOpValid("+"));
//  ausgabe(isOpValid("-"));
//  ausgabe(isOpValid("*"));
//  ausgabe(isOpValid("/"));
//  ausgabe(isOpValid(""));
//  ausgabe(isOpValid("#!?"));
function isOpValid(op) {

    // 1. Variante
    switch (op) {
        case "/":
        case "*":
        case "-":
        case "+":
            return true;
        default:
            return false;
    }

    // 2. Variante
    // return op == "+" || op == "-" || op == "*" || op == "/";

}

// Modul: Rechenart auswählen | Tests:
//Vereinbarung : "+","-","*","/"
// ausgabe(rechner(2,2,"+"));
// ausgabe(rechner(2,2,"-"));
// ausgabe(rechner(2,2,"*"));
// ausgabe(rechner(2,2,"/"));
// ausgabe(rechner(2,0,"/"));
// ausgabe(rechner(2,0,"#!"));
function rechner(a,b,op) {
    // a,b --> Operanden / Operatoren: +,- ..
    switch (op) {
        case "+": // Addition
            return addieren(a,b);
        case "-": // Subtraktion
            return subtrahieren(a,b);
        case "*": // Multiplikation
            return multiplizieren(a,b);
        case "/": // Divison
            return dividieren(a,b);   
        default:
            return "Irgendwas ging schief!";
    }
}

// Modul: Division a / b |  Test:
// ausgabe(dividieren(5,5));
// ausgabe(dividieren(10,2));
// ausgabe(dividieren(0,5));
// ausgabe(dividieren(9,10));
// ausgabe(dividieren(-5,10));
// ausgabe(dividieren(10,0));
function dividieren(a,b) {    
    if (b != 0) 
    {
        return a / b;
    }
       
    return "Teilen durch 0 nicht möglich!";
  
}

// Modul: Multiplikation a * b |  Test:
// ausgabe(multiplizieren(33))
// ausgabe(multiplizieren(-3,2))
// ausgabe(multiplizieren(0,2))
// ausgabe(multiplizieren(0,2))
// 
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
// ausgabe("Hallo, Welt!");
// ausgabe(20);
function ausgabe(outputData) {
    if (typeof outputData == "number") {
        console.log("Das Ergebnis ist: " + outputData);
    } else {
        console.log(outputData);
    }
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