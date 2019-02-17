const initState = {
    sum: 0,
}

export default function num (state = initState, action){
    switch(action.type) {
        case 'add':
            return {
                sum: ++ state.sum,
            }
        default:
            return state
    }
}