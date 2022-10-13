function personalTitles(input) {
    let age = parseInt(input[0]);
    let gender = input[1];
    if (age < 16) {
        if ( gender == "f") {
            console.log("Miss");
        } else {
            console.log("Master");
        }
    } else {
        if ( gender == "f") {
            console.log("Ms.");
        } else {
            console.log("Mr.");
        }
    }
}
personalTitles([20 , "m"]);