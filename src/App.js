import React, { useState, useEffect } from "react";
import CustomPizzaForm from './Components/CustomPizzaForm.js';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import OrderedPizza from "./Components/OrderedPizza.js";
import axios from 'axios'

const dummyPizzaData = [
  {
    name: 'Brian',
    phoneNumber: '1234567890',
    pickUpOrCarryOut: 'Carryout',
    instructions: 'none',
    pizzaSize: 'Large',
  }
]

const initialFormValues = [
  {
    name: '',
    phoneNumber: '',
    pickUpOrCarryOut: '',
    instructions: '',
    pizzaSize: '',
  }
]


const App = () => {

  const [pizzaData, setPizzaData] = useState(dummyPizzaData)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [error, setError] = useState('')

//   const getUsers = () => {
//     axios.get('https://reqres.in/api/users')
//       .then(response => {
//         setPizzaData(response.data.data)
//       })
//       .catch(err => {
//         debugger
//       })
// }

//   const postNewUser = newUser => {
//     axios.post('https://reqres.in/api/users', newUser)
//       .then(res => {
//         setPizzaData([...users, res.data])
//       })
//       .catch(err => {
//         debugger
//       })
//       .finally(() => {
//         setFormValues(initialFormValues)
//       })
//   }

  const onInputChange = evt => {
    const {name, value} = evt.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onSubmit = evt => {

    evt.preventDefault()
    if (!formValues.name || !formValues.phoneNumber || !formValues.pickUpOrCarryOut || !formValues.pizzaSize) {
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
      <div>
        <h1>Lambda Eats</h1>
        <div>
          <span>{error}</span>
        </div>
        <div>
            <CustomPizzaForm 
            values={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            />
        </div>

      {
        pizzaData.map(pizza => {
          return (
            <OrderedPizza props={pizza}/>
          )
        })
      }



      </div>



    </>
  );
};
export default App;
