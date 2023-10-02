var fullname = "yeswanth reddy";


function greet(){

    fullname ="yeswanth reddy";
    var age = 24;
    console.log(fullname);
    console.log(age);
}

function greet2 (){
    fullname ="leo das"
    console.log(fullname);
}    



greet();
greet2();
greet();

function num1(number1){
    const result = number1 *2;
    function num2(){
        return result * 3;

    }
    const resp = num2();
    console.log(resp);
}
num1(10)
