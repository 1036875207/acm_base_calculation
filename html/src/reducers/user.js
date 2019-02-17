
const initState = {
    username: '',
    unix: '',
}

export default function users (state = initState, action) {
    switch(action.type) {
        case 'userlogin':
            return {
                username: action.username,
            }
        default:
            return state;
    }
}