import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom'

import Home from './Components/Home'
import PizzaForm from './Components/PizzaForm'



const initialFormValues = [
  {
    name: '',
    phoneNumber: '',
    pickUpOrCarryOut: '',
    instructions: '',
    pizzaSize: '',
  }
]

const initialPizzas = []


const App = () => {
  
  
  const [pizzaData, setPizzaData] = useState(initialPizzas)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [error, setError] = useState('')


  const onInputChange = evt => {
      const {name, value} = evt.target
      setFormValues({
        ...formValues,
        [name]: value,
      })
    }
  
    const onSubmit = evt => {
  
      evt.preventDefault()
      if (!formValues.name || !formValues.pizzaSize) {
        setError('You need to fill out all the info!')
        return
      }
      setError('')
  
  
      const newPizza = { ...formValues }
  
      setPizzaData(pizzaData => [newPizza, ...pizzaData])
      setFormValues(initialFormValues)
    }
  
  
  return (
    <>
      <h1>Lambda Eats</h1>
      <nav>
      <div className="nav-links">
        <Link to ="/">Home Page</Link>
      </div>
      </nav>
      
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/Components/PizzaForm" component={PizzaForm}>
          {/* <PizzaForm 
          values={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          /> */}
      </Route>
    </>
  );
};
export default App;
