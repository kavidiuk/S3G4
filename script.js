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

const createTable = () => {
  const table = document.getElementById("table");
  for (let i = 0; i < 76; i++) {
    const cellNumber = document.createElement("div");
    cellNumber.classList.add("cell");

    const cellContent = document.createElement("h3");
    cellContent.innerText = i + 1;
    //cellContent.appendChild(cellNumber);
    cellNumber.appendChild(cellContent);
    table.appendChild(cellNumber);
  }
};

window.onload = () => {
  createTable();
  bottone.addEventListener("click", function () {
    function1();
  });
  generateNewSchedule.addEventListener("click", function () {
    generateTable();
  });
};

const function1 = function () {
  const random = Math.floor(Math.random() * 76);
  console.log(random);
  const example = document.getElementById("randomNumber");
  example.innerText = random;
};

const generateTable = function () {
  const generateSchedule = document.getElementById("randomNumber1").value;
  const table = document.getElementById("table2");
  console.log(generateSchedule);
  for (let i = 0; i < generateSchedule; i++) {
    const outDiv = document.createElement("div");
    outDiv.classList.add("newTable");
    outDiv.classList.add("tablestyle");
    for (let i = 0; i < 24; i++) {
      const cellNumber = document.createElement("div");
      cellNumber.classList.add("cell");
      cellNumber.classList.add("cellColor");
      const cellContent = document.createElement("h3");
      cellContent.innerText = i + 1;

      cellNumber.appendChild(cellContent);
      outDiv.appendChild(cellNumber);
    }
    table.appendChild(outDiv);
  }
};

