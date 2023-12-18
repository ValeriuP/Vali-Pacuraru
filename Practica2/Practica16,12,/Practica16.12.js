// If number > 3 
// say Hello
// else
// say Goodbye

// const firstNumber = "Hello";
// const secondNumber = 100;

// function addSome(num1, num2) {
//     if(typeof num1 !== "number" || typeof num2 !== "number") {
//         console.log("Error");
//         return 0;
//     }
//     console.log(num1, num2);
//     console.log(num1 + num2);
//     return num1 + num2;
// }

// const result = addSome(firstNumber, secondNumber);
// console.log(result);

// function increaseQuantity(initialQuantity, incrementQuantity) {

//     return initialQuantity + incrementQuantity;

// }
// console.log(increaseQuantity(1,3))

const produs = {
    greutate : 10,
    dimensiuni: 'mic'
}

function calculateTax(price, country, delivery, productDetails) {
    // Daca nu este in Romania +10%
    // Daca delivery este "regular", nu fa nimic, daca este "expres", +25$
    // Pentru fiecare kg +10$ 
    // Dimensiunea produs: mic, pret inital
    // mediu +10$
    // mare +20$
    // Daca pret produs >1000, nu mai calculam country&delivery

    let finalPrice = price;

    if(price < 1000) {
        if(country !== "Romania") {
            finalPrice = finalPrice + finalPrice/10;
        }
        if(delivery == "expres") {
            finalPrice = finalPrice + 25;
        }

    }

    finalPrice = finalPrice + productDetails.greutate * 10;

    if(productDetails.dimensiuni == "mediu") {
        finalPrice = finalPrice + 10;

    } else if(productDetails.dimensiuni == "mare") {
        finalPrice = finalPrice + 20;
    }
    return finalPrice;
}
console.log(calculateTax(1001, "Poland", "expres", produs))
