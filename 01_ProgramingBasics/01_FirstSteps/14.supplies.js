function supplies(input) {
    let penprice = 5.8;
    let markerprice = 7.2;
    let liquidprice = 1.2;
    let pennumber = Number (input[0]);
    let markernumber = Number (input[1]);
    let liquidnumber = Number (input[2]);
    let discount = (Number (input[3]))/100;
    let result = (penprice*pennumber + markernumber*markerprice + liquidnumber*liquidprice)*(1-discount);
    console.log(result);
}
supplies([2,3,4,25]);