let arr=[];
function test(){
    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;
    tableCreate(x,y);
}

function tableCreate(x,y) {
    const table = document.getElementById('lesson');
    const tbl = document.createElement('table');
    tbl.style.width = "70%";
    tbl.style.border = '1px solid black';
    tbl.id="table";
    tbl.classList.add("table");
    for (let i = 0; i < x; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < y; j++) {
          const td = tr.insertCell();
          let input = document.createElement("input");
          input.classList.add("input_td")
          td.appendChild(input);
          td.style.border = '1px solid black';
      }
    }
    table.appendChild(tbl);

    const button = document.createElement("button");
    button.classList.add("button")
    button.innerText ="Запустить алгоритм";
    button.addEventListener("click",getValue);
    table.appendChild(button);
  }

  function getValue(){
    
    var table = document.getElementById('table');
    for (var r = 0, n = table.rows.length; r < n; r++) {
        arr[r] = [];
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            arr[r][c] = Number(table.rows[r].cells[c].firstChild.value)
        }
    }
    algoritm();
  }

 function algoritm(){
  for (let i = 0; i < arr.length; i++) { //Подсчет отрицательных элементов
    let counter=0; 
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]<0){
            counter++;
        }
    }
    if(counter>= 3){
        arr.splice(i,1);
        i-=1;
    }
  }
  rez();
 }
 function rez(){
  const answer = document.createElement("h2");
  answer.innerText = "Результат";
  const table = document.getElementById('lesson');
  const tbl = document.createElement('table');
    tbl.style.width = "70%";
    tbl.style.border = '1px solid black';
    tbl.id="table";
    tbl.classList.add("table");
    for (let i = 0; i < arr.length; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < arr[i].length; j++) {
          const td = tr.insertCell();
          let input = document.createElement("input");
          input.classList.add("input_td")
          input.value = arr[i][j];
          td.appendChild(input);
          td.style.border = '1px solid black';
      }
    }
    table.appendChild(answer);
    table.appendChild(tbl);
 }



 //Добавление удаление строки в таблице !
 function insert_str(){
   const table = document.getElementById("table_ipad");
   const tr = table.insertRow();
   tr.classList.add("table_str");
   let x = document.getElementsByClassName("table_str").length;
    for (let j = 0; j < 7; j++) {
      const td = tr.insertCell();
      td.setAttribute("style","padding:0px");
      let input = document.createElement("input");
      input.classList.add("input_main_table")
      if (x % 2 == 0){   
        input.setAttribute("style","background:#f3f3f3");
      }
      td.appendChild(input);
    }
 }
function remove_str(){
  let delStr = document.querySelector('#del_str');
  let str = delStr.lastElementChild;
  str.remove();
}

function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss ;

  document.getElementById("clock").innerText = time; 
  var t = setTimeout(function(){ currentTime() }, 1000); 

}