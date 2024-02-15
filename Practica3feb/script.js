
let listName =document.getElementById("list-name");
let mainSection =document.getElementById("main-section");
let removeListContainer=document.getElementById("remove-list");

// console.log("element ",listName);
// console.log("inisialvalue",listName.value);
function addList(){
    let listName1=listName.value;
    // console.log("batan clik");
    // console.log("valoareclick",listName.value);
    if (listName.value !==""){

   let listContainer =document.createElement("div");
   listContainer.style.border="2px solid blue";
    let titlu =document.createElement("h2");
    titlu.style.color=("blue")
    let boxInput=document.createElement("input");
    boxInput.setAttribute("id","box-input");
    let boxButton=document.createElement("button");
    boxButton.textContent=("Add item");
    boxButton.addEventListener("click",AddBoxLittle);
    let boxRemovButon=document.createElement("button");
    boxRemovButon.textContent=("Remove")
    
    // itemInput.setAttribute("id",)
    titlu.innerText=listName.value;
    listContainer.appendChild(titlu);
    listContainer.appendChild(boxInput);
    listContainer.appendChild(boxButton);
    listContainer.appendChild(boxRemovButon);
   

    mainSection.appendChild(listContainer);

    
    }
    // else{
    //     titluLittle.style.border="2px solid blue"
    //     titluLittle.appendChild(listContainer);
       
       



    let listNameLittle=listName.querySelector("box-input");
    let titluLittle=document.createElement("h1");
    
    
    function AddBoxLittle(e){
        let listContainer=e.target.parentElement;
        let boxInput =listContainer.querySelector("#box-input");
        let boxInputvalue=boxInput.value;
        if (boxInputvalue !== ""){
            let textLittle= document.createElement("ul");
            
        let listNameLittle=document.createElement("h2");
        listNameLittle.style.color="blue";
        listNameLittle.innerText=boxInputvalue;
        textLittle.appendChild(listNameLittle);
        listContainer.appendChild(textLittle);
        }

    }
    function removeDiv(){
        listContainer.value="";
    }

}





