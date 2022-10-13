function project(input) {
    let name = input[0];
    let projectnumber = input[1];
    let hoursperproject = 3;
    let time = projectnumber * hoursperproject;
    console.log(`The architect ${name} will need ${time} hours to complete ${projectnumber} project/s.`);
}
project(["Angel" , 5]);