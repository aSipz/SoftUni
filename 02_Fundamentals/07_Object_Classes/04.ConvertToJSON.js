function convert(firstName, lastName, hairColor) {
    let info = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }
    let json = JSON.stringify(info);
    console.log(json);
}
convert('George', 'Jones', 'Brown');