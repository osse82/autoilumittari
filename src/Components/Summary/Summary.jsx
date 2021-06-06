import React from 'react';
import { averageConsumptionCalculator, timeDifferenceCalculator } from '../../calculator';

export function Summary(props) {

    const speed1 = props.speed1;
    const speed2 = props.speed2;
    const distance = props.distance;
    const baseConsumption = props.baseConsumption; 

    const { hours, minutes, seconds } = timeDifferenceCalculator(speed1, speed2, distance);
    let timestring = '';
    if (!hours && !minutes) {
        timestring = `${seconds} sekuntia`
    } 
    else if (!hours) {
        timestring = `${minutes} minuuttia`
    }
    else {
        timestring = `${hours} tuntia ja ${minutes} minuuttia`
    }

    const consumption1 = averageConsumptionCalculator(speed1, baseConsumption);
    const consumption2 = averageConsumptionCalculator(speed2, baseConsumption);
    const avgconsumption = Math.abs(consumption1 - consumption2);
    const totalConsumption = avgconsumption * distance / 100;
       
    let result = ""
    if (speed1 > speed2) {
        result = `Matka on ${timestring} nopeampi nopeudella 1,
         mutta se kuluttaa ${totalConsumption.toFixed(1)} litraa enemmän.`
    }
    else if (speed2 > speed1) {
        result = `Matka on ${timestring} nopeampi nopeudella 2,
         mutta se kuluttaa ${totalConsumption.toFixed(1)} litraa enemmän.`
    }
    else {
        result = 'Nopeudet ovat yhtä suuret, joten kulutus ja matka-aikakin ovat yhtä suuret.'
    }

    return (
        <div>
            {result}
        </div>
    )


}