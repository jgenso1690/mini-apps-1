
function table() {

    var myTable = document.createElement("table");
    myTable.id = "tableId";
      
    for (var i =0; i < 3; i++) {
        var row = document.createElement("tr");
        row.id = "tr"+i;
                
        for (var j=0; j < 3; j++){
            var col = document.createElement("td");
            col.id = `${i}.${j}`;
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
 console.log(event)
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

var r1 = ['0.0','0.1','0.2'];
var r2 = ['1.0','1.1','1.2'];
var r3 = ['2.0','2.1','2.2'];
var c1 = ['0.0','1.0','2.0'];
var c2 = ['0.1','1.1','2.1'];
var c3 = ['0.2','1.2','2.2'];
var D1 = ['0.0','1.1','2.2'];
var D2 = ['0.2','1.1','2.0'];
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
            document.getElementsByClassName('model-content').innertext = "WINNER!"
            winner();
        }
    }
   }
   if (plays === 9) {
    document.getElementsByClassName('model-content').innertext  = "It's a tie!"
       tie();
   }
   return
}

function winner(){
    //var button = document.createElement('BUTTON')
    
   document.querySelector('.bg-modal').style.display = 'flex';
   document.querySelector('.close').addEventListener('click',function(){
      location.reload() 
    document.querySelector('.bg-modal').style.display = 'none';

})

}

function tie(){
    //var button = document.createElement('BUTTON')
    
   document.querySelector('.bg-modal').style.display = 'flex';
   document.querySelector('.close').addEventListener('click',function(){
      location.reload() 
    document.querySelector('.bg-modal').style.display = 'none';

    })
}
