function validateForm() {
  let name = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for basic email validation
  let emailErrorDiv = document.getElementById("error3");
  let emailInput = document.getElementById("email");
  let password = document.getElementById("password").value;
  var isValid = true;

  //Validate name

  if (name === "") {
    document.getElementById("error1").style.visibility = "visible";
    document.getElementById("fname").placeholder = "";
    document.getElementById("fname").style.borderColor = "red";
  } else {
    document.getElementById("error1").style.visibility = "hidden";
    document.getElementById("fname").style.borderColor = "";
  }
  //Validate lname
  if (lname === "") {
    document.getElementById("error2").style.visibility = "visible";
    document.getElementById("lname").placeholder = "";
    document.getElementById("lname").style.borderColor = "red";
  } else {
    document.getElementById("error2").style.visibility = "hidden";
  }
  //Validate email
  if (!email.match(emailRegex) || email === "") {
    emailErrorDiv.style.visibility = "visible";
    emailInput.placeholder = "email@example.com";

    document.getElementById("email").style.borderColor = "red";
  } else {
    emailErrorDiv.style.visibility = "hidden";
    emailErrorDivplaceholder = "email@example.com";
  }
  //Validate password
  if (password === "") {
    document.getElementById("error4").style.visibility = "visible";
    document.getElementById("password").placeholder = "";
    document.getElementById("password").style.borderColor = "red";
  } else {
    document.getElementById("error4").style.visibility = "hidden";
  }
  return isValid;
}

document.getElementById("btn_submit").addEventListener("click", function () {
  // Check if all fields are filled
  if (
    fname.validity.valid &&
    lname.validity.valid &&
    email.validity.valid &&
    password.validity.valid
  ) {
    window.open("TYP.html", "_self"); // Opens thankyou.html in a new tab
  }
});
