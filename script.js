const title = document.getElementById('title')
const image = document.getElementById('image')
const desc = document.getElementById('desc')
const release = document.getElementById('release')
const banner = document.querySelector('.banner')

const dropDownChoices = document.getElementById('ghibli-pick')
dropDownChoices.addEventListener('change', changeSelectValue)

function changeSelectValue() {
  dropDownChoicesValue = document.getElementById('ghibli-pick').value

    let index
    switch(dropDownChoicesValue) {
      case "Castle in the Sky":
      index = 0;
      break;
      case "Grave of the Fireflies":
      index = 1;
      break;
      case "My Neighbor Totoro":
      index = 2;
      break;
      case "Kiki's Delivery Service":
      index = 3;
      break;
      case "Only Yesterday":
      index = 4;
      break;
      case "Porco Rosso":
      index = 5;
      break;
      case "Pom Poko":
      index = 6;
      break;
      case "Whisper of the Heart":
      index = 7;
      break;
      case "Princess Mononoke":
      index = 8;
      break;
      case "My Neighbors the Yamadas":
      index = 9;
      break;
      case "Spirited Away":
      index = 10;
      break;
      case "The Cat Returns":
      index = 11;
      break;
      case "Howl's Moving Castle":
      index = 12;
      break;
      case "Tales from Earthsea":
      index = 13;
      break;
      case "Ponyo":
      index = 14;
      break;
      case "Arrietty":
      index = 15;
      break;
      case "From Up on Poppy Hill":
      index = 16;
      break;
      case "The Wind Rises":
      index = 17;
      break;
      case "The Tale of the Princess Kaguya":
      index = 18;
      break;
      case "When Marnie Was There":
      index = 19;
      break;
      case "The Red Turtle":
      index = 20;
      break;
      case "Earwig and the Witch":
      index = 21;
      break;
    }
    
    fetch('https://raw.githubusercontent.com/janaipakos/ghibliapi/master/data.json')
    .then(response => response.json())
    .then(data => {
      title.innerText = data.films[index].title
      image.src = data.films[index].movie_banner
      desc.innerHTML = data.films[index].description
      release.innerText = data.films[index].release_date
    });

}

let randomInt = Math.floor(Math.random()*22)


fetch('https://raw.githubusercontent.com/janaipakos/ghibliapi/master/data.json')
.then(response => response.json())
.then(data => {
  banner.src = data.films[randomInt].image
  title.innerText = data.films[randomInt].title
  image.src = data.films[randomInt].movie_banner
  desc.innerHTML = data.films[randomInt].description
  release.innerText = data.films[randomInt].release_date
});

const ghibliFilms = document.querySelectorAll('[data-ghibli]')

ghibliFilms.forEach(ghibliFilm => {
  ghibliFilm.addEventListener('click', function() {
  const item = ghibliFilm.getAttribute("data-ghibli")
  let index
  switch(item) {
    case "Castle in the Sky":
    index = 0;
    break;
    case "Grave of the Fireflies":
    index = 1;
    break;
    case "My Neighbor Totoro":
    index = 2;
    break;
    case "Kiki's Delivery Service":
    index = 3;
    break;
    case "Only Yesterday":
    index = 4;
    break;
    case "Porco Rosso":
    index = 5;
    break;
    case "Pom Poko":
    index = 6;
    break;
    case "Whisper of the Heart":
    index = 7;
    break;
    case "Princess Mononoke":
    index = 8;
    break;
    case "My Neighbors the Yamadas":
    index = 9;
    break;
    case "Spirited Away":
    index = 10;
    break;
    case "The Cat Returns":
    index = 11;
    break;
    case "Howl's Moving Castle":
    index = 12;
    break;
    case "Tales from Earthsea":
    index = 13;
    break;
    case "Ponyo":
    index = 14;
    break;
    case "Arrietty":
    index = 15;
    break;
    case "From Up on Poppy Hill":
    index = 16;
    break;
    case "The Wind Rises":
    index = 17;
    break;
    case "The Tale of the Princess Kaguya":
    index = 18;
    break;
    case "When Marnie Was There":
    index = 19;
    break;
    case "The Red Turtle":
    index = 20;
    break;
    case "Earwig and the Witch":
    index = 21;
    break;
  }


  fetch('https://raw.githubusercontent.com/janaipakos/ghibliapi/master/data.json')
  .then(response => response.json())
  .then(data => {
    title.innerText = data.films[index].title
    image.src = data.films[index].movie_banner
    desc.innerHTML = data.films[index].description
    release.innerText = data.films[index].release_date
  });
})
})