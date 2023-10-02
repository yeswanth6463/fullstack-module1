

// const person ={};
// person["firsrtname"]="yeswanth";
// person["lastname"] ="reddy";
// person.age =24;
// person.designation = "fullstack devloper";
// console.log("object");
// console.log(person.firsrtname+"work as a" +person.designation);


// const person1 ={
//     firstname : 'yeswanth', lastname : 'reddy'
// }
// ;
// const person2 ={firstname:'leo', lastname: 'das'};
// const personCollection =[person1,person2];
// console.log(personCollection);



// const school = new Object();
// school .name ="kks mani scholl";
// school.grade ="A";
// school.address ="new address";
// const school2 = new Object(null);
// console.log(school2);



// const student =new Object();
// student.name ="yesswanth";
// student.percentage="67%";
// student.greet =function(){
//     return "hello world";
// };

// const student ={
//     name:"yeswanth",
//     percentage: "90",
//     greet: function(){
//         return this.name+"hello world";
//     },
// };

// console.log(student.greet());


function person(fname,lname,age , contactnumber){
    this.firstname = fname;
    this.lastname = lname;
    this.age=age;
    this.contactnumber=number;

}


const p1 =person("yeswanth","reddy",24, 9898988989);
console.log(p1.fname);