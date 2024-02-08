let result=""
for(let i=0; i<=10; i++){
    for(let j=1; j<=10; j++){
        result +=i*j +",";
    }
    result += "\n"
}
document.body.innerText =result;