function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

let rates1 = httpGet("https://api.exchangeratesapi.io/latest?base=GBP");

let parsedRates1 = JSON.parse(rates1);


let input = document.querySelector('input');
let result = document.querySelector('.result');
let button = document.querySelector('button');
let selector = document.querySelector('.currency');
let date = document.querySelector('.date');

date.innerText = `Exchange rates last updated : ${parsedRates1.date}`

button.addEventListener('click', conversion1)

function conversion1(){
  
    const inputValue = stripCurrencySymbol(input.value);
  
    if(isNaN(inputValue)) {
        result.textContent = "Please enter a valid number";
    }
    else {
            
      let newValue = inputValue * parsedRates1.rates[selector.value]

      result.innerHTML = `${newValue} <br> ${selector.value}`;
    }
}

function stripCurrencySymbol(inputValue){
  const strippedInput = inputValue.split('£');
  
  if(strippedInput.length > 1){
    return strippedInput[1];
  }
  
  return inputValue;
  
}

    