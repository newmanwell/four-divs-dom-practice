// Function to change the background color div
const changeBgColor = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  document.getElementById("bgColorContainer").style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
}

// Function to show hello div
const newHello = () => {
  const helloPicker = Math.floor(Math.random() * 8);
  let greeting 

  if (helloPicker === 0) {
    greeting =  `English: Hello`;
  } else if (helloPicker === 1) {
    greeting = `German: Güten Tag`;
  } else if (helloPicker === 2) {
    greeting = `Spanish: Hóla`;
  } else if (helloPicker === 3) {
    greeting = `Italian: Ciao`;
  } else if (helloPicker === 4) {
    greeting = `Korean: annyeonghaseyo`;
  } else if (helloPicker === 5) {
    greeting = `French: Bonjour`;
  } else if (helloPicker === 6) {
    greeting = `Mandrain: Ni hǎo`;
  } else if (helloPicker === 7) {
    greeting = `Arabic: mrhban`;
  }

  document.getElementById("say-hello").innerHTML = greeting;
}

// Function to add 
const addBtn = document.getElementById("add-btn");

addBtn.onclick = function() {
  const firstNumber = Number(document.getElementById("num-one").value);
  const secondNumber = Number(document.getElementById("num-two").value);
  document.getElementById("total").innerHTML = firstNumber + secondNumber;
}

// Functions for whispers
const whisperBtn = document.getElementById("whisper-btn");

whisperBtn.onclick = () => {
  const message = document.getElementById("whisper-input").value.toLowerCase();
  const h4 = document.createElement("h4");
  document.getElementById("the-whispers").appendChild(h4);
  h4.textContent = message;
  

}
