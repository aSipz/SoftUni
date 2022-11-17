function match(string) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let matchArray = string.match(pattern);
    console.log(matchArray.join(' '));
}
match("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");