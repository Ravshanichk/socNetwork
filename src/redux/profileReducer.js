const ADD_POST = 'ADD-POST';
const ON_CHANGE_TEXT_AREA_POST ='ON-CHANGE-TEXT-AREA-POST';

const profileReducer = (state, action) => {
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
        state.textArea = action.body;
        return state;
    default:
            return state;
}
}

export default profileReducer