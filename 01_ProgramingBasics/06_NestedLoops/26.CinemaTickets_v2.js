function cinemaTickets(input) {
    let movieName = '';
    let seats = 0;
    let totalStudentNum = 0;
    let totalStandardNum = 0;
    let totalKidNum = 0;
    let totalNum = 0;
    let isFinished = false;
    for (let i = 0; i < input.length; i++) {
        movieName = input[i];
        i++;
        seats = Number(input[i]);
        i++;
        let totalNumMovie = 0;
        for (let j = i; j < input.length; j++) {
            if (input[j] == 'End') {
                console.log(`${movieName} - ${(totalNumMovie / seats * 100).toFixed(2)}% full.`);
                break;
            }
            if (input[j] == 'Finish' || j == input.length - 1) {
                console.log(`${movieName} - ${(totalNumMovie / seats * 100).toFixed(2)}% full.`);
                isFinished = true
                break;
            }
            switch (input[j]) {
                case 'student':
                    totalStudentNum++;
                    break;
                case 'standard':
                    totalStandardNum++;
                    break;
                case 'kid':
                    totalKidNum++;
                    break;
            }
            totalNum++;
            totalNumMovie++;
            i++;
            if (seats == totalNumMovie) {
                console.log(`${movieName} - ${(totalNumMovie / seats * 100).toFixed(2)}% full.`);
                i--;
                break;
            }
        }
        if (isFinished) {
            break;
        }
    }
    console.log(`Total tickets: ${totalNum}`);
    console.log(`${(totalStudentNum / totalNum * 100).toFixed(2)}% student tickets.`);
    console.log(`${(totalStandardNum / totalNum * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(totalKidNum / totalNum * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(['Shutter Island',
'9',
'standard',
'standard',
'standard',
'student',
'student',
'student',
'kid',
'kid',
'kid',
'Rush',
'9',
'standard',
'standard',
'standard',
'student',
'student',
'student',
'kid',
'kid',
'kid',
'Deadpool',
'9',
'standard',
'standard',
'standard',
'student',
'student',
'student',
'kid',
'kid',
'kid',
'Finish']);