'use strict';


// const category = 'toys';
// console.log(`https://work.com${category}/5`);



const numberOfFilms = 'Сколько фильмов вы уже посмотрели?';

const personalMovieDB = {
    count : {},
    movies : {},
    actors : [],
    genres : [],
    privat : false
};

const a = prompt('Один из последних просмотренных фильмов?'),
      b = prompt( 'На сколько оцените его?'),
      c = prompt( 'Один из последних просмотренных фильмов?'),
      d = prompt( 'На сколько оцените его?')


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
