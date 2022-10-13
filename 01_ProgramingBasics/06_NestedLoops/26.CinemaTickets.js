function cinemaTickets(input) {
    let i = 0;
    let movieName = input[i];
    let seats = 0;
    let studentNum = 0;
    let standardNum = 0;
    let kidNum = 0;
    let totalStudentNum = 0;
    let totalStandardNum = 0;
    let totalKidNum = 0;
    let totalNum = 0;
    let totalNumMovie = 0;
    while (true) {
        if (i == 0) {
            i++;
            seats = Number(input[i]);
            i++;
        }
        if (input[i] == 'Finish' || i >= input.length) {
            console.log(`${movieName} - ${(totalNumMovie / seats * 100).toFixed(2)}% full.`);
            console.log(`Total tickets: ${totalNum}`);
            console.log(`${(totalStudentNum / totalNum * 100).toFixed(2)}% student tickets.`);
            console.log(`${(totalStandardNum / totalNum * 100).toFixed(2)}% standard tickets.`);
            console.log(`${(totalKidNum / totalNum * 100).toFixed(2)}% kids tickets.`);
            break;
        }
        if (input[i] == 'End') {
            console.log(`${movieName} - ${(totalNumMovie / seats * 100).toFixed(2)}% full.`);
            i++;
            movieName = input[i];
            i++;
            seats = Number(input[i]);
            i++;
            standardNum = 0;
            studentNum = 0;
            kidNum = 0;
            totalNumMovie = 0;
            continue;
        }
        switch (input[i]) {
            case 'student':
                studentNum++;
                totalStudentNum++;
                break;
            case 'standard':
                standardNum++;
                totalStandardNum++;
                break;
            case 'kid':
                kidNum++
                totalKidNum++;
                break;
        }
        totalNum++;
        totalNumMovie++;
        i++;
        if (seats == totalNumMovie && input[i] != 'Finish') {
            console.log(`${movieName} - ${(totalNumMovie / seats * 100).toFixed(2)}% full.`);
            movieName = input[i];
            i++;
            seats = Number(input[i]);
            i++;
            standardNum = 0;
            studentNum = 0;
            kidNum = 0;
            totalNumMovie = 0;
        }
    }
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