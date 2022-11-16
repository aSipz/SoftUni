function solve(steps, footprintLength, speed) {
    let distanceKm = steps * footprintLength / 1000;
    let restMinutes = Math.floor(steps * footprintLength / 500)
    let timeMinutes = distanceKm / speed * 60 + restMinutes;
    let timeSeconds = timeMinutes * 60;
    let hours = Math.floor(timeMinutes / 60);
    let minutes = Math.trunc(timeMinutes % 60);
    let seconds = Math.round(timeSeconds % 60);
    console.log(`${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`);
}
solve(2564, 0.70, 5.5);