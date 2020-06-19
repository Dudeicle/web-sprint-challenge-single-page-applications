import React from 'react';

export default function OrderedPizza (props) {
    const { name, phoneNumber, pickUpOrCarryOut, instructions, pizzaSize } = props

    if(!props) {
        return <h3>Working on fetching your pizza details...</h3>
    }

    console.log(props)
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Phone Number: {props.phoneNumber}</p>
            <p>Pickup Or Carryout: {props.pickUpOrCarryOut}</p>
            <p>Instructions: {props.instructions}</p>
            <p>Pizza Size: {props.pizzaSize}</p>
        </div>
    )


}