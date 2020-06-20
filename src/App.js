import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import PizzaForm from './Components/PizzaForm';

import formSchema from './Validation/formSchema.js';
import * as Yup from 'yup';
import axios from 'axios';




const initialFormValues = [
  {
    name: '',
    instructions: '',
    pizzaSize: '',
    pepperoni: false,
    onions: false,
    peppers: false,
    bacon: false,
  }
]

const initialErrors = {
  name: '',
  instructions: '',
  pizzaSize: '',
  pepperoni: '',
  onions: '',
  peppers: '',
  bacon: '',
}
const initialPizzas = []
const initialDisabled = true


const App = () => {
  
  
  const [ pizzaData, setPizzaData ] = useState(initialPizzas)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ error, setError ] = useState(initialErrors)
  const [ disabled, setDisabled ] = useState(initialDisabled)



  const getOrders = () => {
    return ( pizzaData )
}


  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setPizzaData([...pizzaData, res.data])
        console.log(res.data)
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }


  const onInputChange = evt => {

    const { name, value } = evt.target

    Yup
      .reach(formSchema, name)

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

    const newOrder = { ...formValues }

    postNewOrder(newOrder)
  }

   
  useEffect(() => {
    getOrders()
  })

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])

  

  return (
    <div>
      <h1>Lambda Eats</h1>
      <nav>
      <div className="nav-links">
        <Link to ="/">Home Page</Link>
      </div>
      </nav>
      <Switch>

      <Route path="/pizza">
        <PizzaForm values={formValues} onInputChange={onInputChange} onSubmit={onSubmit} onCheckboxChange={onCheckboxChange} disabled={disabled} error={error}/>
      </Route>

      <Route  path="/">
        <Home />
      </Route>

      </Switch>
    </div>
  );
};
export default App;
