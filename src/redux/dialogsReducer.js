const ADD_MESSAGE = 'ADD-MESSAGE';
const ON_CHANGE_TEXT_AREA_MESSAGE ='ON-CHANGE-TEXT-AREA-MESSAGE';

const dialogsReducer = (state, action) =>{

    switch(action.type){
        case ADD_MESSAGE:
            let newMessageItem = {
                text: state.textArea,
                id: 6,
              };
              state.messages.push(newMessageItem);
              state.textArea = " ";
              return state;
        case ON_CHANGE_TEXT_AREA_MESSAGE:
            state.textArea = action.body;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer