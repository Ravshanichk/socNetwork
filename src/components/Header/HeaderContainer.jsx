import React from 'react'
import { connect } from 'react-redux'
import { authApi } from '../../api/api';
import { setAuthData } from '../../redux/authReducer';
import Header from './Header'

class HeaderContainer extends React.Component{
    componentDidMount(){
        authApi().then((response) => {
              console.log(response)
                this.props.setAuthData(response.data.data)
          });
    }

    render(){
        return(
            <Header auth={this.props}/>
        )
    }
}

let mapStateToProps =(state)=>{
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps,{setAuthData})(HeaderContainer)