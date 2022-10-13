function clock(input) {
    for (let i = 0; i< 1440; i++) {
        if ( i < 60) {
            console.log(`0 : ${i}`);
        } else {
            console.log(`${Math.floor(i/60)} : ${i%60}`);
        }
    }
}
clock([]);