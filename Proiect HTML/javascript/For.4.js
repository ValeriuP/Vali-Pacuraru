let numere = [];
for (let i = 0;i++){
    numere.push(Math.floor(Math.random()*1000+1))

}
numere.sort((a,b)=>a-b);
console.log(numere);
