let books = [
  {
    name: "Die Geheimnisse des Ozeans",
    author: "Clara Meer",
    likes: 1250,
    liked: true,
    price: 19.99,
    publishedYear: 2018,
    genre: "Fantasy",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
      },
      {
        name: "Bookworm84",
        comment:
          "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
      },
      {
        name: "FantasyFanatic",
        comment:
          "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
      },
      {
        name: "SciFiGuru",
        comment:
          "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
      },
      {
        name: "NovelLover",
        comment:
          "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
      },
    ],
  },
  {
    name: "Der vergessene Pfad",
    author: "Maximilian Schwarz",
    likes: 980,
    liked: false,
    price: 14.5,
    publishedYear: 2021,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Die Farben des Himmels",
    author: "Laura Blau",
    likes: 1520,
    liked: true,
    price: 22.95,
    publishedYear: 2019,
    genre: "Romantik",
    comments: [
      {
        name: "LeserPeter",
        comment:
          "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
      },
      {
        name: "BookLover21",
        comment:
          "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
      },
      {
        name: "FantasyNerd",
        comment:
          "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
      },
      {
        name: "SciFiEnthusiast",
        comment:
          "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
      },
      {
        name: "ReadingAddict",
        comment:
          "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
      },
    ],
  },
  {
    name: "Das Rätsel der Zeit",
    author: "Alexander Weiss",
    likes: 750,
    liked: false,
    price: 18.0,
    publishedYear: 2020,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BuchKenner",
        comment:
          "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
      },
      {
        name: "LeseWurm",
        comment:
          "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
      },
    ],
  },
  {
    name: "Der letzte Wächter",
    author: "Sabine Grün",
    likes: 1300,
    liked: true,
    price: 16.75,
    publishedYear: 2017,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Im Schatten des Mondes",
    author: "Philipp Silber",
    likes: 890,
    liked: false,
    price: 12.3,
    publishedYear: 2022,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BücherLiebhaber",
        comment:
          "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
      },
      {
        name: "Leseratte",
        comment:
          "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
      },
    ],
  },
  {
    name: "Jenseits der Sterne",
    author: "Oliver Schwarz",
    likes: 1450,
    liked: true,
    price: 21.0,
    publishedYear: 2015,
    genre: "Science-Fiction",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
      },
    ],
  },
  {
    name: "Das verborgene Königreich",
    author: "Elena Gold",
    likes: 920,
    liked: false,
    price: 17.5,
    publishedYear: 2020,
    genre: "Fantasy",
    comments: [
      {
        name: "Bookworm92",
        comment:
          "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
      },
    ],
  },
  {
    name: "Liebe in Zeiten des Krieges",
    author: "Emilia Rot",
    likes: 1800,
    liked: true,
    price: 19.99,
    publishedYear: 2016,
    genre: "Romantik",
    comments: [
      {
        name: "Bibliophile23",
        comment:
          "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
      },
      {
        name: "StorySeeker",
        comment:
          "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
      },
      {
        name: "SciFiExplorer",
        comment:
          "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
      },
    ],
  },
];

let message = [];
let author = [];

function renderBooks() {
  for (let index = 0; index < books.length; index++) {
  bookContainerTemplate(index);    
  }
}

function toggleLike() {
  let element = document.getElementById("like_img");
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

      console.log("nicht geliked");
    } else {

      console.log("geliked");
    }
  } else {
    console.log("Kein grayscale-Filter gefunden");
  }
}

function bookContainerTemplate(index) {
  getFromLocalStorage();
  let bookContainer = document.getElementById("main");
    bookContainer.innerHTML += `<div id="main" class="book_container">
            <div><h4>${books[index].name}</h4></div>
            <div><img src="./assets/img/book.png" alt=""></div>
            <div class="price_like">
                <p>${books[index].price} €</p>
                <div id="like_img" class="likes">
                    <p>${books[index].likes}</p>
                    <img  onclick="toggleLike()" src="./assets/icons/heart.png" alt="Herz">
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
                <div id="comment" class="scrollbar">
                </div>
                <div class="comment_input">
                    <input id="name_input" type="text" placeholder="Dein Name">
                    <input id="message_input" placeholder="Schreib deinen Kommentar..." type="text">
                    <img onclick="addComment()" src="./assets/icons/send_btn.png" alt="Sendbutton">
                </div>
            </div>
            </div>`;
}

function addComment() {
  let messageInputRef = document.getElementById('message_input');
  let messageInput = messageInputRef.value;
  let nameInputRef = document.getElementById('name_input')
  let nameInput = nameInputRef.value;

  message.push(messageInput);
  author.push(nameInput);

  messageInputRef.value = "";
  console.log(message);
  console.log(author);
  saveToLocalStorage();
  renderMessages();
}


function saveToLocalStorage() {
  localStorage.setItem("message", JSON.stringify(message));
  localStorage.setItem("author", JSON.stringify(author));
}

function getFromLocalStorage() {
  let myArrMessage = JSON.parse(localStorage.getItem("message"));
  let myArrAuthor = JSON.parse(localStorage.getItem("author"));

  if (myArrMessage !== null || myArrAuthor !== null) {
    message = myArrMessage;
    author = myArrAuthor;
  }
}

function renderMessages() {
  getFromLocalStorage();
  let contentRef;
  let notesArray;
  let getTemplateFunction;

  contentRef = document.getElementById("message");
  notesArray = message;
  getTemplateFunction = author;
}