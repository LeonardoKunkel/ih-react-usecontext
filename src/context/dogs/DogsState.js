
//. Importaciones
import DogsContext from './DogsContext'
import { useReducer } from 'react';
import DogsReducer from './DogsReducer';
import axios from 'axios';

//. Funcion de estado global
const DogsState = (props) => {

    // A. Estado inicial
    const initialState = {
        hola: 'Hola mundo',
        dogs: [],
        currentDogPhoto: ''
    }

    // B. Gestión de las funciones que cambian el estado inicial (Reducers)
    const [globalState, dispatch] = useReducer(DogsReducer, initialState);

    // C. Funciones API / SIDE EFFECT FUNCTIONS
    const changeName = () => {

        dispatch({ // El objecto dentro de dispatch se llama action
            type: 'CHANGE_NAME',
            payload: 'ironhack'
        })

    }

    const getDog = async () => {

        const res = await axios.get('https://dog.ceo/api/breeds/image/random')

        const picDog = res.data.message

		dispatch({
			type: "GET_DOG",
			payload: picDog
		})

    }

    // D. Retorno
    return(
        <DogsContext.Provider
            value={{
                leo: globalState.hola,
                dogs: globalState.dogs,
                currentDogPhoto: globalState.currentDogPhoto,
                changeName,
                getDog
            }}>

            {props.children}

        </DogsContext.Provider>
    )

}

//. Exportación
export default DogsState
