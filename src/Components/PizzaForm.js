import React from 'react';


export default function PizzaForm(props) {
    
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
    } = props
    
        return (
            <form onSubmit={onSubmit} >
                <div>
                    <h2>Build The Pizza!</h2>
                </div>
    
                {/*------------------------------------- USER INFO! -------------------------------------*/}
    
                <div>               
                    <label>Name on Order:&nbsp;
                        <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                    
                        />
                    </label>&nbsp;

                    <br></br>
                    
                    <label>Special Instructions:&nbsp;
                        <input 
                        type='text'
                        name='instructions'
                        value={values.instructions}
                        onChange={onInputChange}
                        />
                    </label>&nbsp;
                
                    <br></br>
    
                    <label>Pizza Size:&nbsp;
                        <select
                            name='pizzaSize'
                            value={values.pizzaSize}
                            onChange={onInputChange}
                        >
                            <option value=''>-- Select a Size --</option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                            <option value='ExtraLarge'>Extra Large</option>
                        </select>
                    </label>&nbsp;
    
                    <br></br>
    
                    <h2>CHOOSE YOUR TOPPINGS</h2>
    
                    <label>Pepperoni: &nbsp;
                            <input 
                                type="checkbox"
                                name="nameOfChoice"
                                value="yes"
                                />
                    </label>&nbsp;
                    <br></br>
                    <label>Onions: &nbsp;
                            <input 
                                type="checkbox"
                                name="nameOfChoice"
                                value="yes"
                                />
                    </label>&nbsp;
                    <br></br>
                    <label>Hot Peppers: &nbsp;
                            <input 
                                type="checkbox"
                                name="nameOfChoice"
                                value="yes"
                                />
                    </label>&nbsp;
                    <br></br>
                    <label>Bacon: &nbsp;
                            <input 
                                type="checkbox"
                                name="nameOfChoice"
                                value="yes"
                                onChange={onCheckboxChange}
                                />
                    </label>&nbsp;
                    <br></br>
                </div>
                    <br></br>
                

                <div>
                    <button disabled={disabled}>Finish Custom Pizza!</button>
                </div>
            </form>
        )
}