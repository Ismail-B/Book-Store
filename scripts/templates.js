function commentTemplate(index) {
    let commentRef = document.getElementById('comment'+index);
    let codeText = "";
    for (let i = 0; i < books[index].comments.length; i++) {
    codeText += `<div class="comments">
                      <span>${books[index].comments[i].name}:</span>
                      <span>${books[index].comments[i].comment}</span>
                  </div>`;
  }
  commentRef.innerHTML = codeText;
}

function bookContainerTemplate(index) {
  getFromLocalStorage();

  
  let bookContainer = document.getElementById("main");
    bookContainer.innerHTML += `<div class="book_container">
            <div><h4>${books[index].name}</h4></div>
            <div><img src="./assets/img/book.png" alt=""></div>
            <div class="price_like">
                <p>${books[index].price} €</p>
                <div id="like_img${index}" class="likes">
                    <p>${books[index].likes}</p>
                    <img id="likeCounter${index}" onclick="toggleLike(${index})" src="./assets/icons/heart.png" alt="Herz">
                </div>
            </div>
            <table>
                <tr>
                    <td class="column_1">Author:</td>
                    <td class="column_2">${books[index].author}</td>
                </tr>
                <tr>
                    <td class="column_1">Erscheinungsjahr:</td>
                    <td class="column_2">${books[index].publishedYear}</td>
                </tr>
                <tr>
                    <td class="column_1">Genre:</td>
                    <td class="column_2">${books[index].genre}</td>
                </tr>
            </table>
            <div class="comment_sektion">
                <h5>Kommentare:</h5>
                <div id="comment${index}" class="scrollbar">
                </div>
                <div class="comment_input">
                    <input id="name_input${index}" type="text" placeholder="Dein Name">
                    <input id="message_input${index}" placeholder="Schreib deinen Kommentar..." type="text">
                    <img onclick="addComment(${index})" src="./assets/icons/send_btn.png" alt="Sendbutton">
                </div>
            </div>
            </div>`;
}
