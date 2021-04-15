
'use strict';
let numberOfFilms;

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : [],
    genres : [],
    privat : true
};


// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
//     }
// }

// start();


//  function rememberMyFilms() {    
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?'),
//               b = prompt( 'На сколько оцените его?');
//         if(a != "" && b != "" && a != null && b != null && a.length < 50 && b.length < 50) {
//             personalMovieDB.movies[a] = b;
            
//         }       
//         else{
//         i--;
//             console.log('error');
//         }
//     }
//  }

// rememberMyFilms();


// // function detectPersonalLevel() {        
// //     if(personalMovieDB.count > 5 ) {
// //         console.log("not bad");
// //     }
// //     else{
// //         console.log("baddd");
// //     }
// // }

// // detectPersonalLevel();

// // 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// // false - выводит в консоль главный объект программы

// function showMyDB() {
//     if(personalMovieDB.privat !== false){
//     console.log(personalMovieDB);
//     }
// }
// showMyDB();


// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres


function writeYourGenres() {
    for(let i=1; i < 4; i++) {
       let film = prompt(`Ваш любимый жанр под номером ${i}`);
       personalMovieDB.genres[i-1] = film;
    }
}

writeYourGenres();
console.log(personalMovieDB);