// If  number >3
// say Hello
// else
// say Goodbay

// const number =4
// console.log(number > 3); true

// if(number >3 && number <5) {
//     console.log("heloo")
//     return
//     console.log("bhfjhfjd");
//     } 
   
//         console.log("goodbay")

// const firstNamber ="hello";
// const secondNumber =100;
//  function addSome (num1, num2) {
//     if(typeof num1 !== "number" || typeof num2 !== "number"){
//         console.log("Error");
//         return 0;
//     }
//     console.log(num1 , num2);
//      console.log(num1 + num2);
//     return num1 + num2;
    
//  }
//  const result =addSome(firstNamber, secondNumber);
//  console.log(result); 
   
//  function increaseQuantity(initialQauantity, incrementQantity) {
    
//     return initialQauantity + incrementQantity;
//  }
// console.log(increaseQuantity(1,3))
const produs = {
    greutate : 10,
    dimensiuni: 'mic'
}
function calculatetax{
    // daca nu este in tara + 10%
    // caca delivery este "regular" nu fa nimic, daca este "expres", +25%
    // pentru fiecare Kg + 10$
    //  dimensiunea produs : mic , pret initial
    // mediu + 10$
    // mare  +20$
    // daca pretul este mai mare de 100 $ nu mai calculam contry si delivery
    let finalPrice = price;

     if (price < 100){
        if(contry !=="Romania") {
            finalPrice =finalprice + finalPriceprice/10;
        }
        if (delivery == "expres" ){
           finalPrice = finalPrice + 25;
        }
     }
     finalPrice = finalPrice + productDetails.greutate * 10;
     if(productDetails.dimensiuni == "mediu"){
        finalPrice = finalPrice + 10;
     } 
     else if(productDetails.dimensiuni == "mare");{
        finalPrice = finalPrice + 20;
     }
    return finalPrice;

}
console.log(calculatetax(1001, "Poland", "regular", produs ) )