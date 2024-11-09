function commentTemplate() {
    let comment = document.getElementById('comment');
    for (let index = 0; index < message.length; index++) {
    comment.innerHTML += `<div class="comments">
                      <p>${author[index]}:</p>
                      <div class="space"></div>
                      <p>${message[index]}</p>
                  </div>`;
  }
}