import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Setup_NextEvent,
    Update_NextEvent
} from '../../actions';

import './2_NextEvent.css';
import Banner from '../Banners/Banner'
import loading_gif from '../../images/loading_gif.svg';

/* import ToggleVisibilityButton from '../../components/Buttons/ToggleVisibility';
import Edit from '../../images/edit-1.svg'; */

const mapStateToProps = (state) => {
    return {
        nexteventdata: state.NextEvent.nexteventdata,
        isPending: state.NextEvent.isPending,
        error: state.NextEvent.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSetup_NextEvent: () => dispatch(Setup_NextEvent()),
        handle_PresentationForm_Submit: values => dispatch(Update_NextEvent(values))
    }
}

class NextEvent extends Component {

    componentDidMount() {
        this.props.onSetup_NextEvent();
    }

    render() {

        const {
            isPending,
            nexteventdata/* ,
            error */
        } = this.props;

    return isPending ? <h1> </h1> : (
        <div className="nextevent-div" id="nextevent-div">
            <div className="nextevent-description">
                <Banner     image={(nexteventdata.length > 0) ? (nexteventdata[0].foto_principal_localurl) : loading_gif} 
                            eventnome={(nexteventdata.length > 0) ? (nexteventdata[0].nome) : (" ")} 
                            eventbegindate={(nexteventdata.length > 0) ? (nexteventdata[0].data_inicio) : (" ")}
                            eventbeginhour={(nexteventdata.length > 0) ? (nexteventdata[0].hora_inicio) : (" ")}
                            eventenddate={(nexteventdata.length > 0) ? (nexteventdata[0].data_fim) : (" ")}
                            eventendhour={(nexteventdata.length > 0) ? (nexteventdata[0].hora_fim) : (" ")}
                            eventdescription={(nexteventdata.length > 0) ? (nexteventdata[0].descricao) : (" ")}
                            eventtype={(nexteventdata.length > 0) ? (nexteventdata[0].tipo) : (" ")}
                            eventprice={(nexteventdata.length > 0) ? (nexteventdata[0].preco) : (" ")}
                            eventcapacity={(nexteventdata.length > 0) ? (nexteventdata[0].capacidade) : (" ")}
                            eventlocal={(nexteventdata.length > 0) ? (nexteventdata[0].nome_local) : (" ")}
                /> {/* Carregar proximo evento (foto principal, nome, data, hora, local, preço?, ...) */}
            </div>
        </div>
    );
}

}

export default connect(mapStateToProps, mapDispatchToProps)(NextEvent);
