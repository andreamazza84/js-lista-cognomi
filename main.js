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
var cicleContinue = "Y";

while (cicleContinue == "Y") {
  var nuovoCognome = prompt("Inserisci qui il tuo cognome");

  //Fa sì che il cognome inseirito abbia la prima lettera maiuscola.
  nuovoCognome = nuovoCognome.charAt(0).toUpperCase() + nuovoCognome.slice(1);

  //Inserisce il cognome nella lista
  listaCognomi.push(nuovoCognome);

  //Ordina i cognomi in ordine algabetico come da default
  listaCognomi.sort();
  console.log(listaCognomi);
  //Chiede all'utente se continuare a inserire cognomi alla lista
  cicleContinue = prompt("Vuoi inserire un altro congnome alla lista? [Y/N]").toUpperCase();
}
