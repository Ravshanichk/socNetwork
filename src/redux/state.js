import renderEntireTree from "../render";

let state = {
  profilePage: [
    { id: 1,message: "Sometime owls are not what they look like",likeCount: 3,},
    { id: 2, message: "YOU!", likeCount: 0 },
    { id: 3, message: "Just let it go", likeCount: 1 },
  ],
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
    }
  

 
};

export let addPost = (newMessage) => {
 
  let newPost = {
    id: 4,
    message: newMessage,
    likeCount: 10
  }
  state.profilePage.push(newPost);
  renderEntireTree(state)
}

export default state