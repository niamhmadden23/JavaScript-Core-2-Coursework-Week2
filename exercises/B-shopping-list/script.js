function shoppingList(arrayOfList) {
  let content = document.querySelector('#content');
  let ul = document.createElement ('ul');

  arrayOfList.forEach(item =>{
    let shoppingList = document.createElement ('li');
    shoppingList.innerText = item; 
    ul.appendChild(shoppingList);
  
});

content.append(ul);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
