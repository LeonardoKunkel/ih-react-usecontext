
const reducer = (globalState, action) => {

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...globalState,
                hola: action.payload
            }
            break;

        case 'GET_DOG':
            return {
                ...globalState,
                currentDogPhoto: action.payload
            }
            break;
    
        default:
            return globalState
            break;
    }

}

export default reducer
