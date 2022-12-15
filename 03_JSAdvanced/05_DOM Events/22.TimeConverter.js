function attachEventsListeners() {
    let timeParse = {
        daysBtn,
        hoursBtn,
        minutesBtn,
        secondsBtn
    }
    let main = document.querySelector('main');
    let allInputs = Array.from(document.getElementsByTagName('input')).filter(a => a.type == 'text');
    main.addEventListener('click', function(e) {
        if (e.target.type == 'button') {
            let inputField = e.target.parentNode.children[1];
            let num = Number(inputField.value);
            let type = e.target.id;
            let result = timeParse[type](num);
            allInputs.forEach(input => {
                input.value = result[input.id];
            });
        }
    });
    function daysBtn(days) {
        let hours = days * 24;
        let minutes = days * 1440;
        let seconds = days * 86400;
        return {days, hours, minutes, seconds};
    }
    function hoursBtn(hours) {
        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = hours * 3600;
        return {days, hours, minutes, seconds};
    }
    function minutesBtn(minutes) {
        let days = minutes / 1440;
        let hours = minutes / 60;
        let seconds = minutes * 60;
        return {days, hours, minutes, seconds};
    }
    function secondsBtn(seconds) {
        let days = seconds / 86400;
        let hours = seconds / 3600;
        let minutes = seconds / 60;
        return {days, hours, minutes, seconds};
    }
}