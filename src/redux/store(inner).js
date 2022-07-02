import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


// в данном файле описанные концепции работы/кишки Redux библиотеки
let store = {
  _state: {
    profilePage: {
      // posts: [
      //   {
      //     id: 1,
      //     message: "Sometime owls are not what they look like",
      //     likeCount: 3,
      //   },
      //   { id: 2, message: "YOU!", likeCount: 0 },
      //   { id: 3, message: "Just let it go", likeCount: 1 },
      // ],
      // textArea: "",
      // placeHolder: "Type your post",
    },
    dialogsPage: {
      // messages: [
      //   { text: "Hello", id: 1 },
      //   { text: "Hi!", id: 2 },
      //   { text: "Sometimes i wish i were a bird", id: 3 },
      //   { text: "My daughter is going to America", id: 4 },
      //   { text: "You look like previous prime minister of Japan", id: 5 },
      // ],

      // dialogsItems: [
      //   { name: "Stein", id: 1 },
      //   { name: "Akira", id: 2 },
      //   { name: "Husein", id: 3 },
      //   { name: "Salt", id: 4 },
      // ],
      // placeHolder: "Type your message",
      // textArea: "",
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




window.store = store;

// export default store;
