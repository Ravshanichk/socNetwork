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
    if (action.type === "ADD-POST") {
      debugger
      let newPost = {
        id: 4,
        message: this._state.profilePage.textArea,
        likeCount: 10,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.textArea = "";
      this._callSubscriber(this.getState());
    }
    if (action.type === "ADD-MESSAGE") {
      debugger;
      let newMessageItem = {
        text: this._state.dialogsPage.textArea,
        id: 6,
      };
      this._state.dialogsPage.messages.push(newMessageItem);
      this._state.dialogsPage.textArea = " ";
      this._callSubscriber(this.getState());
    }
    if (action.type === "ON-CHANGE-TEXT-AREA-POST") {
      debugger;
      this._state.profilePage.textArea = action.body;
      this._callSubscriber(this.getState());
    }
    if (action.type === "ON-CHANGE-TEXT-AREA-MESSAGE") {
      debugger;
      this._state.dialogsPage.textArea = action.body;
      this._callSubscriber(this.getState());
    }
  },
};

window.store = store;

export default store;
