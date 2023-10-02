const fruits  =["mangoo " , "apple", "water","dragonfu"]
const firstName= new String ("yeswanth");
const myDate = new Date();
// console.log(fruits instanceof Object);
// console.log(fruits instanceof Array);
// console.log(fruits instanceof String);
// console.log(fruits instanceof Number);
// console.log(fruits instanceof Boolean);
logger(firstName);
logger(fruits);
logger(myDate)
function logger(element){
    console.log(element);
    console.log(element instanceof Object);
    console.log(element instanceof Array);
    console.log(element instanceof String);
    console.log(element instanceof Number);
    console.log(element instanceof Boolean);
    console.log(element instanceof Date);
    console .log("////////!");


}