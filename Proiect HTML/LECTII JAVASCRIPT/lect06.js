// let x,y;
// let array =[1,5];
// [x,y]=

// console.log(x);
// console.log(y);

// let test =["unu","doi","trei"];
// let [a,b,c]=test;
// console.log(a,b,c)

// let a,b;
// [a=1,b=2]=[4]

// let x,y,l,m,n;

// [x,y]=[1,5];

// [x,y.l,m,n]



// functii Map pentru array

let arr=[4,5,8,6,9,3,12];
let arr2=arr.map(x=>x*2);
let arr3=arr.map(x=>{
    x=x*2;
    x=x+1;
    return x});
// console.log(arr3);



// console.log(arr2);



// filter 
let rezultat=arr.filter((x)=>x%3==0);
// console.log(rezultat)

let rezultat1=arr.map((x)=>x%3==0);
// console.log(rezultat);

let rezultat2=arr.filter((x)=>
x%3==0)


let array= [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
let result=array.filter(isPrime);

function isPrime(x){
for(let i=2;i<x;i++){
    if(x%i==0){
        return false;
    }
}
return x>=1;
}

// console.log(result)


// reduce   face o operatie pe array si intoarce un singur rezultat
// prima este recomandata
let array1= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,"vali"];
let result1=array.reduce((a,b)=>a+b);
// console.log( result1);

let getMax=(a,b)=>Math.max(a,b);
let result2=array.reduce(getMax,5);
// console.log(result2);


// find  intoarce prima valoare care corespunde unui test

// let rezultat3=arr.find(x=>x>7);
let resultat =arr.find(x=> x=="vali")
// console.log(rezultat3);
console.log(resultat);


// exercitiu

let arr1=[{name:"Valeriu"},{name:"valeriu2"}];
let name =arr1.find(x=>x.name="valeriu2");
console.log(name)

let arr4=[{name:"Valeriu"},{name:"valeriu2"}];
let name1 =arr4.findIndex(x=>x.name=="valeriu2");
console.log(name1)


// some  

let result5=[0,1,2,3,4,5,6,7,8,9,10,11,12,13].some(x=> x==4);
console.log(result5)

let arr5=[{name:"Valeriu"},{name:"valeriu2"}].some(x=>x.name=="valeriu2");
console.log(arr5);

// every

let arry6=[0,1,2,3,4,5,6,7,8,9,10,11,12,13];
let every=arry6.every(x=>x=0);
console.log(every)











