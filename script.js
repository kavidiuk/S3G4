// crea una tabella
// crea 76 celle
// numera le celle da 1 a 76
//--------------------
// crea un bottone
// collega al bottone un numero random
//-------------------
// Dopo il click evidenzia la cella sulla tabella
// cambiano lo sfondo della cella
//--------------------
// Mantieni evidenziate le celle precedentemente estratti dopo la nuovs estrazione
//extra

// for( let i = 0 ; i < 76 ; i++){

//     const cella = document.createElement("div");
//     cella.classList.add("tabella");
//     const numero = document.createElement("H3");
//     giorno.innerText = i;
//     console.log()
// }

for (let i = 0; i < 76; i++) {
  const cella = document.createElement("div");
  cella.classList.add("tabella");

  const numeroCella = document.createElement("h3");
  numeroCella.innerText = i + 1;
  console.log(numeroCella);

  //numeroCella.innerHTML;
}
numeroCella = querrySelector("div");
//const myTable = document.querySelector("#myTable");
//document.body.div.appendChild("myTable");

// const bottone = document.querySelector("button");
// bottone = Math.random(0 , 76);
// console.log(bottone)
