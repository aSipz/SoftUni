function attachEventsListeners() {
    let inputField = document.getElementById('inputDistance');
    let outputField = document.getElementById('outputDistance');
    let btn = document.getElementById('convert');
    let toMeters = {
        0: 1000,
        1: 1,
        2: 0.01,
        3: 0.001,
        4: 1609.34,
        5: 0.9144,
        6: 0.3048,
        7: 0.0254
    };
    btn.addEventListener('click', function () {
        let inputOption = document.getElementById('inputUnits').selectedIndex;
        let outputOption = document.getElementById('outputUnits').selectedIndex;
        let inputDistanceInMeters = Number(inputField.value) * toMeters[inputOption];
        let outputDistance = inputDistanceInMeters / toMeters[outputOption];
        outputField.value = outputDistance;
    });
}