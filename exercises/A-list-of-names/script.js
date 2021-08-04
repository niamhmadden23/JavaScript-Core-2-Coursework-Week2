function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

    arrayOfPeople.forEach(person => {
      content.appendChild(document.createElement("h1")).innerText = person.name;
      content.appendChild(document.createElement("h2")).innerText = person.job;
    }); 
}


let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
