function calculateZones() {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    let maxHeartRate;
    let maxHeartRateFormula;

    if (gender === 'male') {
        maxHeartRate = 226 - age;
        maxHeartRateFormula = `FCMáx = 226 - ${age}`;
    } else if (gender === 'female') {
        maxHeartRate = 220 - age;
        maxHeartRateFormula = `FCMáx = 220 - ${age}`;
    }

    const zone1 = Math.round(maxHeartRate * 0.60);
    const zone2 = Math.round(maxHeartRate * 0.70);
    const zone3 = Math.round(maxHeartRate * 0.8);
    const zone4 = Math.round(maxHeartRate * 0.9);
    const zone5 = Math.round(maxHeartRate * 0.99);

    const result = document.getElementById('result');
    result.innerHTML = `
        <h2>Zonas de Intensidade de Frequência Cardíaca:</h2>
        <p>Frequência Cardíaca Máxima (FCMáx): ${maxHeartRate} bpm (Calculada com base na fórmula: ${maxHeartRateFormula})</p>
        <p>Zona 1: até ${zone1} bpm</p>
        <p>Zona 2: ${zone1 + 1} a ${zone2} bpm</p>
        <p>Zona 3: ${zone2 + 1} a ${zone3} bpm</p>
        <p>Zona 4: ${zone3 + 1} a ${zone4} bpm</p>
        <p>Zona 5: Acima de ${zone4} bpm</p>
    `;
}
