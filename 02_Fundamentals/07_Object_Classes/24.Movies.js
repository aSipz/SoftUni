function movies(input) {
    
    class Movie {
        constructor (name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }
    
    let movieArray = [];
    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i];
        let currentCommandArray = currentCommand.split(' ');
        if (currentCommandArray.includes('addMovie')) {
            currentCommandArray.shift();
            let movie = currentCommandArray.join(' ');
            let currentMovie = new Movie(movie);
            movieArray.push(currentMovie);
        } else if (currentCommandArray.includes('directedBy')) {
            let index = currentCommandArray.indexOf('directedBy');
            let director = currentCommandArray.slice(index + 1).join(' ');
            let movie = currentCommandArray.slice(0, index).join(' ');
            for (let j = 0; j < movieArray.length; j++) {
                let currentObject = movieArray[j];
                if (currentObject.name == movie) {
                    currentObject.director = director;
                }
            }
        } else if (currentCommandArray.includes('onDate')) {
            let index = currentCommandArray.indexOf('onDate');
            let date = currentCommandArray.pop();
            let movie = currentCommandArray.slice(0, index).join(' ');
            for (let j = 0; j < movieArray.length; j++) {
                let currentObject = movieArray[j];
                if (currentObject.name == movie) {
                    currentObject.date = date;
                }
            }
        }
    }

    for (let i = 0; i < movieArray.length; i++) {
        let currentMovie = movieArray[i];
        if (currentMovie.name != undefined && currentMovie.director != undefined && currentMovie.date != undefined) {
            console.log(JSON.stringify(currentMovie));
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);