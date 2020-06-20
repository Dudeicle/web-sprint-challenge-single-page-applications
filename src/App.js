import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import FormSchema from './Validation/FormSchema.js';
import * as Yup from 'yup';

import Home from './Components/Home';
import PizzaForm from './Components/PizzaForm';



const initialFormValues = [
  {
    name: '',
    instructions: '',
    pizzaSize: '',
  }
]

const initialPizzas = []
const initialDisabled = true


const App = () => {
  
  
  const [ pizzaData, setPizzaData ] = useState(initialPizzas)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ error, setError ] = useState('')
  const [ disabled, setDisabled ] = useState(initialDisabled)

  const onInputChange = evt => {

    const { name, value } = evt.target

    Yup
      .reach(FormSchema, name)

      .validate(value)

      .then(() => {
        setError({
          ...error,
          [name]: ""
        });
      })

      .catch(err => {
        setError({
          ...error,
          [name]: err.errors[0]
        });
      });

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  
    const onCheckboxChange = evt => {
      const { name, checked } = evt.target
      setFormValues({
        ...formValues,
        [name]: checked,
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
      <Switch>

      <Route path="/pizza">
        <PizzaForm values={formValues} onInputChange={onInputChange} onSubmit={onSubmit} onCheckboxChange={onCheckboxChange} disabled={disabled}/>
      </Route>

      <Route  path="/">
        <Home />
      </Route>

      </Switch>
    </>
  );
};
export default App;
