import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Setup_Intro,
    Update_Intro
} from '../../actions';

import './1_Intro.css'; 

import ToggleVisibilityButton from '../../components/Buttons/ToggleVisibility';
import Edit from '../../images/edit-1.svg';

import EditFormIntro from '../Form/EditPages/1_EditFormIntro';
/* import showResults from "../Form/showResults"; */

const mapStateToProps = (state) => {
    return {
        introdata: state.Intro.introdata,
        isPending: state.Intro.isPending,
        error: state.Intro.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSetup_Intro: () => dispatch(Setup_Intro()),
        handle_IntroForm_Submit: values => dispatch(Update_Intro(values)),
    }
}

class Intro extends Component {

    componentDidMount() {
        this.props.onSetup_Intro();
    }

    render() {

        const {
            introdata,
            isPending
            /*error */
        } = this.props;

    return isPending ? <h1> </h1> : (
            <div className="intro-div" id="intro-div">
                <div className="intro-description">
                    <h2 className="intro-title">{(introdata.length > 0) ? (introdata[0].intro_titulo) : (" ")}</h2>
                    <p className="intro-description">{(introdata.length > 0) ? (introdata[0].intro_descricao) : (" ")}</p>
                </div>
                <ToggleVisibilityButton imgsrc={Edit} name="intro_input_edit_button" index={2}>
                    <EditFormIntro onSubmit={this.props.handle_IntroForm_Submit} 
                    initialValues={{id_empresas: 1,/* database */titulo: (introdata.length > 0) ? (introdata[0].intro_titulo) : (" "), descricao: (introdata.length > 0) ? (introdata[0].intro_descricao) : (" ")}}/>
                </ToggleVisibilityButton>
            </div>
    );
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
