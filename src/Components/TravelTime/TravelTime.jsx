import React from 'react';
import { travelTimeCalculator } from '../../calculator'

export function TravelTime(props) {

    const speed = props.speed;
    const distance = props.distance;

    const {hours, minutes} = travelTimeCalculator(speed, distance)

    return (
        <div>
            MATKUSTUSAIKA {hours}h : {minutes}min
        </div>
    ) 

}