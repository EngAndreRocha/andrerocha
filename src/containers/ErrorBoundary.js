import React, { Component } from 'react';
import { connect } from 'react-redux';
import {} from '../actions';

const mapStateToProps = (state) => {
    return {}
  }

  const mapDispatchToProps = (dispatch) => {
    return {}
  }

class ErrorBoundary extends Component {

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

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
