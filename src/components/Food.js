
import React, { useState } from 'react'

export default function Food() {

    const [food, setFood] = useState({
        name: '',
        price: 0
    })

    const [list, setList] = useState([])

    const check = (event) => {

        setFood({
            ...food,
            [event.target.name]: event.target.value
        })
    }

    const addFood = (event) => {

        event.preventDefault()

        setList({
            ...list,
            food
        })

        setFood({
            name: '',
            price: 0
        })

    }

  return (
    <>
        <form onSubmit={(event) => { addFood(event) }}>

            <label> Nombre </label>
            <input name='name' value={food.name} onChange={(event) => {check(event)}} />

            <label> Precio </label>
            <input name='price' value={food.price} onChange={(event) => {check(event)}} />


            <button type="submit">Crear comida</button>

        </form>

        <h2>Lista de comida</h2>

        {
            list.length === 0 ? <p>No hay publicaciones</p>
            :
            list.map((e, index) => {

                return(
                    <div key={index}>
                        <h3>{ e.name }</h3>
                        <span>{ e.price }</span>
                    </div>
                )

            })
        }
    </>
  )
}

