function solve() {
    const infoField = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let id = 'depot';
    let result;

    async function getStop() {
        try {
            const result = await fetch('http://localhost:3030/jsonstore/bus/schedule/' + id);
            debugger
            const data = await result.json();
            return data;
        } catch(err) {
            console.log(err);
        }
    }


    function depart() {
        result = getStop();
        arriveBtn.disabled = false;
        departBtn.disabled = true;
        infoField.textContent = `Next stop ${result.name}`
    }

    function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;
        infoField.textContent = `Arriving at ${result.name}`
        id = result.next;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();