const SET_AUTH = "SET-AUTH"

let initialState ={
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
}

const authReducer = (state=initialState, action) =>{
    
    switch(action.type){
        case SET_AUTH:
           return{
            ...state,
            id: action.authObj.id,
            login: action.authObj.login,
            email: action.authObj.email,
            isAuth: true
           }
          
        default:
            return state;
    }
}

export const setAuthData=(authObj)=>({type:SET_AUTH, authObj})


export default authReducer