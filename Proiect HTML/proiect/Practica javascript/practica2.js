// given a string, you have to return a string in which each caracters (case sesitive) is repeated once

// "string"      SSttrriinngg
// "Hello world"   "HHeelloo wwoorrlldd"
// "1234!"      "11223344!!"

// function doubleChart(str){
//     let litere=""
//     for(let i=0;i<str.lenght;i++){
//         litere+=str[i]+str[i];
//     }
//     return litere;
// }
// anoather solution
// const doubleChar = (str) => str.split("").map(c =>c +c).join("");

// function doubleChar(str) {
//     var word =``;
//     for(var i=0;i<str.length;i++){
//         word=word + word[i] + str[i];
//     }
//     return word;
// }

// function doubleChar(str){
//     let litere=""
//     for(let elem of str){
//         litere+=elem + elem
//     }
//     return litere;
// }


// another solution
// function sumArray(array){
//     if (array ==null){
//         return 0;
//     }
//     else {
//         array = array.sort(function(a,b){return a-b;});
//         for (var i=1; i< array.length -1; i++){
//             total +=array[i]
//         }
//         return total;
//     }
// }
// 2
// Kata Task 
// I have a cat and a dog 
// i got theam at same time as Kitten/puppy.That was human Years  years ago .
// return their respective ages now as [humenYears,catYears,dogYears]
// homenYears =1
// humenYears are whole numbers only 

// catYears
// 15 cat years for fierst year 
// 9  cat years for second year
// 4 cat years for each year after that

// var HumenYearsCatYearsDogYears = function(humanYears){
//     let dogYears =0;
//     let catYears =0;
//     for (let i=1; i<=HumenYearsCatYearsDogYears;i++){
//         if(i==1){
//             dogYears+=15;
//             catYears+=15;
//         }
//     }
//     return [humanYears,catYears,dogYears];

// }

// another solutions

// const humenYearsCatYearsDogYears = (humanYears) =>{
//     let catYears =0;
//     let dogYears =0;

//     for (let i=1;i<=humanYears;i++) {
//         catYears+=15;
//         dogYears+=15;
//     }
//      if (i===2){
//         catYears+=9;
//         dogYears+=9;

//     }
//     else {
//         catYears+=4;
//         dogYears+=5;
//     }
//     return [humeanYears,catYears,dogYears]
// }
 
