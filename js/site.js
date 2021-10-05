function loopyHundo() {
  // get numbers from UI
  let startingNumber = document.getElementById("startValueID").value;
  let endingNumber = document.getElementById("endValueID").value;



  // validate inputs
  startingNumber = parseInt(startingNumber);
  endingNumber = parseInt(endingNumber)
  if (Number.isInteger(startingNumber) && Number.isInteger(endingNumber)) {
  startingNumber < 100 ? null : startingNumber == 100;
  endingNumber > 0 ? null : startingNumber == 0;

    // get the numbers
   let numbersArray = generateNumbers(startingNumber, endingNumber);
  // display numbers in UI

    displayNumbersToPage(numbersArray)

  } else {

    alert("Enter Numbers")

  }    
  
}


//generate the numbers from start to end
function generateNumbers(start, end){

// array
let a = []

// Loop through the numbers
for (let index = start; index <= end; index++) {
  a.push(index);
}

//returns the array
return a;
}




function displayNumbersToPage(numArray){

let startIndex = numArray[0];

let ptag = document.getElementById("resultsID")

for (let index = 0; index < numArray.length; index++) {
  
  let number = numArray[index];
 
  ptag.innerHTML += number + " | ";

}

}