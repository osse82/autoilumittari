import React from 'react';
import { FormControlLabel, Radio, RadioGroup, Slider } from '@material-ui/core';
import styles from './Form.module.css';
import { TravelTime } from '../TravelTime/TravelTime';
import { FuelConsumption } from '../FuelConsumption/FuelConsumption';
import { Summary } from '../Summary/Summary';
export class Form extends React.Component {

    constructor() {
        super();
        this.distanceMarkers = [
            {value: 0, label: "10 km"},
            {value: 500, label: "500 km"},   
            {value: 1000, label: "1000 km"}
          ]
        
          this.speedMarkers = [
            {value: 1, label: "1 km/h"},
            {value: 130, label: "130 km/h"},   
          ]

          this.cars = [
              {baseConsumption: 3.0, name: "car1"},
              {baseConsumption: 3.5, name: "car2"},
              {baseConsumption: 4.0, name: "car3"}
          ]

          this.defaultDistance = 300;
          this.defaultSpeed1 = 100;
          this.defaultSpeed2 = 80;
        
          this.state = {
            speed1: this.defaultSpeed1,
            speed2: this.defaultSpeed2,
            distance: this.defaultDistance,
            car: this.cars[0]
          }
          
    }

    changeDistance = (e, value) => {
        this.setState( state => {
            return {...state, distance: value}
        })
    }

    changeSpeed1 = (e, value) => {
        this.setState( state => {
            return {...state, speed1: value}
        })
    }

    changeSpeed2 = (e, value) => {
        this.setState( state => {
            return {...state, speed2: value}
        })
    }

    changeCar = (e) => {
        const selected = this.cars.find(car => car.name === e.target.value)
        this.setState( state => {
            return {...state, car: selected}
        })
    }

    render() {
        return (
            <form>
                <div className={styles.bg} onChange={this.changeCar}>
                    <div className={styles.radio}>
                        <RadioGroup value={this.state.car.name}>
                            <FormControlLabel 
                                control={<Radio color="primary"/>}
                                label={
                                    <React.Fragment>
                                        <img src={process.env.PUBLIC_URL + '/small.svg'} alt="small car" width={"40px"} style={{marginTop: "5px"}} />
                                    </React.Fragment>                               
                                } 
                                value={this.cars[0].name} >
                            </FormControlLabel>
                            
                            <FormControlLabel 
                                control={<Radio color="primary"/>}
                                label={
                                    <React.Fragment>
                                        <img src={process.env.PUBLIC_URL + '/mid.svg'} alt="small car" width={"40px"} style={{ marginTop: "5px" }} />
                                    </React.Fragment>
                                }
                                value={this.cars[1].name}>
                            </FormControlLabel>

                            <FormControlLabel 
                                control={<Radio color="primary"/>}
                                label={
                                    <React.Fragment>
                                        <img src={process.env.PUBLIC_URL + '/large.svg'} alt="small car" width={"40px"} style={{ marginTop: "5px" }} />
                                    </React.Fragment>
                                } 
                                value={this.cars[2].name}>
                            </FormControlLabel>
                        </RadioGroup>
                    </div>
                    
                </div>
                <div className={styles.bg}>
                    <label className={styles.rangeLabel}>Matkan pituus</label>
                    <div className={styles.slider}>
                        <Slider
                            defaultValue={this.defaultDistance}
                            aria-labelledby="discrete-slider-small-steps"
                            step={10}
                            marks = {this.distanceMarkers}
                            min={10}
                            max={1000}
                            valueLabelDisplay="on"
                            onChangeCommitted={(e, value) => this.changeDistance(e, value)}
                        />
                    </div>
                </div>
                <div className={styles.bg}>
                    <label className={styles.rangeLabel}>Nopeus 1</label>
                    <div className={styles.slider}>
                        <Slider
                            defaultValue={this.defaultSpeed1}
                            aria-labelledby="discrete-slider-small-steps"
                            step={1}
                            marks = {this.speedMarkers}
                            min={1}
                            max={130}
                            valueLabelDisplay="on"
                            onChangeCommitted ={(e, value) => this.changeSpeed1(e, value)}
                        />
                    </div>
                    <div className={styles.result}>
                        <TravelTime speed={this.state.speed1} distance={this.state.distance}/>
                        <FuelConsumption
                            speed={this.state.speed1} 
                            distance={this.state.distance}
                            baseConsumption = {this.state.car.baseConsumption}
                        />
                    </div>
                    
                </div>
                <div className={styles.bg}>
                    <label className={styles.rangeLabel}>Nopeus 2</label>
                    <div className={styles.slider}>
                        <Slider
                            defaultValue={this.defaultSpeed2}
                            aria-labelledby="discrete-slider-small-steps"
                            step={1}
                            marks = {this.speedMarkers}
                            min={1}
                            max={130}
                            valueLabelDisplay="on"
                            onChangeCommitted={(e, value) => this.changeSpeed2(e, value)}
                        />
                    </div>
                    <div className={styles.result}>
                        <TravelTime speed={this.state.speed2} distance={this.state.distance}/>
                        <FuelConsumption
                            speed={this.state.speed2} 
                            distance={this.state.distance}
                            baseConsumption = {this.state.car.baseConsumption}
                        />
                    </div>
                </div>
                <div className={styles.summary}>
                    <Summary
                        speed1={this.state.speed1}
                        speed2={this.state.speed2}
                        distance={this.state.distance}
                        baseConsumption={this.state.car.baseConsumption}
                    />
                </div>
                


            </form>
        )
    }


}