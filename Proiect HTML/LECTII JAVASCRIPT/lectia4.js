// let.firstObject ={
//     price:400,
//     color:"black"
// }

// function Computer(price,color){
//     this.price = price;
//     this.color = colors;

// }

// let a = new Computer(300,"green")
// let b = new Computer(200,"purple");
let inputName=document.getElementById("name")
console.log(inputName);
let inputByClass = document.getElementsByClassName("test")
console.log(inputByClass);
let inputByTag=document.getElementsByTagName("input");
console.log(inputByTag);

// console.log(document.title);
// console.log(document.URL);
// console.log(document.body);

// selectby Class
let element = document.querySelector(".test");

// select by id #
let element2 = document.querySelector("#test");

// select by tag
let element3 =document.querySelector("input");
// console.log(element);


let rows = document.querySelectorAll("td");
// console.log(rows[0].innerText)
// console.log(rows[1].innerText)

// console.log(rows);

// console.log(table);

let newP=document.createElement("p");
newP.innerText="text in paragraf!";
let h=document.querySelector("h1");
h.appendChild(newP);

// document.body.appendChild(newP);

function Show(){
    let h = document.querySelector("h1");
    h.classList.remove("hidden");

}
function Hide(){
    let h= document.querySelector("h1");
    h.classList.add("hidden");
}

// function Hi(){
//     let ul= document.querySelector("ul");
// //     let li =ul.querySelectorAll("li");
// //     li[1].style.color="red"

// }
function Hi(){
   let but1=document.getElementById("buttonLogin1");
   but1.style.color="yellow";
   but1.style.background="blue";
   but1.style.fontSize="25px";
let ul =document.querySelector("ul");
let li =document.createElement("li");
li.innerText="Hello"
ul.appendChild(li);
}


        function Remove(){
            let but2 =document.getElementById("RemoveLogin");
            but2.style.color="red";
            but2.style.background="grey"
            but2.style.fontSize="25px";
            let ul = document.querySelector('ul');
            let li = ul.querySelectorAll('li');
            if(li.length != 0){
            ul.removeChild(li[li.length-1]);
            }
          }


function addTable(){
  let table2 = document.querySelector("#table2")
  if (!table2){

  
    let people=[{
        name:'Tiberiu'
    },
    {
        name:'Cristian'
    },
    {
        name:'George'
    },
    {
        name:'Marina'
    },
    {
        name:'Paula'
    }]
    let table = document.createElement("table");
    table.id = "tabel2"
    for( let i=0;i<people.length;i++){
        let tr=document.createElement("tr");
        let td=document.createElement("td");
        td.innerText=people[i].name;
        tr.appendChild(td);
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
}
function Stergetabel(){
    let but =document.getElementById("butlog");
    but.style.backgroundColor="red";
    let butstergetabel =document.querySelector("Elimina");
    let table2 = document.querySelector("#table2")
    if(!table){
        remove.table;
    
    }

}

function Listeaza(){
let arata=document.querySelector("reda");
 let buton1=document.getElementById("butonAdauga");
  buton1.style.background="green";

if(!arata) {
    let people=[{
        name:"Andrei"
    },
    {
        name:"vasile"
    },
    {
        name:"Stefan"
    },
    {
        name:"Oana"
    },
    {
        name:"Andrea"
    }

    ]
    let reda =document.createElement("reda");
    for (let i=0;i<people.length;i++){
        let tr=document.createElement("tr");
        let td=document.createElement("td");
        td.innerText=people[i].name;
        tr.appendChild(td);
        reda.appendChild(tr);
        reda.style.color="blue";
        reda.style.fontFamily=("Arial","bold");
        reda.style.fontSize="35px"
    }
document.body.appendChild(reda);
}
}
function Delisteaza(){
    let buton =document.getElementById("butonSterge");
    buton.style.background="red";
    let tr=document.createElement("tr");
    let td=document.createElement("td");

    let reda= document.querySelector("reda");
    if(reda.length !=0){
        reda.remove(td);
         buton.style.color="black"
         
    }
    else{
        
    }
        
    }
    // tr.remove(td[td.length-1]);
    // tr.removeChild(td[td.length-1]);
    
    
    // Nu inteleg cum sterg numele pe rand





    

