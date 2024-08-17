const initialState = {
    userName:"",
    passWord:"",
    isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                userName: action.payload.username,
                passWord: action.payload.password,
                isAuthenticated: true,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
            };
        default:
            return state;
    }
}
