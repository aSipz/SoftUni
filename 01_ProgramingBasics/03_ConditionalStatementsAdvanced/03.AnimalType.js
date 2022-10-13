function animalType(input) {
    let animalClass = input[0];
    switch (animalClass) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}
animalType(["snas"]);