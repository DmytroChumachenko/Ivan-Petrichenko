const numberOfFilms = +prompt('How many films have you already saw?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('One of your last movies watched?', ''),
      b = prompt('How much would you rate it?', ''),
      c = prompt('One of your last movies watched?', ''),
      d = prompt('How much would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);