exports.generateErrorMessage = (error) => {
    return message = Object.keys(error.errors).map(key => error.errors[key].message)[0];
}