function reading(numPages, pagesPerHour, days) {
  let pagesPerDay = numPages / days;
  let hours = pagesPerDay / pagesPerHour;
  console.log(hours);
}
reading(432, 15, 4);
