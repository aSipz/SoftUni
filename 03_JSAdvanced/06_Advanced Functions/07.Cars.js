function cars(input) {
    let collection = {};
    let processor = {
        create: (obj, inherit, parent) => {
            collection[obj] = inherit ? Object.create(collection[parent]) : {}
        },
        set: (name, key, value) => collection[name][key] = value,
        print: name => {
            let print = [];
            for (const key in collection[name]) {
                print.push(`${key}:${collection[name][key]}`);
            }
            console.log(print.join(','));
        }
    }
    input.forEach(line => {
        let [a, b, c, d] = line.split(' ');
        processor[a](b, c, d);
    });
}
cars(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat'])


// function cars(input) {
//     let collection = {};
//     let processor = {
//         create: name => collection[name] = {},
//         inherit: (name, parentName) => {
//             collection[name] = {};
//             let heritage = [parentName];
//             if (collection[parentName].heritage) {
//                 heritage = heritage.concat(collection[parentName].heritage)
//             }
//             collection[name].heritage ? collection[name].heritage = collection[name].heritage.concat(heritage) : collection[name].heritage = heritage
//         },
//         set: (name, key, value) => Object.assign(collection[name], { [key]: value }),
//         print(name) {
//             let print = [];
//             properties = collection[name];
//             for (const key in properties) {
//                 if (key != 'heritage') {
//                     print.push(`${key}:${properties[key]}`);
//                 }
//             }
//             if (properties.heritage) {
//                 let array = properties.heritage;
//                 array.forEach(name => {
//                     let addProp = collection[name];
//                     for (const key in addProp) {
//                         if (key != 'heritage') {
//                             print.push(`${key}:${addProp[key]}`);
//                         }
//                     }
//                 });
//             }
//             console.log(print.join(','));
//         }
//     }
//     input.forEach(line => {
//         let [command, obj, key, value] = line.split(' ');
//         if (!key) {
//             processor[command](obj);
//         } else if (key == 'inherit') {
//             processor[key](obj, value);
//         } else {
//             processor[command](obj, key, value);
//         }
//     });
// }
cars(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat'])