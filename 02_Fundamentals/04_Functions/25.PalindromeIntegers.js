function palindromeInt(intArray) {
    for (let i = 0; i < intArray.length; i++) {
        let isPalindrome = true;
        let currentInt = intArray[i].toString();
        for (let j = 0; j <= currentInt.length / 2; j++) {
            if (currentInt[j] != currentInt[currentInt.length - j - 1]) {
                isPalindrome = false;
            }
        }
        if (isPalindrome) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeInt([32,2,232,1010]);