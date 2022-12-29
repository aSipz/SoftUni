function extensibleObject() {
    let obj = {
        extend(object) {
            for (const key in object) {
                if (typeof object[key] == 'function') {
                    console.log(key);
                    console.log(object[key]);
                    Object.prototype[key] = object[key];
                } else {
                    obj[key] = object[key];
                }
            }
        }
    };
    return obj;
}

const myObj = extensibleObject();
const template = { 
    extensionMethod: function () {}, 
    extensionProperty: 'someString' 
  } 
  myObj.extend(template); 
console.log(myObj);  