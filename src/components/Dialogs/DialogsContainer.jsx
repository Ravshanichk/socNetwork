import React from "react";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage
 
  let addMessage = () => {
    props.store.dispatch(addMessageAC());
  };

  let onChangeDialogsTextarea = (text) => {
    props.store.dispatch(updateNewMessageTextAC(text));
  };

  return (
    <Dialogs
        addMessage={addMessage}
        onChangeDialogsTextarea={onChangeDialogsTextarea}
        state={state}
        // dialogsItems={state.dialogsItems}
        // messages={state.messages}
        // textArea={state.textArea}
        // placeHolder={state.placeHolder}

    />
  );
};

export default DialogsContainer;
