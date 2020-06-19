import React, { useState, useEffect } from "react";
import Home from './Components/Home.js';
import CustomPizzaForm from './Components/CustomPizzaForm.js';
import OrderedPizza from "./Components/OrderedPizza.js";
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios'


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
          <Link to='/'>--HOME--</Link>
          <Link to='/Components/CustomPizzaForm'>--Make A Custome Pizza!--</Link>
          <Link to='/Components/OrderedPizza'>--Ordered Pizza--</Link>
        </div>

        <Switch>
          <Route path="/Components/CustomPizzaForm">
            <CustomPizzaForm 
            values={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            />
          </Route>

          <Route>
            <OrderedPizza />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>  

      {/* {
        pizzaData.map(pizza => {
          return (
            <OrderedPizza props={pizza}/>
          )
        })
      } */}



      </div>



    </>
  );
};
export default App;
