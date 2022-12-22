function validator(object) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messagePattern = /^[^<>\\&'"]*$/;
    let uriPattern = /^[a-zA-Z\d\.]+$/;
    if (!object.method || !validMethods.includes(object.method)) {
        throw new Error('Invalid request header: Invalid Method')
    }
    if (!object.uri || !uriPattern.test(object.uri)) {
        throw new Error('Invalid request header: Invalid URI')
    }
    if (!object.version || !validVersion.includes(object.version)) {
        throw new Error('Invalid request header: Invalid Version')
    }
    if ((!object.message && object.message != '') || !messagePattern.test(object.message)) {
        throw new Error('Invalid request header: Invalid Message')
    }
    return object;
}
console.log(validator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }
  ));