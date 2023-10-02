const fruits = ["orange" , "apple","mango","orange"]

console.log(fruits);
fruits.sort();
fruits.reverse();

console.log(fruits);


const axis =[22.3 ,21.9,32,1,5,100.56];
axis.sort(function(a,b){
    console.log(a,b,a-b);
    return a - b;
});
console.log(axis);


const num1 =[1,3,4];
const num2 = [2,5,8];

console.log(num1.concat(num2));
