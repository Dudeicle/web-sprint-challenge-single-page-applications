import React from 'react';
import { Link } from 'react-router-dom'
import PizzaForm from './PizzaForm';


export default function HomePage(props) {

    const { formValues, onInputChange, onSubmit } = props

    return (
        <>
            <h2>Click Below To Build A Pizza! </h2>
            <nav>
            <div className="nav-links">
                <Link to ="/Pizza">Pizza Selector</Link>
            </div>
            </nav>

            <PizzaForm 
            values={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            />
            

        </>
    )
}