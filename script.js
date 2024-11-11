function renderBooks() {
  getFromLocalStorage();
  for (let index = 0; index < books.length; index++) {
  bookContainerTemplate(index);    
  commentTemplate(index);
  }
}

function toggleLike(index) {
  let element = document.getElementById("like_img"+index);
  element.classList.toggle("grayscale");

  // Den Style des Elements abrufen
  let style = window.getComputedStyle(element);
  // Filter-Wert rausziehen
  let filterValue = style.filter;
  // Den grayscale-Wert finden
  let grayscaleMatch = filterValue.match(/grayscale\(([^)]+)\)/);

  if (grayscaleMatch) {

    // Den grayscale-Wert zu einer Zahl umwandeln
    let grayscaleValue = parseFloat(grayscaleMatch[1]);
    if (grayscaleValue > 0) {
      books[index].likes = books[index].likes - 1;
      books[index].liked = false;
      console.log("nicht geliked");
      console.log(books[index].likes);
    } else {
      books[index].likes = books[index].likes + 1;
      books[index].liked = true;
      console.log("geliked");
      console.log(books[index].likes);
      
    }
  } else {
    console.log("Kein grayscale-Filter gefunden");
  }
  saveToLocalStorage();
}


function addComment(index) {
  let messageInputRef = document.getElementById('message_input'+index);
  let messageInput = messageInputRef.value;
  let nameInputRef = document.getElementById('name_input'+index)
  let nameInput = nameInputRef.value;

  // books[index].comments.push(`{name:${nameInput},comment:${messageInput}}`);
  // books[index].comments.name = nameInput;
  // books[index].comments.comment = messageInput;
  let newContent = { name:nameInput,comment:messageInput}
  books[index].comments.push(newContent);
  messageInputRef.value = "";
  console.log(books);
  saveToLocalStorage();
  commentTemplate(index);
}


function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
  let myArrMessage = JSON.parse(localStorage.getItem("books"));

  if (myArrMessage) {
    books = myArrMessage;
  }

}

