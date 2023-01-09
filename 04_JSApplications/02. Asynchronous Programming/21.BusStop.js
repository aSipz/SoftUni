function getInfo() {
    const input = document.getElementById('stopId').value;
    const stopNameField = document.getElementById('stopName');
    const busesUl = document.getElementById('buses');

    async function getBusStop() {
        try {
            const response = await fetch('http://localhost:3030/jsonstore/bus/businfo/' + input);
            if (!response.ok) {
                throw new Error;
            }
            const busStop = await response.json();
            stopNameField.textContent = busStop.name;
            const busList = Object.entries(busStop.buses)
                .map(([busId, time]) => {
                    const li = document.createElement('li');
                    li.textContent = `Bus ${busId} arrives in ${time} minutes`;
                    return li;
                });
            busesUl.replaceChildren(...busList);

        } catch {
            busesUl.innerText = '';
            stopNameField.textContent = 'Error';
        }
    }

    getBusStop();
}