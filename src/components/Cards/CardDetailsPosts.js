import React from 'react';
import './Card.css';
/* import example_image from '../../images/Claricia/vertical/11.JPG'; */
/*{(props.vcarddata.length > 0) ? (props.vcarddata[0].foto_principal_localurl) : (" ")} */
/* import loading_gif from '../../images/loading_gif.svg'; */

import X from '../../images/multiply-1.svg';
import ToggleVisibilityButton from '../Buttons/ToggleVisibility';
import Edit from '../../images/edit-1.svg';
import ImageInput from '../Form/EditPages/0_EditForm_Foto';

const CardDetailsPosts = ({
    onMySubmit,
    id_posts,
    i_index,
    /* id_evento, */
    onDeletePhoto,
    titulo,
    link,
    orientation,
    tipo,
    id_loja_fk,
    id_produto_fk,
    id_evento_fk,
    id_cliente_fk
}) => {

    return(
        <div className={"carddetailsposts-content-"+orientation}>
            <div className={"carddetailsposts-div-"+orientation} id="carddetailsposts-div">
                <img className={"post-image-"+orientation} src= {link} alt="post"></img>
                <span className="post-title">{titulo}</span>
                <span className="overlay-post"></span>
            </div>
            <ToggleVisibilityButton imgsrc={X} name={"photo_"+i_index+"_delete_button"}><div className="card-span" onClick={() => onDeletePhoto(id_posts, id_evento_fk)}><span>Apagar Foto</span></div></ToggleVisibilityButton>
            <ToggleVisibilityButton imgsrc={Edit} name={"photo_"+i_index+"_add_button"}>
                <ImageInput form={'photo_'+id_posts} maxWeight={200} maxWidth={1300} maxHeight={1300} label="Adicionar Foto" nome="foto_evento" onSubmit={onMySubmit} initialValues={{id_eventos: id_evento_fk, id_posts: id_posts}}/>
            </ToggleVisibilityButton>
        </div>
    );
}

export default CardDetailsPosts;


