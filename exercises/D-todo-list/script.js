function todoList(todos) {
  // Write your code here...
  const contentDiv = document.getElementById("content");
  const createUl = document.createElement("ul");
  contentDiv.appendChild(createUl);
  

    todos.forEach((task) => {
      const createLi = document.createElement("li");
      createLi.innerText = task.todo;
      createUl.appendChild(createLi);

      function onClick(event) {
        if(event.target.style.textDecoration === "line-through") {
          event.target.style.textDecoration = "none";
        } else {
          event.target.style.textDecoration = "line-through";
        }
      }
      createLi.addEventListener("click", onClick);
    });
 
      
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);