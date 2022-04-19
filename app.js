let numberOfFilms = +prompt("Сколко фильмов вы уже посмотрели? ", '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из посл? ',''),
        b = prompt('Оценка? ',''),
        c = prompt('Один из посл? ',''),
        d = prompt('Оценка? ','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
