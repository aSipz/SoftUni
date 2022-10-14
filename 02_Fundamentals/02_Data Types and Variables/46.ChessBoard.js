function chessBoard(num) {
    console.log(`<div class="chessboard">`);
    for (let i = 1; i <= num; i++) {
        console.log('  <div>');
        for (let j = 1; j <= num; j++) {
            let colour = 'black';
            if (i % 2 == 0) {
                if (j % 2 != 0) {
                    colour = 'white';
                }
            } else {
                if (j % 2 == 0) {
                    colour = 'white';
                }
            }
            console.log(`    <span class="${colour}"></span>`);
        }
        console.log('  </div>');
    }
    console.log('</div>');
}
chessBoard(4);