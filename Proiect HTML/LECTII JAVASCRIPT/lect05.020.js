let showButton = document.querySelector(`#buttonLogin`);
showButton.addEventListener(`click`,Show);

// showButton.onclick=function(){
//     alert("Alerta, Salut")
// }

function Show(){
    let newButton= document.createElement(`button`);
    newButton.textContent=`My new Button`;
    newButton.addEventListener(`click`,AlertFunction);
    document.body.appendChild(newButton);
}

function AlertFunction(){
   let me =new User(`adutibi`,`tibi.radu@gmail.com`,`Tiberiu`,`Radu`,5);
   let saveToDabase=JSON.stringify(me);
   localStorage.setItem(`Test`,saveToDabase);
   let storage=localStorage.getItem(`Test`);
//    storage.log(storage);
   console.log(storage);


    // alert(`Hello !`);
    localStorage.setItem(`Test`, `Hello storage`);
    // localStorage.getItem();
    // alert(localStorage.getItem(`Test`))

}

function User ( username,email,firstname,lastname,age)
{
    this.username=username;
    this.email=email;
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age
}


// Registru new user

let submit = document.querySelector(`#submit`);
submit.addEventListener(`click`,Save);

function Save (){
    // alert(`Hello`);
    let username =document.getElementById(`inp_username`);
    let email =document.getElementById(`inp_email`);
    let firstname =document.getElementById(`inp_firstname`);
    let lastname =document.getElementById(`inp_lastname`);
    let age =document.getElementById(`inp_age`);

    let userData = new User(username.value,email.value,firstname.value,lastname.value,age.value);
    console.log(userData)
   
    // if(Userdata.username !="" && Userdata.email !="")){
        if(sunt_inputurile_completate()){
            // if(!validare_lungime_input(username) )
            //     return true;
            //     if(!validare_lungime_input(email) )
            //     return true;
            //     if(!validare_lungime_input(firstname) )
            //     return true;
            //     if(!validare_lungime_input(lastname) )
            //     return true;
            
                 let bullTest= false;
                 bullTest=validateInputLength(username) || validateInputLength(email)
                 || validateInputLength(firstname) || validateInputLength(lastname);
           if(!bullTest){
            return true;
           }
           if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)){
            return true;
           }
           if( usernameAlreadyExists(username.value)){
            alert("Username Alert Exists")
            return;
           }

           function usernameAlreadyExists(username){
            let storage = localStorage.getItem(`useri`);
            if(storage){
                storage=JSON.parse(storage);
                for(let element of storage){
                    if(element.username.toLowerCase() == username.toLowerCase()){
                        return true;
                        
                    }
                }
                return false;
            }
            return false;
           }
           
                 let user= [];
            user=JSON.parse(localStorage.getItem("useri"));
            if(!user){
        
                 user=[];
        
            }
    
    user.push(userData);


    localStorage.setItem(`useri`,JSON.stringify(user));
    clearInput();
    window.location.href="login.html"
    // username.value="";
    // email.value="";
    // firstname.value="";
    // lastname.value="";
    // age.value="";
    
    }
    else{
        alert("completeaza toate randurile")
    }


}

function sunt_inputurile_completate(){
    let inputs =document.querySelectorAll(`input`);
    for (let i=0;i<inputs.length;i++){
        if(inputs[i].value==""){
            return false;
        }

 }
 return true;
}
function clearInput(){
    let inputs =document.querySelectorAll(`input`);
    for (let i=0;i<inputs.length;i++){
        inputs[i].value="";
    }
}

function User(username,email,firstname,lastname,age){
    this.username=username;
    this.email=email;
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
}
function validateInputLength(input){
    let valoare= input.value;
    if(valoare.length>3){
        input.style.border="1px solid black";
        return true

    }
    input.style.border="1px solid red";
    return false;
}




