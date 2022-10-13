function pipesInPool(input) {
    let V = parseInt(input[0]);
    let P1 = parseInt(input[1]);
    let P2 = parseInt(input[2]);
    let time = parseFloat(input[3]);
    let V1 = P1 * time;
    let V2 = P2 * time;
    let finalV = V1 + V2;
    let V1per = V1 / finalV * 100;
    let V2per = V2 / finalV * 100;
    let finalVper = finalV / V * 100;
    let diff = Math.abs(V - finalV);
    if (V >= finalV) {
        console.log(`The pool is ${Math.trunc(finalVper)}% full. Pipe 1: ${Math.trunc(V1per)}%. Pipe 2: ${Math.trunc(V2per)}%.`);
    } else {
        console.log(`For ${time} hours the pool overflows with ${Math.trunc(diff*100)/100} liters.`);
    }
}
pipesInPool([150,104,140,3.65])