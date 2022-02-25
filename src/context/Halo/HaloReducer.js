
const reducer = (globalState, action) => {

    switch (action.type) {
        case 'CHANGE_CHAR':
            return {
                ...globalState,
                name: action.payload.arbiter,
                code: action.payload.usedToBe,
                aka: action.payload.kak
            }
            break;

        default:
            return globalState
            break;
    }

}

export default reducer
