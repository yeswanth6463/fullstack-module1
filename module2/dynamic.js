// const div =document.querySelector('div');
// const input =document.createElement('input');
// input.value = "angular course";
// input.type ="text";
// input.placeholder ="enter some content";
// input.id ="course_field";
// const h1 =document.createElement("h1");
// h1.innerText = "Dynsmic content html";
// const button = document.createElement("button");
// button.textContent="click me";
// div.appendChild(button);
// div.appendChild(h1);
// div.appendChild(input);
// button.addEventListener("click", function (){
//     window.alert("hey, This is a button");
// });
// const html = document.createElement("html");
// const head = document.createElement("head");
// const title =document.createElement("title");
// const body = document.createElement("body");
// const div = document.createElement("div");
// div.innerText="<h1>helloworld</h1>";
// // body.appendChild(div);
// // head.appendChild(title);
// html.append(body);
// body.append(div);

function dateCreator() {
const div = document.querySelector("div");
const dateInput = document.createElement("input");
dateInput.type = "date";
div.appendChild(dateInput);}

const btn =document.querySelector("button");
btn.addEventListener('click', function()
{
    dateCreator();
});
