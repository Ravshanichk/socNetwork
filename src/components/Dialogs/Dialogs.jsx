import React, { useRef } from "react";
import s from "./Dialogs.module.css";
import DialogUser from "./DialogUser/DialogUser";
import Message from "./Message/Message";

const Dialogs = (props) => {
  debugger
  let newMessage = useRef();
  let dialogsItems = props.state.dialogsItems.map((item) => <li><DialogUser name={item.name} id={item.id} /></li>);
  let messages = props.state.messages.map((item) =>  <Message message={item} />);

  let onSendMessageClick = () => {
    props.addMessage();
  };

  let onChangeDialogsTextarea = () => {
    let text = newMessage.current.value;
    props.onChangeDialogsTextarea(text);
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
          value={props.state.textArea}
          placeholder={props.state.placeHolder}
        ></textarea>
        <button onClick={onSendMessageClick}>Send message</button>
      </div>
    </div>
  );
};

export default Dialogs;
