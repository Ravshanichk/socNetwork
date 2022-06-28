import React from "react";
import s from "./Dialogs.module.css";
import DialogUser from "./DialogUser/DialogUser";
import Message from "./Message/Message";

const Dialogs = (props) => {
  debugger
  return (
    <div>
      <div className={s.dialogArea}>
        <div className={s.dialogItems}>
          <ul>
            {props.dialogItems.map((item) => {
              return (
                <li>
                  <DialogUser name={item.name} id={item.id} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={s.messagesBlock}>
          {props.messages.map((item) => {
            return (
                <Message message={item}/>
            );
          })}
        </div>
      </div>
      <div>
      <textarea></textarea>
      </div>
   
    </div>
  );
};

export default Dialogs;
