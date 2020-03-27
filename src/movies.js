//  eslint no-restricted-globals: 'off' 

// const movies = require("./data");



// Iteration 1: Ordering by year - Order by year, ascending (in growing order)





function orderByYear (array) {
    let arrayCopie = [...array];
    let newSortedArray = arrayCopie.sort(function(a,b) {

        if(a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else { 

    return a.year - b.year; }
    }); 
    return newSortedArray ;
}






// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct


function howManyMovies(array) {

    let newArray = array.filter(function(movie) {


        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
        
        
    });
    
     return newArray.length;
}

howManyMovies(movies);



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(array) {
    let arrayCopie = [...array];
    let alphabetArray = arrayCopie.sort(function(a,b){
        return a.title - b.title;
    })
    return alphabetArray;
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
