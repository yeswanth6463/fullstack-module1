const stringInput = document.getElementById("ongoing_string");
const h2 = document.querySelector('h2');
stringInput.addEventListener("keydown",function(event){
h2.innerText=event.target.value;
});