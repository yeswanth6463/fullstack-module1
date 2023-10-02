// const numbers = [1,2,3,4,5];
// const even = numbers.filter((item)=> item % 2 ===0);
// console.log(even);


// const students =[
//     { name: "yes", age: 24},
//     { name: "leo", age: 45},
//     { name: "harold", age: 50},
//     { name: "antony", age: 60},
// ];

// const filterstudent =students.filter((stud, index)=>
// {
//     console.log(index);
//     return stud.age <= 18;
// });
// console.log(filterstudent);


// const marks =[
//     { subject: 'english', marks: 75},
//     { subject: 'tamil', marks: 67},
//     { subject: 'telegu', marks: 65},
//     {subject: 'maths',marks: 78},

// ];
// function sumallmarks(totalmarrks, subj){
//     return totalmarrks +subj.marks;
// }


// const result = marks.reduce(function (totalmarrks =0 , subj)
// {
//     console.log(subj);
//     return totalmarrks +  subj.marks;
// },0
// );
// console.log(result);


const cartoons = ["schinchan", "doremon","spiderrman","batman","batman","doremon"];

const result =cartoons .reduce(function (obj,cartoon){
if (!obj[cartoon]
    ){ obj[cartoon] =1;

    }else{
        obj[cartoon]++;
    }
    return obj;
},{}

    );


    console.log(result);