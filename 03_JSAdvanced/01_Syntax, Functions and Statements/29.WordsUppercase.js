function words(text) {
    let pattern = /\b\w+\b/g;
    let result = text
        .match(pattern)
        .map(a => a.toUpperCase());
    console.log(result.join(', '));
}
words('Hi, how are you?');