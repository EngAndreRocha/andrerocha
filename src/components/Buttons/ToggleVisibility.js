import React, { Component } from 'react';
import { connect } from 'react-redux';
import './buttons.css';

import {
    ToggleVisibility,
    AddToggleVisibility,
    RemoveToggleVisibility
} from '../../actions';


const mapStateToProps = (state) => {
  return {
    is_Hidden: state.ToggleVisibility.is_Hidden,
    signindata: state.SignIn.signindata
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    icon_click: (text) => dispatch(ToggleVisibility(text)),
    onAddToggleVisibility: (text) => dispatch(AddToggleVisibility(text)),
    onRemoveToggleVisibility: (text) => dispatch(RemoveToggleVisibility(text))
  }
}

class ToggleVisibilityButton extends Component {

 /*  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.props.onAddToggleVisibility();
  } */

  componentDidMount() {
    this.props.onAddToggleVisibility(this.props.name);
  }

  render() {
    const {
            is_Hidden,
            icon_click,
            name,
            signindata
        } = this.props;
        
      return ((is_Hidden.length <= 0) || !signindata || (!signindata.isAdminSignIn) ) ? <div></div> : (
        <div className="togglevisibility-div">
            <a href="#!"className="icons-link" onClick={() => icon_click(name)}>
                <img className="icons" title="Button" width="24" src={this.props.imgsrc} alt="Button"></img>
            </a>
            {((is_Hidden.filter(element => element.name === name).length > 0)?(!is_Hidden.filter(element => element.name === name)[0].value):(false)) && <div className="child">{this.props.children}</div>}
        </div>
    );
  }

  componentWillUnmount(){
    this.props.onRemoveToggleVisibility(this.props.name);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleVisibilityButton);


