function listOfColours(colours) {
  // Write your code here...
  // create and add elements to contentDiv and body
  contentDiv = document.getElementById("content");
  createSelect = document.createElement("select");
  createP = document.createElement("p");
  contentDiv.appendChild(createSelect);
  document.body.appendChild(createP);

  colours.forEach((colour) => {
    let createOption = document.createElement("option");
    createSelect.appendChild(createOption);
    createOption.innerText= colour;
  });

  createSelect.addEventListener('change', () => {
    createP.style.color = createSelect.value;
    createP.innerText = `You have selected: ${createSelect.value}`
  });

}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
