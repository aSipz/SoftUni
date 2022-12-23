function carCounter(input) {
    let brandList = new Map();
    input.forEach(element => {
        let [brand, model, quantity] = element.split(' | ');
        quantity = Number(quantity);
        let currentMap;
        if (brandList.get(brand)) {
            currentMap = brandList.get(brand);
            if (currentMap.get(model)) {
                quantity += currentMap.get(model);
            }
        } else {
            currentMap = new Map();
        }
        currentMap.set(model, quantity);
        brandList.set(brand, currentMap);
    });
    for (const [key, modelMap] of brandList) {
        console.log(key);
        for (const [model, quantity] of modelMap) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}
carCounter(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)