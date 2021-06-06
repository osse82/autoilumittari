import React from 'react';
import { averageConsumptionCalculator } from '../../calculator';

export function FuelConsumption(props) {

    const speed = props.speed;
    const baseConsumption = props.baseConsumption;
    const distance = props.distance;

    const consumptionPer100km = averageConsumptionCalculator(speed, baseConsumption)
    const totalConsumption = distance / 100 * consumptionPer100km

    return (
        <div>
            MATKAN KULUTUS: {totalConsumption.toFixed(1)} litraa
            <br />
            KESKIKULUTUS: {consumptionPer100km.toFixed(1)} l/100km
        </div>
    ) 

}