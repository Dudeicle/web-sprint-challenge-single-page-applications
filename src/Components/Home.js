import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom'


export default function HomePage() {


    return (
        <>
            <h2>Click Below To Build A Pizza! </h2>
            <nav>
            <div className="nav-links">
                <Link to ="/PizzaForm">Pizza Selector</Link>
            </div>
            </nav>
            

        </>
    )
}