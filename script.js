function renderBooks() {
  getFromLocalStorage();
  let bookContainer = document.getElementById("main");
  bookContainer.innerHTML = "";
  for (let index = 0; index < books.length; index++) {
  bookContainerTemplate(index);    
  commentTemplate(index);
  }
}

function toggleLike(index) {
  let element = document.getElementById("like_img"+index);
  element.classList.toggle("grayscale");

  if (books[index].liked) {
    books[index].liked = false;
    books[index].likes--;
    }else{
      books[index].liked = true;
      books[index].likes++;
    }

  saveToLocalStorage();
  renderBooks();
}

function checkLikes(index) {
  let element = document.getElementById("like_img"+index);
  if (books[index].liked) {
    element.classList.add("grayscale");
  }
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

