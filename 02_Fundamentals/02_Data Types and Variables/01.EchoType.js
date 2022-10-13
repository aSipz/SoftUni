function echoType(type) {
    parType = typeof(type);
    console.log(parType);
    if (parType == 'string' || parType == 'number') {
        console.log(type);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
echoType(null);