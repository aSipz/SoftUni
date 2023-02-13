function pig(input) {
    let food = Number(input.shift()) * 1000;
    let hay = Number(input.shift()) * 1000;
    let cover = Number(input.shift()) * 1000;
    let weight = Number(input.shift()) * 1000;
    const foodPerDay = 300;
    let output = '';

    for (let day = 1; day <= 30; day++) {
        food -= foodPerDay;
        if (day % 2 == 0) {
            hay -= 0.05 * food;
        }
        if (day % 3 == 0) {
            cover -= weight / 3;
        }
        if (day == 30 && food > 0 && hay > 0 && cover > 0) {
            output = `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`;
            break;
        }
        if (food <= 0 || hay <= 0 || cover <= 0) {
            output = 'Merry must go to the pet store!';
            break;
        }
    }

    console.log(output);
}

pig(9, 5, 5.2, 1);