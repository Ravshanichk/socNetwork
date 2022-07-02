import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ON_CHANGE_TEXT_AREA_POST ='ON-CHANGE-TEXT-AREA-POST';
const ON_CHANGE_TEXT_AREA_MESSAGE ='ON-CHANGE-TEXT-AREA-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Sometime owls are not what they look like",
          likeCount: 3,
        },
        { id: 2, message: "YOU!", likeCount: 0 },
        { id: 3, message: "Just let it go", likeCount: 1 },
      ],
      textArea: "",
      placeHolder: "Type your post",
    },
    dialogsPage: {
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
    },
  },
  // _callSubscriber функция которая принимает все функцию из вне (subscribe(observer)) и вызывает ее
  _callSubscriber() {
    console.log("state changed");
  },
  // subscribe функция подписвания функции из вне (callback)
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    debugger
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsReducer = dialogsReducer(this._state.dialogsPage, action);

      this._callSubscriber(this.getState());

  },
};

export const addPostAC =()=>({type: ADD_POST});
export const addMessageAC=()=>({type: ADD_MESSAGE});
export const onCHangeTextAreaPostAC=(text)=>({type: ON_CHANGE_TEXT_AREA_POST, body: text});
export const onCHangeTextAreaMessageAC=(text)=>({type: ON_CHANGE_TEXT_AREA_MESSAGE, body: text});


window.store = store;

export default store;
