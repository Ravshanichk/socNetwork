import React, { useRef } from "react";
import { addMessageAC, onCHangeTextAreaMessageAC } from "../../redux/state";
import s from "./Dialogs.module.css";
import DialogUser from "./DialogUser/DialogUser";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessage = useRef();
  let dialogsItems = props.dialogsPage.dialogsItems.map((item) => {
    return (
      <li>
        <DialogUser name={item.name} id={item.id} />
      </li>
    );
  });
  let messages = props.dialogsPage.messages.map((item) => {
    return <Message message={item} />;
  });

  let addMessage = () => {
    props.dispatch(addMessageAC());
  };

  let onChangeDialogsTextarea = () => {
    let text = newMessage.current.value;
    props.dispatch(onCHangeTextAreaMessageAC(text));
  };

  return (
    <div>
      <div className={s.dialogArea}>
        <div className={s.dialogItems}>
          <ul>{dialogsItems}</ul>
        </div>
        <div className={s.messagesBlock}>{messages}</div>
      </div>
      <div>
        <textarea
          ref={newMessage}
          onChange={onChangeDialogsTextarea}
          value={props.dialogsPage.textArea}
          placeholder={props.dialogsPage.placeHolder}
        ></textarea>
        <button onClick={addMessage}>Send message</button>
      </div>
    </div>
  );
};

export default Dialogs;
