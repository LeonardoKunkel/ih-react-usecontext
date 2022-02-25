import HaloContext from './HaloContext';
import { useReducer } from 'react';
import HaloReducer from './HaloReducer';

const HaloState = (props) => {

    const initialState = {
        name: 'John',
        code: 'Sierra 117',
        aka: 'Demon'
    }

    const [globalState, dispatch] = useReducer(HaloReducer, initialState)

    const changeCharacter = () => {

        dispatch({
            type: "CHANGE_CHAR",
            payload: {
                arbiter: 'Cshakla',
                usedToBe: 'halo protector',
                kak: 'arbiter'
            }
        })

    }
    return(
        <HaloContext.Provider
            value={{
                name: globalState.name,
                code: globalState.code,
                aka: globalState.aka,
                changeCharacter
            }}>

            {props.children}

        </HaloContext.Provider>
    )
}

export default HaloState
