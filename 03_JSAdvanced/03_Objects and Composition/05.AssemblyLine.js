function createAssemblyLine() {
    
    function hasClima(object) {
        object.temp = 21;
        object.tempSettings = 21;
        object.adjustTemp = () => {
            if (object.temp < object.tempSettings) {
                object.temp++;
            } else if (object.temp > object.tempSettings) {
                object.temp--;
            }
        }
    }

    function hasAudio(object) {
        object.currentTrack = null;
        object.nowPlaying = () => {
            if (object.currentTrack) {
                console.log(`Now playing '${object.currentTrack.name}' by ${object.currentTrack.artist}`);
            }
        }
    }

    function hasParktronic(object) {
        object.checkDistance = (distance) => {
            let message = '';
            if (distance < 0.1) {
                message = 'Beep! Beep! Beep!';
            } else if (distance < 0.25) {
                message = 'Beep! Beep!';
            } else if (distance < 0.5) {
                message = 'Beep!';
            }
            console.log(message);
        }
    }

    return {hasClima, hasAudio, hasParktronic};
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

console.log(myCar);

