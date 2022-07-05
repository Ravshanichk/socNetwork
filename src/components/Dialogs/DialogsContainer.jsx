import React from "react";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps =(state) =>{
    return{
      dialogsPage: state.dialogsPage
    }
  }
  
  let mapDispatchtoProps = (dispatch) => {
    return{
        addMessage: ()=>{
        dispatch(addMessageAC());
      },
      onChangeDialogsTextarea: (body)=>{
        dispatch(updateNewMessageTextAC(body))
      }
    }
  }

let DialogsContainer = connect(mapStateToProps, mapDispatchtoProps)(Dialogs)

export default DialogsContainer;
