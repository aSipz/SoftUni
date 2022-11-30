function piece(flavors, start, end) {
    let startIndex = flavors.indexOf(start);
    let endIndex = flavors.indexOf(end);
    let resultArray = flavors.slice(startIndex, endIndex + 1);
    return resultArray;
}
piece(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
);