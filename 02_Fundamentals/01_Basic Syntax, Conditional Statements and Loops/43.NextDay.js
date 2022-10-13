function nextDay(year, month, day) {
  const date = new Date(year, month - 1, day);
  let newDate = new Date(date.setDate(date.getDate() + 1));
  let newDay = newDate.getDate();
  let newMonth = newDate.getMonth() + 1;
  let newYear = newDate.getFullYear();
  console.log(`${newYear}-${newMonth}-${newDay}`);
}
nextDay(2020, 3, 24);
