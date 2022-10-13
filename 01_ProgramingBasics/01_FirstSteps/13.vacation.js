function read(input) {
    let pagecount = Number (input[0]);
    let pagesperhout = Number (input[1]);
    let days = Number (input[2]);
    let hoursperday = pagecount/days/pagesperhout;
    console.log(hoursperday);
}
read([212, 20, 2]);