'use strict';


// const category = 'toys';
// console.log(`https://work.com${category}/5`);



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : [],
    genres : [],
    privat : false
};

// const a = prompt('Один из последних просмотренных фильмов?'),
//       b = prompt( 'На сколько оцените его?'),
//       c = prompt( 'Один из последних просмотренных фильмов?'),
//       d = prompt( 'На сколько оцените его?')



for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
          b = prompt( 'На сколько оцените его?');
    if(a != "" && b != "" && a != null && b != null && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
        
    }       
    else{
        i--;
        console.log('error');
    }
    console.log(personalMovieDB);
}



if(personalMovieDB.count > 5 ) {
    console.log("not bad");
}
else{
    console.log("baddd");
}

// переписать цикл еще двумя способами