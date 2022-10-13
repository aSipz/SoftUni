function clock(input) {
    for (let i = 0; i< 86400; i++) {
        if ( i < 60) {
            console.log(`0 : 0 : ${i}`);
        } else if ( i < 3600) {
            console.log(`0 : ${Math.floor(i/60)} : ${i%60}`);
        } else {
            console.log(`${Math.floor(i/3600)} : ${Math.floor((i/60))%60} : ${i%60}`);
        }
    }
}
clock([]);