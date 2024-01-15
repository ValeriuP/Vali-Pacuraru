console.log("Click me")

let buton=document.getElementById("buton");
function showmyname()
{
console.log("Pacuraru Gheorghe Valeriu")
}

function clickme()

{
document.getElementById("Detali").innerText="Pacuraru"

}
function Vali()

{
    let a=parseInt (prompt ());
    let b=parseInt (prompt ());
    let c=parseInt (prompt ());

let p=document.getElementById("Detali");
if (a==b && b==c){
    p.innerText=a+b+c;
    p.style.color="blue";
}
else
{
p.innerText=a+b
}

}
function clic()
{
    let a=prompt()
    if (a%2==0)
    {
        document.getElementById("Btn").style.background="red"
    }
    else{
        document.getElementById("Btn").style.background="blue"
    }
}
