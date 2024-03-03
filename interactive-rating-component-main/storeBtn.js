let button = "";

function storeBtn(el) {
  button = el.getAttribute("value");
  console.log(button);
}

function submitValue() {
  if (button !== "") {
    document.getElementById(
      "rating_function"
    ).innerHTML = `You selected ${button} out of 5`;
    document.getElementById("typ_container").style.visibility = "visible";
    document.getElementById("head_container").style.visibility = "hidden";
  } else {
    alert("Please select a rating");
  }
}
