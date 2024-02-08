function hai()
{
    let cecul =document.querySelector("ul");
    if (!cecul){

    
    let ul =document.createElement(`ul`);
    let li0 =document.createElement(`li`);
    let li1 =document.createElement(`li`);
    let li2 =document.createElement(`li`);
    li0.innerText="Andrea "
    li1.innerText="Ines"
    li2.innerText="Vali"

  ul.appendChild(li0);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.addEventListener("mouseover",mouse),

document.body.appendChild(ul);
addColor()
    }
}   
function mouse (e){
// console.log("e.target")
let el = e.target;
// el.style.color = "black";
if(el.tagName=="LI"){

    el.style.color ="black";
}
}

function remove(){
let list = document.querySelector("ul");
if(list){
    let li =list.querySelector("li");
   if(li){
    list.removeChild(li);
   }
   else{
    document.body.removeChild(list);
   }

}

}
function addColor(){
    let ul=document.querySelector("ul");
    if(ul){
        // ul.style.color="red";
        let li =ul.querySelectorAll("li");
        let li2 = [...li]
        li =li2;
        li.reverse();
        for(let ele of li){
            ele.style.color="red";
        }
    }
}
function removeColor(){
    let ul= document.querySelector("ul");
    if(ul){
        let li =ul.querySelectorAll("li");
        console.log(li);

        for(let ele of li){
            console.log(ele.style.color);

            if(ele.style.color !== "red"){
                ele.style.color = "blue";
                break


            }
        }

    }
}