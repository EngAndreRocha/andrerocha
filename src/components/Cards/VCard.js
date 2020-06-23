import React from 'react';
import './Card.css';


import ToggleVisibilityButton from '../Buttons/ToggleVisibility';
import X from '../../images/multiply-1.svg';
import Edit from '../../images/edit-1.svg';
import ImageInput from '../Form/EditPages/0_EditForm_Foto';
import loading_gif from '../../images/loading_gif.svg';

const VCard = ({onRouteChange,onDeleteEvent,onMySubmit,i_index,eventid,image, 
    eventnome, 
    eventbegindate, 
    eventbeginhour, 
    eventenddate,
    eventendhour,
    eventdescription,
    eventtype,
    eventprice,
    eventcapacity}) => {

if( eventid && image &&
    eventnome &&
    eventbegindate &&
    eventbeginhour &&
    eventenddate &&
    eventendhour &&
    eventdescription &&
    eventtype &&
    eventprice &&
    eventcapacity){


    var d1 = new Date(eventbegindate);
    var year1 = d1.getFullYear();
    var month1 = d1.getMonth() + 1;
    var day1 = d1.getDate();

    var strDate1 = 'd/m/Y'
        .replace('d', day1)
        .replace('m', month1)
        .replace('Y', year1);
}
    /* console.log(eventid); */
    return(
            <div className="card-div"/* id="vcard-div" */>
                {/* <a href="#!" className="card-link" title="vcardLink"> */}
                    <img className="card-image" src=/* {image} */{image? (image) : loading_gif} alt="vcard" /* id="vcard-image" */></img>
                    <div className="card-overlay"></div>
                    <div className="card-description" onClick={() => onRouteChange('PageEvent', eventid)}>
                        <span className="card-title">{eventnome}</span>
                        {/* <span className="card-inicio">Inicio</span> */}
                        <span className="card-eventbegindate">{(strDate1) ? (strDate1) : (" ")}</span>
                        {/* <span className="card-eventbeginhour">{(strHour1) ? (strHour1) : (" ")}</span> */}
                        {/* <span className="card-fim">Fim</span>
                        <span className="card-eventenddate">{(strDate2) ? (strDate2) : (" ")}</span>
                        <span className="card-eventendhour">{(strHour2) ? (strHour2) : (" ")}</span> */}
                        <span className="card-eventtype">{eventtype}</span>
                    </div>
                {/* </a>*/}
                <ToggleVisibilityButton imgsrc={X} name={"card_"+i_index+"_delete_button"} index={i_index+i_index+6}><div className="card-span" onClick={() => onDeleteEvent(eventid, 3)}><span>Apagar Evento</span></div></ToggleVisibilityButton>
                <ToggleVisibilityButton imgsrc={Edit} name={"card_"+i_index+"_addImage_button"} index={i_index+i_index+7}>
                    <ImageInput form={'event_number_'+eventid}  maxWeight={200} maxWidth={720} maxHeight={1280} label="Imagem Principal" nome="foto_principal_evento" onSubmit={onMySubmit} initialValues={{id_lojas: 3,/* database */ id_eventos: eventid}}/>
                </ToggleVisibilityButton>
            </div>
    );
}

export default VCard;
