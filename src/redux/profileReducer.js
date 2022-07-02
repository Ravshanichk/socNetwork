const ADD_POST = 'ADD-POST';
const ON_CHANGE_TEXT_AREA_POST ='ON-CHANGE-TEXT-AREA-POST';

let initialState = {
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
}

const profileReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_POST: 
        let newPost = {
          id: 4,
          message: state.textArea,
          likeCount: 10,
        };
        state.posts.push(newPost);
        state.textArea = "";

        return state
      case ON_CHANGE_TEXT_AREA_POST:   
      debugger  
        state.textArea = action.body;
        return state;
    default:
            return state;
}
}

export const addPostAC =()=>({type: ADD_POST});
export const onCHangeTextAreaPostAC=(text)=>({type: ON_CHANGE_TEXT_AREA_POST, body: text});

export default profileReducer