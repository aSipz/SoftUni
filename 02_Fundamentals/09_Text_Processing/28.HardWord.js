function hardWord(input) {
    let string = input[0];
    let wordArray = input[1];
    while (string.includes('_')) {
        let index = string.indexOf('_');
        let length = 0;
        for (let i = index; i < string.length; i++) {
            length++;
            if (string[i] != string[i+1]) {
                break;
            }
        }
        for (const word of wordArray) {
            if (word.length == length) {
                string = string.replace('_'.repeat(length), word)
                break;
            }
        }
    }
    console.log(string);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);