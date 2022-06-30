
let store = {
    _state : {
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
      textArea: "well well",
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
    },
  },
  // _callSubscriber функция которая принимает все функцию из вне (subscribe(observer)) и вызывает ее
  _callSubscriber (){
    console.log("state changed")
  },

  getState(){
    return this._state;
  },

  addPost(){
    let newPost = {
      id: 4,
      message: this._state.profilePage.textArea,
      likeCount: 10,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.textArea = " ";
    this._callSubscriber(this.getState);
  },

  addMessage(newMessage){
    let newMessageItem = {
      text: newMessage,
      id: 6,
    };
    this._state.dialogsPage.messages.push(newMessageItem);
    this._callSubscriber(this.getState);
  },

  
onChangeTextArea(newTextValue){
  this._state.profilePage.textArea = newTextValue;
  this._callSubscriber(this.getState);
  
},

  // subscribe функция подписвания функции из вне (callback)
  subscribe(observer){
  this._callSubscriber = observer
}

}




window.store = store





export default store;
