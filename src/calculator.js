export function travelTimeCalculator(speed, distance) {
    const time = distance / speed;
    const hours = Math.floor(time);
    const timeInMinutes = time * 60;
    const minutes = Math.floor(timeInMinutes % 60);
    const timeInSeconds = time * 3600 - minutes * 60;    
    const seconds = Math.floor(timeInSeconds % 3600);
    return {hours, minutes, seconds}
}

export function averageConsumptionCalculator(speed, baseConsumption) {
    const consumptionPer100km = baseConsumption * 1.009 ** (speed - 1);  
    return consumptionPer100km;
}

export function timeDifferenceCalculator(speed1, speed2, distance) {
    const time1 = distance / speed1;
    const time2 = distance / speed2;
    const diff = Math.abs(time1 - time2);
    const hours = Math.floor(diff);
    const timeInMinutes = diff * 60;
    const minutes = Math.floor(timeInMinutes % 60);
    const timeInSeconds = diff * 3600 - minutes * 60;
    const seconds = Math.floor(timeInSeconds % 3600);

    return {hours, minutes, seconds}
}

