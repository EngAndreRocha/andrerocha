import React from 'react';
import './Card.css';
import CardDetailsPosts from './CardDetailsPosts';

import ToggleVisibilityButton from '../Buttons/ToggleVisibility'
import Edit from '../../images/edit-1.svg'
import EditFormPosts from '../Form/EditPages/14_EditForm_Posts'

/* 
01. Use color to create energy, elicit a mood and attract the eye.
02. Experiment with typography
03. Create visual hierarchy
04. Use negative or white space to form a clever composition
05. Remove unnecessary elements. Say more with less.
06. Create a point of focus
07. Use shapes to create visual interest
08. Be clever with your composition
09. Play with layering to create depth and dimension
10. Emphasize elements to create energy and drama.
11. Take the viewer’s focus on a journey with a clever perspective
12. Don’t hesitate to use humor
13. Ensure your composition is balanced
14. Use photos to lend credibility to your poster
15. Use creative illustrations
16. Embrace the odd and the unusual
17. Ensure all of your graphic elements flow together
18. Make dense information legible
19. Pay attention to formatting and size
20. Design your poster to evoke emotion. This will make people more likely to share and engage with it.
21. Create consistent templates to use for multiple events
22. Design for your audience
23. Play with contrast for a more interesting composition
24. Experiment with different graphic elements like colors and fonts
25. Once you know the rules, push the limits and break them


*/

const CardDetails = ({eventphotosdata, eventdata,onDeletePhoto, onMySubmit,onMySubmit2, id}) => {


    if(eventdata.length > 0){

            var d1 = new Date(eventdata[0].data_inicio);
            var year1 = d1.getFullYear();
            var month1 = d1.getMonth() + 1;
            var day1 = d1.getDate();
        
            var strDate1 = 'd/m/Y'
                .replace('d', day1)
                .replace('m', month1)
                .replace('Y', year1);
                
            var d2 = new Date(eventdata[0].data_fim);
            var year2 = d2.getFullYear();
            var month2 = d2.getMonth() + 1;
            var day2 = d2.getDate();
        
            var strDate2 = 'd/m/Y'
                .replace('d', day2)
                .replace('m', month2)
                .replace('Y', year2);
        
            var strHour1 = (eventdata[0].hora_inicio).substring(0, (eventdata[0].hora_inicio).length - 3);
            var strHour2 = (eventdata[0].hora_fim).substring(0, (eventdata[0].hora_fim).length - 3);
        }

        
        const cardDetailsComponent = eventphotosdata.map((photo, i) =>{
                return (photo.length <= 0)? (<h1> </h1>) :  <CardDetailsPosts 
                key={i}
                id_posts={(eventphotosdata.length > 0) ? (photo.id_posts) : (" ")}
                titulo={(eventphotosdata.length > 0) ? (photo.titulo) : (" ")}
                link={(eventphotosdata.length > 0) ? (photo.link) : (" ")}
                tipo={(eventphotosdata.length > 0) ? (photo.tipo) : (" ")}
                orientation={(eventphotosdata.length > 0) ? (photo.orientation) : (" ")}
                id_loja_fk={(eventphotosdata.length > 0) ? (photo.id_loja_fk) : (" ")}
                id_produto_fk={(eventphotosdata.length > 0) ? (photo.id_produto_fk) : (" ")}
                id_evento_fk={(eventphotosdata.length > 0) ? (photo.id_evento_fk) : (" ")}
                id_cliente_fk={(eventphotosdata.length > 0) ? (photo.id_cliente_fk) : (" ")}
                i_index={i}
                onDeletePhoto={onDeletePhoto}
                onMySubmit={onMySubmit}
                /* id_evento={id} */
            />;
        });
        

        return (eventdata.length <= 0)? (<h1> </h1>) : (
        <div className="carddetails-content">
            <div className="carddetails-div" id="carddetails-div">
                <div className="card-description-expanded">
                    {/* <h1 className="">PageEvent</h1> */}
                    {/* <div  className="card-id-div"><span className="card-id">ID: {id}</span></div> */}
                    {/*  <img className="event-image" src= {(eventdata.length > 0) ? (eventdata[0].foto_principal_localurl) : (" ")} alt="post"></img>
                    <div  className=""><span className="card-image">LINK FOTO PRINCIPAL: {(eventdata.length > 0) ? (eventdata[0].foto_principal_localurl) : (" ")}</span></div> */}
                    <div className="card-type-place-div">
                        <div  className="card-type-div"><span className="card-type">{(eventdata.length > 0) ? (eventdata[0].tipo) : (" ")}</span></div>
                        <div  className="card-placename-div"><span className="card-placename">{(eventdata.length > 0) ? (eventdata[0].nome_local) : (" ")}</span></div>
                    </div>
                    <div className="card-titule-desc-div">
                        <div  className="card-name-div"><span className="card-name">{(eventdata.length > 0) ? (eventdata[0].nome) : (" ")}</span></div>
                        <div className="card-time-div">
                        {/* <span className="card-date">{(strDate1) ? (strDate1) : (" ")}</span><span className="card-hour"> {(strHour1) ? " - "+(strHour1) : (" ")}</span><span className="card-date">{ (strDate2) ? " > "+(strDate2) : (" ")}</span><span className="card-hour"> {(strHour2) ? " - "+(strHour2) : (" ")}</span> */}
                        <span className="card-date">{(strDate1) ? (" ") : (" ")}</span><span className="card-hour"> {(strHour1) ? " - "+(" ") : (" ")}</span><span className="card-date">{ (strDate2) ? " > "+(" ") : (" ")}</span><span className="card-hour"> {(strHour2) ? " - "+(" ") : (" ")}</span>
                            {/* <div  className="card-time-begin-div"><span className="card-date">{(strDate1) ? (strDate1) : (" ")}</span><span className="card-hour"> {(strHour1) ? " - "+(strHour1) : (" ")}</span></div>
                            <div  className="card-time-end-div"><span className="card-date">{(strDate2) ? (strDate2) : (" ")}</span><span className="card-hour"> {(strHour2) ? " - "+(strHour2) : (" ")}</span></div> */}
                        </div>
                        <div  className="card-fulldescription-div"><span className="card-fulldescription">{(eventdata.length > 0) ? (eventdata[0].descricao) : (" ")}</span></div>
                    </div>
                    {/* <div  className="card-price-div"><span className="card-price">{(eventdata.length > 0) ? (eventdata[0].preco) : (" ")}</span></div>
                    <div  className="card-capacity-div"><span className="card-capacity">{(eventdata.length > 0) ? (eventdata[0].capacidade) : (" ")}</span></div> */}
                </div>
                <div className="card-map-div">
                    <iframe title="my_map" src={(eventdata.length > 0) ? (eventdata[0].local_localurl_map) : (" ")} frameBorder="0" allowFullScreen=""></iframe>
                </div>
                <ToggleVisibilityButton imgsrc={Edit} name={"photo_details_add_button"}>
                    {<EditFormPosts label="Adicionar Estrutura Foto" onSubmit={onMySubmit2} initialValues={{id_evento: id, titulo:'', orientation:'', tipo: 'foto'}}/>}
                </ToggleVisibilityButton>
                <div className="image-gallery">
                    {(cardDetailsComponent.length > 0) ? cardDetailsComponent : ("Nenhuma Foto Encontrada!")} 
                </div>
            </div>
        </div>
    );
}

export default CardDetails;



