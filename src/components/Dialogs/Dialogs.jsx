import React, { useRef } from "react";
import s from "./Dialogs.module.css";
import DialogUser from "./DialogUser/DialogUser";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let newMessage = useRef();

  let addMessage = () =>{
    props.dispatch({type:"ADD-MESSAGE"});

  }

  let onChangeDialogsTextarea = () => {
    let text = newMessage.current.value;
    props.dispatch({type: "ON-CHANGE-TEXT-AREA-MESSAGE", body: text})
  }
 
  return (
    <div>
      <div className={s.dialogArea}>
        <div className={s.dialogItems}>
          <ul>
            {props.dialogsPage.dialogsItems.map((item) => {
              return (
                <li>
                  <DialogUser name={item.name} id={item.id} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={s.messagesBlock}>
          {props.dialogsPage.messages.map((item) => {
            return (
                <Message message={item}/>
            );
          })}
        </div>
      </div>
      <div>
      <textarea ref={newMessage} onChange={onChangeDialogsTextarea} value={props.dialogsPage.textArea} placeholder={props.dialogsPage.placeHolder}></textarea>
      <button onClick={addMessage}>Send message</button>
      </div>
   
    </div>
  );
};

export default Dialogs;
