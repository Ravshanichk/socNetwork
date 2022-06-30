
let renderEntireTree = ()=> {
  console.log("state changed")
}

let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.textArea,
    likeCount: 10,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.textArea = " ";
  renderEntireTree(state);
};

export const addMessage = (newMessage) => {
  let newMessageItem = {
    text: newMessage,
    id: 6,
  };
  state.dialogsPage.messages.push(newMessageItem);
  renderEntireTree(state);
};

export const onChangeTextArea = (newTextValue) => {
  state.profilePage.textArea = newTextValue;
  renderEntireTree(state);
  
};

export const subscribe = (observer) => {
  renderEntireTree = observer
}

export default state;
