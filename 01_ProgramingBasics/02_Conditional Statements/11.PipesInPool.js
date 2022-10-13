function pipesInPool(input) {
    let V = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let time = Number(input[3]);
    let V1 = P1 * time;
    let V2 = P2 * time;
    let finalV = V1 + V2;
    let V1per = V1 / finalV * 100;
    let V2per = V2 / finalV * 100;
    let finalVper = finalV / V * 100;
    let diff = Math.abs(V - finalV);
    if (V >= finalV) {
        console.log(`The pool is ${finalVper.toFixed(2)}% full. Pipe 1: ${V1per.toFixed(2)}%. Pipe 2: ${V2per.toFixed(2)}%.`);
    } else {
        console.log(`For ${time} hours the pool overflows with ${diff.toFixed(2)} liters.`);
    }
}
pipesInPool([100, 100 , 100 , 2.5]);