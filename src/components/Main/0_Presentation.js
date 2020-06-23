import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    ChangeRoute,
    Setup_Presentation,
    Update_Presentation_Wallpaper,
    Update_Presentation_Logo
} from '../../actions';

import './0_Presentation.css'; 

import ToggleVisibilityButton from '../../components/Buttons/ToggleVisibility';
import Edit from '../../images/edit-1.svg';
import ImageInput from '../Form/EditPages/0_EditForm_Foto';
import loading_gif from '../../images/loading_gif.svg';

const mapStateToProps = (state) => {
    return {
        presentationdata: state.Presentation.presentationdata,
        isPending: state.Presentation.isPending,
        error: state.Presentation.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onRouteChange: (text, id) => dispatch(ChangeRoute(text, id)),
        onSetup_Presentation: () => dispatch(Setup_Presentation()),
        handle_PresentationWallpaperForm_Submit: values => dispatch(Update_Presentation_Wallpaper(values)),
        handle_PresentationLogoForm_Submit: values => dispatch(Update_Presentation_Logo(values))
    }
}

class Presentation extends Component {

    componentDidMount() {
        this.props.onSetup_Presentation();
    }    
    
    render() {

        const {
            onRouteChange,
            isPending,
            presentationdata/* ,
            error */
        } = this.props;

        return isPending ? <h1> </h1> : (
            <div className="presentation-div" id="presentation-div">
                <div className="presentation-description">
                    <div className="bg-div">
                        <img className="bg-img" src= {(presentationdata.length > 0) ? (presentationdata[0].presentation_background_localurl) : loading_gif} alt="Claricia"></img>
                        <ToggleVisibilityButton imgsrc={Edit} name="wallpaper_input_edit_button" index={0}>
                            {<ImageInput label="Imagem de Fundo"  maxWeight={200} maxWidth={1280} maxHeight={720} nome="wallpaper" onSubmit={this.props.handle_PresentationWallpaperForm_Submit} /* defaultValue={{id_empresas: 1, presentationdata:[], error:""}} */ initialValues={{id_empresas: 1/* database */}}/>}
                        </ToggleVisibilityButton>
                    </div>
                    <div className="overlay"></div>
                    <div className="presentation-logo-div">
                        <img className="presentation-logo" src= {(presentationdata.length > 0) ? (presentationdata[0].logo_url) : loading_gif}  onClick={() => onRouteChange('MainPage',0)} alt="Claricia"></img>
                        <ToggleVisibilityButton imgsrc={Edit} name="logo_input_edit_button" index={1}>
                            {<ImageInput label="Big Logo" maxWeight={200} maxWidth={1280} maxHeight={720} nome="logo" onSubmit={this.props.handle_PresentationLogoForm_Submit} initialValues={{id_empresas: 1 /* database */}}/>}
                        </ToggleVisibilityButton>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
