// header controls 
let listName =document.getElementById("list-name");
let mainSection =document.getElementById("main-section");

let removeListContainer=document.getElementById("remove-list");
let removList=document.getElementById("remove-list");
// removeListContainer.addEventListener("click",removList);

removeListContainer=("Remove List ")


// header functia de crearea de div,input,butoane
function addList(){
    let listName1=listName.value;
   
    if (listName.value !==""){

   let listContainer =document.createElement("div");

    listContainer.classList.add("list_container");
    let titlu =document.createElement("h2");
   

    let boxInput=document.createElement("input");
    boxInput.setAttribute("id","box-input");
    let boxButton=document.createElement("button");
    boxButton.textContent=("Add item");
    boxButton.addEventListener("click",AddBoxLittle);
    // let boxRemovButon=document.createElement("button");
    // boxRemovButon.textContent=("Remove");
    boxInput.classList.add("box_input");
    boxButton.classList.add("box_botton");
    // boxRemovButon.classList.add("box_remov_button");
    
    // incorporare in list container
    titlu.innerText=listName.value;
    listContainer.appendChild(titlu);
    listContainer.appendChild(boxInput);
    listContainer.appendChild(boxButton);
    // listContainer.appendChild(boxRemovButon);
   

    mainSection.appendChild(listContainer);

    // creare de div mic lista mica
    let divContainer =document.createElement("div");
            divContainer.style.border="2px solid blue";
            let ul= document.createElement("ul");
            ul.classList.add("text_Little");
            listContainer.appendChild(ul);

    
    }
  
    //  creare de lista mica
    let listNameLittle=listName.querySelector("box-input");
    let titluLittle=document.createElement("h1");
}
    //  functia de la lista mica
    function AddBoxLittle(e){
        let listContainer=e.target.parentElement;
        let boxInput =listContainer.querySelector("#box-input");
        let boxInputvalue=boxInput.value;
        
        
        let ul=listContainer.querySelector("ul");
        if (boxInputvalue !== ""){
            
            
            let li =document.createElement('li');
            
        let h2=document.createElement("h2");
        
       



        h2.style.color="blue";
        h2.innerText=boxInputvalue;

            li.appendChild(h2);
            ul.appendChild(li);

            //    buton X sterge li 
            let bottonRemovLittle=document.createElement("button");
            bottonRemovLittle.textContent=("remov");
            li.appendChild(bottonRemovLittle);
            bottonRemovLittle.style.color="red";
            bottonRemovLittle.addEventListener("click",(e)=>removLi(e,ul));
            
        }



        

        

    } 
    // functia de a sterge li din tabelul mic
   
  


function removLi(e,container){
    // let li =document.querySelector("li");
    // if(li.lengt !=0){

       
    let listItem =e.target.parentElement;
    
    container.removeChild(listItem);
    
    

}


function removList1(){
    
    // let button =document.getElementById("remove-list")
    // let removeListContainer1=removeListContainer.value;
    let listContainer=document.querySelectorAll(".list_container");
   
    listContainer.forEach((elementDivMic)=>{elementDivMic.remove()});
    // if(listContainer.value !=0);
    // removeListContainer.value=""
}


