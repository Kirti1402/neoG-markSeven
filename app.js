var input = document.querySelector(".input");
var output = document.querySelector(".output");
var button = document.querySelector(".button");

console.log(input);
console.log(output);
console.log(button);

var apiURL = "https://api.funtranslations.com/translate/ferb-latin.jso";

function constructURL(text) {
  return apiURL + "?text=" + text;
}

function errorHandler(error) {
  console.log("error" + error);
  alert('Somenthing Went Wrong! Try After Sometime')
}

function clickHandler() {
  var inputValue = input.value;
  console.log(inputValue);
  fetch(constructURL(inputValue))
    .then((response) => response.json())
    .then((data) => {
        output.classList.remove("output-error");
        var outputResponse = data.contents.translated;
        output.innerText = outputResponse;
    })
    .catch(errorHandler);
}

button.addEventListener("click", clickHandler);
