'use strict';



let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start : function() {
        personalMovieDB.count = prompt("Сколько фильмов вы помострели?");
        while (personalMovieDB.count == null || personalMovieDB.count == ' ' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько фильмов вы помострели?");
    
        }
    
    },
    remember: function remebmerMyFilms() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Один из просмотренных последних фильмов", " "),
                b = prompt("Насколько оцените его", " ");

            if (a != null && b != null && a != ' ' && b != ' ' && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectd: function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов");
        } else if (10 <= personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("произошла ошибка!");
        }
    },


    show : function showMyDB(hiden) {
        if (!hiden) {
            console.log(personalMovieDB);
        }
    },

    // write :  function writeYourGenres() {
    //     for (let i = 0; i < 3; i++) {
    //         let a = prompt("Ваш любимый жанр под номером?" + " " + "(" + (i + 1) + ")", " ");
    //         if (a==" " || a=="null") {
    //             i--;
    //         }
    //         else {
    //         personalMovieDB.genres[i] = a;
    //               }
    //     }
    //     personalMovieDB.genres.forEach(function (a, b, ) {
    //         console.log(`Любимый жанр #${b+1} это - ${a}`);
    //     });
    // },

    write :  function writeYourGenres() {
        for (let i = 0; i <= 1; i++) {
            let a = prompt("Введите ваш любимый жанр через запятую");
            if (a==" " || a=="null") {
                i--;
            }
            else {
            personalMovieDB.genres = a.split(', ');
                  }
        }
        personalMovieDB.genres.forEach(function (a, b, ) {
            console.log(`Любимый жанр #${b+1} это - ${a}`);
        });
    },


    toggleVisibleMyDB : function detectedPrivat () {
        if (personalMovieDB.privat==false) {
            personalMovieDB.privat=true;
        }    
        else {
            personalMovieDB.privat=false;   
        }
        
        }
};
personalMovieDB.start();
personalMovieDB.remember();
personalMovieDB.detectd();
personalMovieDB.write();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.show();
