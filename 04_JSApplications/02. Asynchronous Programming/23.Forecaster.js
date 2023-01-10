function attachEvents() {
    const inputField = document.getElementById('location');
    const getWeatherBtn = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const weather = {
        'Sunny': '\u2600',
        'Partly sunny': '\u26C5',
        'Overcast': '\u2601',
        'Rain': '\u2614',
    }
    
    getWeatherBtn.addEventListener('click', loadData);

    async function loadData() {
        let locationCode;
        try {
            const response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
            if (!response.ok) {
                throw new Error;
            }
            const data = await response.json();
            for (const obj of data) {
                if (obj.name == inputField.value) {
                    locationCode = obj.code;
                    break;
                }
            }
            if (!locationCode) {
                throw new Error;
            }
            const current = await getToday(locationCode);
            const upcoming = await getUpcoming(locationCode);
            forecastDiv.replaceChildren(current, upcoming);
            forecastDiv.style.display = '';
        } catch (err) {
            forecastDiv.innerHTML = '';
            forecastDiv.textContent = 'Error';
            forecastDiv.style.display = '';
        }
    }

    async function getToday(code) {

        const response = await fetch('http://localhost:3030/jsonstore/forecaster/today/' + code);
        if (!response.ok) {
            throw new Error;
        }
        const data = await response.json();
        const result = e('div', { id: 'current' },
            e('div', { className: 'label' }, 'Current Conditions'),
            e('div', { className: 'forecasts' },
                e('span', { className: 'condition symbol' }, weather[data.forecast.condition]),
                e('span', { className: 'condition' },
                    e('span', { className: 'forecast-data' }, data.name),
                    e('span', { className: 'forecast-data' }, `${data.forecast.low}\xB0/${data.forecast.high}\xB0`),
                    e('span', { className: 'forecast-data' }, data.forecast.condition))));
        return result;

    }

    async function getUpcoming(code) {
        const response = await fetch('http://localhost:3030/jsonstore/forecaster/upcoming/' + code);
        if (!response.ok) {
            throw new Error;
        }
        const data = await response.json();
        const forecast = data.forecast;
        const result = e('div', { id: 'upcoming' },
            e('div', { className: 'label' }, 'Three-dat forecast'));
        const forecastInfo = e('div', { className: 'forecast-info' });
        forecast.forEach(el => {
            forecastInfo.appendChild(e('span', { className: 'upcoming' },
                e('span', { className: 'symbol' }, weather[el.condition]),
                e('span', { className: 'forecast-data' }, `${el.low}\xB0/${el.high}\xB0`),
                e('span', { className: 'forecast-data' }, el.condition)));
        });
        result.appendChild(forecastInfo);
        return result;
    }

    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            result[attr] = value;
        }

        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });

        return result;
    }
}

attachEvents();