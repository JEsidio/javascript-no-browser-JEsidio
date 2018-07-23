const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];


function buildTable(data) {
    var table = document.createElement("table");
  
    var fields = Object.keys(data[0]);
    var headRow = document.createElement("tr");
    fields.forEach(function(field) {
      var headCell = document.createElement("th");
      headCell.innerText = field;
      headRow.appendChild(headCell);
    });
    table.appendChild(headRow);
    data.forEach(function(object) {
      var row = document.createElement("tr");
      fields.forEach(function(field) {
        var cell = document.createElement("td");
        cell.innerText = object[field];
        if (typeof object[field] == "number") {
          cell.style.textAlign = "right";
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
    });
    return table;
 } 


document.body.appendChild(buildTable(MOUNTAINS));
