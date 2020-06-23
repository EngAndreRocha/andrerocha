import React from 'react';
import './Card.css';
import VCard from './VCard';
/* import example_image from '../../images/Claricia/vertical/11.JPG'; */
/*{(props.vcarddata.length > 0) ? (props.vcarddata[0].foto_principal_localurl) : (" ")} */

const VCardGallery = ({onRouteChange, onDeleteEvent,onMySubmit, vcarddata}) => {

        const cardComponent = vcarddata.map((card, i) =>{
                return <VCard key={i} image={(vcarddata.length > 0) ? (card.foto_principal_localurl) : (" ")} 
                eventnome={(vcarddata.length > 0) ? (card.nome) : (" ")} 
                eventbegindate={(vcarddata.length > 0) ? (card.data_inicio) : (" ")}
                eventbeginhour={(vcarddata.length > 0) ? (card.hora_inicio) : (" ")}
                eventenddate={(vcarddata.length > 0) ? (card.data_fim) : (" ")}
                eventendhour={(vcarddata.length > 0) ? (card.hora_fim) : (" ")}
                eventdescription={(vcarddata.length > 0) ? (card.descricao) : (" ")}
                eventtype={(vcarddata.length > 0) ? (card.tipo) : (" ")}
                eventprice={(vcarddata.length > 0) ? (card.preco) : (" ")}
                eventcapacity={(vcarddata.length > 0) ? (card.capacidade) : (" ")}
                eventid={(vcarddata.length > 0) ? (card.id_eventos) : (" ")}
                onRouteChange = {onRouteChange}
                onDeleteEvent = {onDeleteEvent}
                onMySubmit={onMySubmit}
                i_index={i}
                />;
        });

    return(
        <div className="cardset-content">
            <div className="cardset-div" id="vcardgallery-div">
                {cardComponent}
            </div>
        </div>
    );
}

export default VCardGallery;
