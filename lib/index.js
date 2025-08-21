import apiKey from "./config.js";

const omdbapiUrl = "https://www.omdbapi.com/";
const getUrl = `${omdbapiUrl}?apikey=${apiKey}&`;

const button = document.querySelector(".btn-primary");
const movieCards = document.getElementById("movie-cards");


function searchMovie(event) {
  event.preventDefault();

  const inputValue = document.getElementById("movie-name").value;
  movieCards.innerHTML = "";

  fetch(`${getUrl}s=${encodeURIComponent(inputValue)}`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((movie) => {
        movieCards.insertAdjacentHTML("beforeend", `
          <div class="col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card mb-2">
              <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
              <div class="card-body">
                <span class="badge bg-primary mb-2">${movie.Year}</span>
                <h5 class="card-title">${movie.Title}</h5>
              </div>
            </div>
          </div>
        `);
      });
    });
}
button.addEventListener("click", searchMovie);
