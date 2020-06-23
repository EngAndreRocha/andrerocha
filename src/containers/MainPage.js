import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ChangeRoute
} from '../actions';
/* import './Page.css'; */ //Possivelmente Remover...
import '../components/Form/Form.css';

import Presentation from '../components/Main/0_Presentation';
import Intro from '../components/Main/1_Intro';
import NextEvent from '../components/Main/2_NextEvent';
/* import Quotes from '../components/Main/2_Quotes';  */
import Portfolio from '../components/Main/3_Portfolio';
import Horario from '../components/Main/4_Horario';
import Contacts from '../components/Main/5_Contacts';

const mapStateToProps = (state) => {
    return {
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onRouteChange: (text, id) => dispatch(ChangeRoute(text, id))
    }
  }

class MainPage extends Component {

    

    render(){

        return(
            <div className="mainpage-div">
                    <Presentation />
                    <Intro />
                    {/* <Quotes /> */}
                    <NextEvent />
                    <Portfolio/>
                    <Horario />
                    <Contacts />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
