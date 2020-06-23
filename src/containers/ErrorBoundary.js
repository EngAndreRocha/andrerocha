import React, { Component } from 'react';
import { connect } from 'react-redux';
import {} from '../actions';
//import './ErrorBoundary.css';

const mapStateToProps = (state) => { // passing props from state in store to app
    return {
        /* hasError: state.RegisterForm.hasError */ //Change This
    }
  }
  
  //dispatch => is what triggers the action
  const mapDispatchToProps = (dispatch) => { // passing actions(objects) send to reducer
    return {
        //onSettings_Click: () => dispatch(Settings_Click())
    }
  }

class ErrorBoundary extends Component {
    //state   hasError:false // this is a countainer
    
    /* constructor(props){
        super();
        this.state = {
            hasError: false
        }
    } */

    componentDidCatch(error, info) {
        this.setState({hasError:true})
    }
    
    render(){

        const {hasError} = this.props;

        if(hasError){
            return(
                <div className="Error-div">
                    <p>Oops!!</p>
                </div>
            );
        }
        else{
            return this.props.children;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary); //subscribe to any state changes in the redux store interested in actions defined in mapStateToProps and mapDispatchToProps
