function readingList(books) {
  // Write your code here...
    const content = document.getElementById("content");
    const pageTitle = document.createElement("h1");
    pageTitle.innerHTML = "Book List";
    content.appendChild(pageTitle);
    const createUnorderedList = document.createElement("ul");

    books.forEach((book) => {
      //create li, p and img element
      const createLi = document.createElement("li");
      const createParagraph = document.createElement("p");
      const createImg = document.createElement("img");

      createParagraph.innerText = `${book.title} - ${book.author}`; // book author and title added to paragraph
      createImg.src = book.image; //find image within the object and add to image element.
      createLi.appendChild(createParagraph);
      createLi.appendChild(createImg);
      createUnorderedList.appendChild(createLi);
    
      if (book.alreadyRead === true){
          createParagraph.style.backgroundColor = "green"
      } else {
        createParagraph.style.backgroundColor = "red"
      }      
      
    });

    content.appendChild(createUnorderedList);
    //add row to books and space them across page
    createUnorderedList.style.display = "flex";
    createUnorderedList.style.justifyContent = "space-around"

    
    
   
  };



const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    image: "https://images-eu.ssl-images-amazon.com/images/I/41bWcNdTGmL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true, 
    image: "https://images-eu.ssl-images-amazon.com/images/I/41m1rQjm5tL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    image: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg"
  }
];

readingList(books);
