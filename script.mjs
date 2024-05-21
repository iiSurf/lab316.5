const myForm = document.getElementById("registration");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`You submitted: 
  ${myForm.querySelector("input").value}`);
  
});

const email = form.elements["email"];

function validateEmail(evt) {
  let emailVal = email.value;

  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    alert(
      "Your email must include an @ symbol, which must not be at the beginning of the email."
    );
    email.focus();
    evt.returnValue = false;
    return false;
  }

  if (dotpos - atpos < 2) {
    alert(
      "Invalid structure: @.\nYou must include a domain name after the @ symbol."
    );
    email.focus();
    evt.returnValue = false;
    return false;
  }

  evt.returnValue = true;
  return emailVal;
}

form.addEventListener("submit", validateEmail);
