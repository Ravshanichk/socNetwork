import React from 'react'
import Profile from './Profile'
import { connect } from "react-redux";
import { setProfile } from '../../redux/profileReducer';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { getProfile } from '../../api/api';

class ProfileContainer extends React.Component{

    componentDidMount(){
        console.log(this.props)
        debugger
        let userId
        if(this.props.match.params===null){ 
           
           setTimeout(()=>{
            userId = this.props.auth.id
           }, 2000)
        } else {
            userId = this.props.match.params.userId
        }
        getProfile(userId).then((response) => {
            debugger
          let profile = response;
          debugger
          this.props.setProfile(profile);

        });
    }
    render(){
        return(
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps =(state)=>{
    return{
        profile: state.profilePage.profile,
        auth: state.auth
    }
}


// let RouteContainer = (props)=>{
//     return <ProfileContainer {...props} params={useParams()}/>
// }

function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
}

export default compose(connect(mapStateToProps,{setProfile}),withRouter)(ProfileContainer);