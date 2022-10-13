function password(input) {
    let pass = input[0];
    let check = pass == "s3cr3t!P@ssw0rd";
    if (check) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
password(["s3cr3t!P@ssw0rd"]);