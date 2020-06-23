import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Setup_Details,
    Update_Details,
    Update_Details_Image
} from '../../actions';

import './5_Contacts.css'; 

/* import FacebookIcon from '../../images/icons/124009-social-networks-logos/svg/facebook.svg';
import InstagramIcon from '../../images/icons/124009-social-networks-logos/svg/instagram.svg'; */
/* import TwitterIcon from '../../images/icons/124009-social-networks-logos/svg/twitter.svg';
import PinterestIcon from '../../images/icons/124009-social-networks-logos/svg/pinterest.svg';
import YoutubeIcon from '../../images/icons/124009-social-networks-logos/svg/youtube.svg';
import VineIcon from '../../images/icons/124009-social-networks-logos/svg/vine.svg';
import LinkedInIcon from '../../images/icons/124009-social-networks-logos/svg/linkedin.svg'; */
/* import mbway_icon from '../../images/icons/mbway_icon.png'; */
/*<div>Icons made by <a href="#!"href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="#!"href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="#!"href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
/* import cash from '../../images/icons/1086732-banking/svg/028-cash.svg';
import debitcard from '../../images/icons/MultiBanco.png';
import Logo from '../../images/Claricia/logo/claricia_logo_black.svg' */

import ToggleVisibilityButton from '../../components/Buttons/ToggleVisibility';
import Edit from '../../images/edit-1.svg';

import EditFormDetalhes from '../Form/EditPages/6_EditForm_Detalhes';
import ImageInput from '../Form/EditPages/0_EditForm_Foto';
import loading_gif from '../../images/loading_gif.svg';
/* 
import EditFormRedesSociais from '../Form/EditPages/7_EditForm_RedesSociais';
import EditFormTiposPagamento from '../Form/EditPages/8_EditForm_TiposPagamento'; */

import Metodos from '../Misc/Metodos';
import Redes from '../Misc/Redes';

const mapStateToProps = (state) => {
    return {
        contactsdata: state.Details.contactsdata,
        isPending: state.Details.isContactsPending,
        error: state.Details.Contactserror,
        metodosdata: state.Details.metodosdata,
        isPending_metodosdata: state.Details.isMetodosPending,
        error_metodosdata: state.Details.Metodoserror,
        redesdata: state.Details.redesdata,
        isPending_redesdata: state.Details.isRedesPending,
        error_redesdata: state.Details.Redeserror,
        detailsdata: state.Details.detailsdata,
        isDetailsPending: state.Details.isDetailsPending,
        ErrorDetails: state.Details.ErrorDetails
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSetup_Details: () => dispatch(Setup_Details()),
        handle_DetalhesForm_Submit: values => dispatch(Update_Details(values)),
        handle_DetalhesImageForm_Submit: values => dispatch(Update_Details_Image(values))
    }
}


class Contacts extends Component {

    componentDidMount() {
        this.props.onSetup_Details();
    }
    render() {

        const {
            /* isPending,
            error, */
            contactsdata,
            metodosdata,
            isPending_metodosdata,
            /* error_metodosdata, */
            redesdata,
            isPending_redesdata/* ,
            error_redesdata */
        } = this.props;

    return (isPending_metodosdata && isPending_redesdata) ? <h1> </h1> : (
            <div className="contacts-div" id="contacts-div">
                <div className="contacts-description">
                    <div className="contact-text-div">
                        <div className="contact-text">
                            <div className="intro-contactos"><h1>Entre em contato connosco!</h1></div>
                            {/* Nome, Morada exacta, dias laborais, patrocinadores, email, contatos telefonicos, redes sociais, capacidade máxima, tipo de pagamentos disponiveis,  */}
                            <div className="logo-div">
                                <div className="logo"><img className="small-logo" src={(contactsdata.length > 0) ? (contactsdata[0].small_logo_url) : loading_gif} alt="Claricia"></img></div>
                                <ToggleVisibilityButton imgsrc={Edit} name="details_input_edit_button" index={5}> <ImageInput label="Logo Pequeno" maxWeight={200} maxWidth={1280} maxHeight={720} nome="small_logo" onSubmit={this.props.handle_DetalhesImageForm_Submit} /* defaultValue={{id_empresas: 1, presentationdata:[], error:""}} */ initialValues={{id_loja: 3, small_logo: (contactsdata.length > 0) ? (contactsdata[0].small_logo_url) : (" ")}}/></ToggleVisibilityButton>
                            </div>                       {/* Put in prop form */}
                            <div className="detalhes">
                                <div className="morada">
                                    <div className="arteria">
                                        <span className="tipo_arteria" id="tipo-arteria">{(contactsdata.length > 0) ? (contactsdata[0].tipo_arteria) : (" ")}</span>
                                        <div className="nome_arteria"><span id="nome-arteria">{(contactsdata.length > 0) ? (contactsdata[0].nome_arteria) : (" ")}</span></div>
                                    </div>
                                    <div className="identificacao_porta"><span id="identificacao-da-porta-arteria">{(contactsdata.length > 0) ? "Nº"+(contactsdata[0].idnt_porta) : (" ")}</span></div>
                                    <div className="identificacao_alojamento"><span id="identificacao-do-alojamento-arteria">{(contactsdata.length > 0) ? (contactsdata[0].idnt_alojamento) : (" ")}</span></div>
                                    <div className="referencia_auxiliar"><span id="freguesia">{(contactsdata.length > 0) ? (contactsdata[0].ref_aux) : (" ")}</span></div>
                                    <div className="localidade"><span id="concelho">{(contactsdata.length > 0) ? (contactsdata[0].localidade) : (" ")}</span></div>
                                    <div className="codigo_postal">
                                        <div className="numero_postal">
                                        <div className="postal1">
                                            <span id="codigopostal">{(contactsdata.length > 0) ? (contactsdata[0].postal_1)+'-' : ("")}</span>
                                        </div>
                                        <div className="postal2">
                                            <span id="codigopostal">{(contactsdata.length > 0) ? (contactsdata[0].postal_2) : (" ")}</span>
                                        </div>
                                        </div>
                                        <div className="designacao_postal"><span id="distrito">{(contactsdata.length > 0) ? (contactsdata[0].design_postal) : (" ")}</span></div>
                                    </div>
                                    <div className="coordenadas">
                                        <span className="latitude">{(contactsdata.length > 0) ? (contactsdata[0].lat)+' , ' : ("")}</span>
                                        <span className="longitude">{(contactsdata.length > 0) ? (contactsdata[0].lon) : (" ")}</span>
                                    </div>
                                </div>
                                <div className="email"><span>{(contactsdata.length > 0) ? (contactsdata[0].email) : (" ")}</span></div>                              {/* Put in prop form */}
                                <div className="telefones">
                                    <div className="referencia">
                                        <span>{(contactsdata.length > 0) ? (contactsdata[0].contato) : (" ")}</span>
                                    </div>
                                </div>                          {/* Put in prop form */}
                                <div className="capacidade"><span>{(contactsdata.length > 0) ? (contactsdata[0].capacidade)+' Pessoas' : ("")}</span></div> 
                            </div>
                            {/* <div className="patrocinadores"><span></span></div> */}                     {/* Put in prop form */}
                            <div className="redes">
                                {(!isPending_redesdata) ? <Redes redesdata={redesdata}/> : ""}
                            </div>                              {/* Put in prop form */}
                            <div className="pagamentos">
                                {(!isPending_metodosdata) ? <Metodos metodosdata={metodosdata}/> : ""}
                            </div>                         {/* Put in prop form */}
                            
                        </div>
                        <ToggleVisibilityButton imgsrc={Edit} name="details_image_input_edit_button" index={6}> {/* SEPARATE IMAGE INPUT FROM THE REST */}
                            <EditFormDetalhes onSubmit={this.props.handle_DetalhesForm_Submit} 
                                initialValues={{
                                    id_loja: 3,
                                    maplink: (contactsdata.length > 0) ? (contactsdata[0].src_map) : (" "),
                                    tipo_arteria: (contactsdata.length > 0) ? (contactsdata[0].tipo_arteria) : (" "),
                                    nome_arteria: (contactsdata.length > 0) ? (contactsdata[0].nome_arteria) : (" "),
                                    numero_porta: (contactsdata.length > 0) ? (contactsdata[0].idnt_porta) : (0),
                                    identificacao_alojamento: (contactsdata.length > 0) ? (contactsdata[0].idnt_alojamento) : (" "),
                                    referencia_auxiliar: (contactsdata.length > 0) ? (contactsdata[0].ref_aux) : (" "),
                                    localidade: (contactsdata.length > 0) ? (contactsdata[0].localidade) : (" "),
                                    latitude: (contactsdata.length > 0) ? (contactsdata[0].lat) : (0),
                                    longitude: (contactsdata.length > 0) ? (contactsdata[0].lon) : (0),
                                    numero_postal_primeiros: (contactsdata.length > 0) ? (contactsdata[0].postal_1) : (0),
                                    numero_postal_segundos: (contactsdata.length > 0) ? (contactsdata[0].postal_2) : (0),
                                    designacao_postal: (contactsdata.length > 0) ? (contactsdata[0].design_postal) : (" "),
                                    capacidade_total: (contactsdata.length > 0) ? (contactsdata[0].capacidade) : (0),
                                    email: (contactsdata.length > 0) ? (contactsdata[0].email) : (" "),
                                    contato: (contactsdata.length > 0) ? (contactsdata[0].contato) : (0),
                                    mbway: false,
                                    money: false,
                                    debitcard: false,
                                    redes:[{}]
                                }}
                            />
                        </ToggleVisibilityButton>
                    </div>
                    {/*  Map with location information, numbers, so on and so forth */}
                    {/*MAP*/}
                    <div className="map">
                        {<iframe title="my_map" src={(contactsdata.length > 0) ? (contactsdata[0].src_map) : loading_gif} frameBorder="0" allowFullScreen=""></iframe>}
                        {/* <iframe title="my_map" src="https://www.openstreetmap.org/export/embed.html?bbox=-8.447756767272951%2C41.63452967701279%2C-8.376088142395021%2C41.66383940927255&amp;layer=mapnik&amp;marker=41.64918620999604%2C-8.411922454833984"></iframe> */}
                    </div>
                </div>
            </div>
    );
}

}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

