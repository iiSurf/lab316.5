const myForm = document.getElementById("registration");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`You submitted: 
  ${myForm.querySelector("input").value}`);
});