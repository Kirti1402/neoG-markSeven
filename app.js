var input=document.querySelector(".input");
var output=document.querySelector(".output");
var button=document.querySelector(".button");

console.log(input);
console.log(output);
console.log(button);

var apiURL="https://api.funtranslations.com/translate/ferb-latin.json"

function constructURL(text){
    return apiURL+"?text="+text;
}

function clickHandler(){
    var inputValue=input.value;
    console.log(inputValue);
    fetch(constructURL(inputValue))
    .then(response => response.json())
    .then(data =>{
        if(data.success){
        output.classList.remove('output-error');
        var outputResponse = data.contents.translated;
        output.innerText = outputResponse;
        }
        if(data.error){
            output.classList.add('output-error')
            var outputResponse = data.error.message;
            output.innerText = outputResponse;
        }
    });
}

button.addEventListener('click',clickHandler)