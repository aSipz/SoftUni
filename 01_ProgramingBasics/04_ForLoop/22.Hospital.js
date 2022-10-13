function hospital(input) {
    let numOfDays = parseInt(input[0]);
    let patientCountPerDay = 0;
    let doctorsCount = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    for (i = 1; i <= numOfDays; i++) {
        patientCountPerDay = parseInt(input[i]);
        if (patientCountPerDay <= doctorsCount) {
            treatedPatients += patientCountPerDay;
        } else {
            treatedPatients += doctorsCount;
            untreatedPatients += patientCountPerDay - doctorsCount;
        }
        if (i % 3 == 2 && untreatedPatients > treatedPatients) {
            doctorsCount++;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital([6,25,25,25,25,25,2]);