function oldBooks(input) {
  let bookToSearch = input[0];
  let i = 1;
  let counter = 0;
  while (true) {
    let currentBook = input[i];
    if (currentBook == "No More Books") {
      console.log("The book you search is not here!");
      console.log(`You checked ${counter} books.`);
      break;
    }
    if (currentBook == bookToSearch) {
      console.log(`You checked ${counter} books and found it.`);
      break;
    }
    counter++;
    i++;
  }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
