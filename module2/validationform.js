// const btn = document.getElementById("btn_login");
// btn.addEventListener("click",function(){
// const uName = document.getElementById("uName");
// const uPass =document.getElementById("uPassword");
// const u = checkUserNameValidity(uName.value);
// const p = checkPasswordValidity(uPass.value);
// if( u && p){
//     console.log({userName: uName.value, password: uPass.value});
// }else{
//     console.log("Invalid Credntials");
// }
// });
// function checkUserNameValidity(userName){
//     return userName.includes("@gmail.com");
// }
// function checkPasswordValidity(password){
//     return password.length === 6;
// }
// btn.addEventListener("click",function(){
//     const u = checkUserName
//     console.log({
//         uName_val,
//         uPass_val,
//     });
// }
// );
const btn = document.getElementById("btn_login");
btn.addEventListener("click", function () {
  const uName = document.getElementById("uName").value; // Get the value of username input
  const uPass = document.getElementById("uPassword").value; // Get the value of password input

  const u = checkUserNameValidity(uName);
  const p = checkPasswordValidity(uPass);

  if (u && p) {
    console.log({ userName: uName, password: uPass });
  } else {
    console.log("Invalid Credentials");
  }
});

function checkUserNameValidity(userName) {
  return userName.includes("@gmail.com");
}

function checkPasswordValidity(password) {
  return password.length === 6;
}
