// Lista Cognomi
// Chiedere all'utente il cognome
// Inserirlo in un array con altri cognomi: ‘Bianchi', ‘Rossi', ‘Duzioni', ‘Balsano', ‘Verdi'
// Stampa la lista ordinata alfabeticamente
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

//
var listaCognomi = [
  "Bianchi",
  "Rossi",
  "Duzioni",
  "Balsano",
  "Verdi",
  "Cambrini",
  "Cardinali",
  "Zuccaroli",
  "Lerro"
];

//Ordina la lista in ordine alfabetico di default
listaCognomi.sort();

//Variabile di controllo per continuare o meno il ciclo while
var cicleContinue = "Y";

while (cicleContinue == "Y") {
  var nuovoCognome = prompt("Inserisci qui il tuo cognome");

  //Fa sì che il cognome inserito abbia sempre la prima lettera maiuscola.
  nuovoCognome = nuovoCognome.charAt(0).toUpperCase() + nuovoCognome.slice(1);

  //Controllo della presenza del congnome inserito nella lista
  var controlloCognome = "";
  var validation = 0;
  for (var i = 0; i < listaCognomi.length; i++) {
    controlloCognome = listaCognomi[i];
    if (controlloCognome == nuovoCognome) {validation++};
  }

  if (validation > 0) {
    alert("Il cognome inserito è già presente nella lista");
  }
  else{
    alert("Il cognome inserito è stato aggiunto alla lista")
    //Inserisce il cognome nella lista
    listaCognomi.push(nuovoCognome);

    //Ordina i cognomi in ordine algabetico come da default
    listaCognomi.sort();
  }

    //Salva la posizione dell'ultimo cognome inserito all'interno della lista
    var posizioneCognome = listaCognomi.lastIndexOf(nuovoCognome);

    //Mostra il cognome e la posizione nella lista all'interno della pagina
    document.getElementById("cognome").innerHTML = nuovoCognome;
    document.getElementById("posizione").innerHTML = posizioneCognome;

    //Chiede all'utente se continuare a inserire cognomi alla lista
    cicleContinue = prompt("Vuoi inserire un altro congnome alla lista? [Y/N]").toUpperCase();
}
