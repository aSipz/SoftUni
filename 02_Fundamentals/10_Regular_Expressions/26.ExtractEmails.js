function extract(text) {
    let pattern = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*(?<![.\-_])@[a-z]+\-?[a-z]+(\.[a-z]+)+)(?=,|\s|\.$|\.\s\w+|$)/g;
    let emails = text.match(pattern);
    console.log(emails.join('\n'));
}
extract('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');