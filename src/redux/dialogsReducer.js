const ADD_MESSAGE = 'ADD-MESSAGE';
const ON_CHANGE_TEXT_AREA_MESSAGE ='ON-CHANGE-TEXT-AREA-MESSAGE';


let initialState ={
    messages: [
        { text: "Hello", id: 1 },
        { text: "Hi!", id: 2 },
        { text: "Sometimes i wish i were a bird", id: 3 },
        { text: "My daughter is going to America", id: 4 },
        { text: "You look like previous prime minister of Japan", id: 5 },
      ],

      dialogsItems: [
        { name: "Stein", id: 1 },
        { name: "Akira", id: 2 },
        { name: "Husein", id: 3 },
        { name: "Salt", id: 4 },
      ],
      placeHolder: "Type your message",
      textArea: "",
}

const dialogsReducer = (state=initialState, action) =>{

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

export const addMessageAC=()=>({type: ADD_MESSAGE});
export const onCHangeTextAreaMessageAC=(text)=>({type: ON_CHANGE_TEXT_AREA_MESSAGE, body: text});

export default dialogsReducer