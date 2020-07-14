
function table() {

    var myTable = document.createElement("table");
    myTable.id = "tableId";
      
    for (var i =0; i < 3; i++) {
        var row = document.createElement("tr");
        row.id = "tr"+i;
                
        for (var j=0; j < 3; j++){
            var col = document.createElement("td");
            col.id = `C${i}${j}`;
            var rowcol = document.createTextNode('');
            col.appendChild(rowcol);
            row.appendChild(col);
        }        
        myTable.appendChild(row);
    }  
    document.getElementById("app").appendChild(myTable);    
} table();

document.getElementById("tableId").addEventListener("click", function(){onclick(table)});

var mark;
var result = {}

function onclick() {
 
  var getid = event.target.getAttribute('id')
 
  if (document.getElementById(getid).innerHTML === 'X' || document.getElementById(getid).innerHTML === 'O') {
    return 'ERROR'
  }
  if (mark === 'X') {
    document.getElementById(getid).innerHTML = "X";
    fillGrid(getid,mark);
    mark = 'O';


  } else {
    document.getElementById(getid).innerHTML = "O"
    fillGrid(getid,mark);
    mark = "X";
  }
  
};

var r1 = ['C00','C01','C02'];
var r2 = ['C10','C11','C12'];
var r3 = ['C20','C21','C22'];
var c1 = ['C00','C10','C20'];
var c2 = ['C01','C11','C21'];
var c3 = ['C02','C12','C22'];
var D1 = ['C00','C11','C22'];
var D2 = ['C02','C11','C20'];
var winners = {r1:r1,r2:r2,r3:r3,c1:c1,c2:c2,c3:c3,D1:D1,D2:D2}

var gridX = {r1:[],r2:[],r3:[],c1:[],c2:[],c3:[],D1:[],D2:[]};
var gridO = {r1:[],r2:[],r3:[],c1:[],c2:[],c3:[],D1:[],D2:[]};
var plays = 0;

function fillGrid(grid,mark) {
    plays++
    var obj;
   if (mark === 'X') {
       obj = gridX;
   }else {
       obj = gridO;
   }

   for (var keys in winners) {
       
    if (winners[keys].includes(grid)) {
        obj[keys].push(grid);
        if (obj[keys].length === 3) {
          var winner = document.getElementById(`${obj[keys][0]}`).innerHTML;
          win = true
          setTimeout(function(){ alert(`${winner} Wins!`); },0)
          setTimeout(function(){window.location.reload()},10)          
         
        }
    }
   }
   if (plays === 9) {
    setTimeout(function(){ alert("It's a tie!"); },0)
    setTimeout(function(){window.location.reload()},10)    
   }
 
}
