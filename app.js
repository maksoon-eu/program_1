let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели? ", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели? ", '');
    }
}
//start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из посл? ', ''),
            b = prompt('Оценка? ', '');
            
        if (a != '' && a != null && a.length < 50 && b != '' && b != null && b.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
//rememberMyFilms();

function detectPersonalLevel() {
    if (+personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (+personalMovieDB.count >= 10 && +personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (+personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
//detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
//showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres.push(prompt('Ваш любимый жанр под номером ' + i));
    }
}

writeYourGenres();
console.log(personalMovieDB);


const test = '13.67676px';
//console.log(parseFloat(test));
