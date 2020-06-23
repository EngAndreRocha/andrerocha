
import { 
    CHANGE_SEARCH_FIELD,
    CLICK_BACK_TO_TOP,
    LEFTSIDEBAR_CLOSE,
    RIGHTSIDEBAR_CLOSE,
    CLICK_DROPDOWN,
    CLICK_MENU,
    CLICK_MESSAGES,
    CLICK_SETTINGS,
    CLICK_OUT,
    CHANGEROUTE,
    SEGUNDA_CLICK,
    TERCA_CLICK,
    QUARTA_CLICK,
    QUINTA_CLICK,
    SEXTA_CLICK,
    SABADO_CLICK,
    DOMINGO_CLICK,
    ACCORDION_SEGUNDA_CLICK,
    ACCORDION_TERCA_CLICK,
    ACCORDION_QUARTA_CLICK,
    ACCORDION_QUINTA_CLICK,
    ACCORDION_SEXTA_CLICK,
    ACCORDION_SABADO_CLICK,
    ACCORDION_DOMINGO_CLICK,
    CYCLESLIDESHOW,
    TOGGLEVISIBILITY,
    ADDTOGGLEVISIBILITY,
    REMOVETOGGLEVISIBILITY,
    REQUEST_PRESENTATION_PENDING,
    REQUEST_PRESENTATION_SUCCESS,
    REQUEST_PRESENTATION_FAILED,
    UPDATE_PRESENTATION_PENDING,
    UPDATE_PRESENTATION_SUCCESS,
    UPDATE_PRESENTATION_FAILED,
    REQUEST_INTRO_PENDING,
    REQUEST_INTRO_SUCCESS,
    REQUEST_INTRO_FAILED,
    UPDATE_INTRO_PENDING,
    UPDATE_INTRO_SUCCESS,
    UPDATE_INTRO_FAILED,
    REQUEST_NEXTEVENT_PENDING,
    REQUEST_NEXTEVENT_SUCCESS,
    REQUEST_NEXTEVENT_FAILED,
    UPDATE_NEXTEVENT_PENDING,
    UPDATE_NEXTEVENT_SUCCESS,
    UPDATE_NEXTEVENT_FAILED,
    REQUEST_QUOTES_PENDING,
    REQUEST_QUOTES_SUCCESS,
    REQUEST_QUOTES_FAILED,
    UPDATE_QUOTES_PENDING,
    UPDATE_QUOTES_SUCCESS,
    UPDATE_QUOTES_FAILED,
    REQUEST_PORTFOLIO_PENDING,
    REQUEST_PORTFOLIO_SUCCESS,
    REQUEST_PORTFOLIO_FAILED,
    UPDATE_PORTFOLIO_PENDING,
    UPDATE_PORTFOLIO_SUCCESS,
    UPDATE_PORTFOLIO_FAILED,
    REQUEST_PORTFOLIO_TITLE_PENDING,
    REQUEST_PORTFOLIO_TITLE_SUCCESS,
    REQUEST_PORTFOLIO_TITLE_FAILED,
    UPDATE_PORTFOLIO_TITLE_PENDING,
    UPDATE_PORTFOLIO_TITLE_SUCCESS,
    UPDATE_PORTFOLIO_TITLE_FAILED,
    REQUEST_HORARIO_PENDING,
    REQUEST_HORARIO_SUCCESS,
    REQUEST_HORARIO_FAILED,
    UPDATE_HORARIO_PENDING,
    UPDATE_HORARIO_SUCCESS,
    UPDATE_HORARIO_FAILED,
    REQUEST_NOTA_FERIAS_PENDING,
    REQUEST_NOTA_FERIAS_SUCCESS,
    REQUEST_NOTA_FERIAS_FAILED,
    REQUEST_CONTACTS_PENDING,
    REQUEST_CONTACTS_SUCCESS,
    REQUEST_CONTACTS_FAILED,
    REQUEST_METODOS_PENDING,
    REQUEST_METODOS_SUCCESS,
    REQUEST_METODOS_FAILED,
    REQUEST_REDES_PENDING,
    REQUEST_REDES_SUCCESS,
    REQUEST_REDES_FAILED,
    UPDATE_DETAILS_PENDING,
    UPDATE_DETAILS_SUCCESS,
    UPDATE_DETAILS_FAILED,
    REQUEST_EVENTS_PENDING,
    REQUEST_EVENTS_SUCCESS,
    REQUEST_EVENTS_FAILED,
    UPDATE_EVENTS_PENDING,
    UPDATE_EVENTS_SUCCESS,
    UPDATE_EVENTS_FAILED,
    REQUEST_EVENTDETAILS_PENDING,
    REQUEST_EVENTDETAILS_SUCCESS,
    REQUEST_EVENTDETAILS_FAILED,
    REQUEST_EVENTPHOTOS_PENDING,
    REQUEST_EVENTPHOTOS_SUCCESS,
    REQUEST_EVENTPHOTOS_FAILED,
    UPDATE_EVENTPHOTOS_PENDING,
    UPDATE_EVENTPHOTOS_SUCCESS,
    UPDATE_EVENTPHOTOS_FAILED,
    DELETE_PHOTO_PENDING,
    DELETE_PHOTO_SUCCESS,
    DELETE_PHOTO_FAILED,
    SIGNIN_PENDING,
    SIGNIN_SUCCESS,
    SIGNIN_FAILED,
    SIGNOUT_PENDING,
    SIGNOUT_SUCCESS,
    SIGNOUT_FAILED
} from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const OpenSideBars = () => ({
    type: CLICK_BACK_TO_TOP
})

export const Close_LeftSideBar = () => ({
    type: LEFTSIDEBAR_CLOSE
})

export const Close_RightSideBar = () => ({
    type: RIGHTSIDEBAR_CLOSE
})

export const Dropdown_Click = () => ({
    type: CLICK_DROPDOWN
})

export const Menu_Click = () => ({
    type: CLICK_MENU
})

export const Messages_Click = () => ({
    type: CLICK_MESSAGES
})

export const Settings_Click = () => ({
    type: CLICK_SETTINGS
})

export const CloseDropdowns = () => ({
    type: CLICK_OUT
})

export const ChangeRoute = (text, id_clicked) => ({
    type: CHANGEROUTE,
    payload: { route: text, id: id_clicked }
    /* payload: text */
})

export const Segunda_Click = () => ({
    type: SEGUNDA_CLICK
})

export const Terca_Click = () => ({
    type: TERCA_CLICK
})

export const Quarta_Click = () => ({
    type: QUARTA_CLICK
})

export const Quinta_Click = () => ({
    type: QUINTA_CLICK
})

export const Sexta_Click = () => ({
    type: SEXTA_CLICK
})

export const Sabado_Click = () => ({
    type: SABADO_CLICK
})

export const Domingo_Click = () => ({
    type: DOMINGO_CLICK
})

export const Accordion_Segunda_Click = () => ({
    type: ACCORDION_SEGUNDA_CLICK
})

export const Accordion_Terca_Click = () => ({
    type: ACCORDION_TERCA_CLICK
})

export const Accordion_Quarta_Click = () => ({
    type: ACCORDION_QUARTA_CLICK
})

export const Accordion_Quinta_Click = () => ({
    type: ACCORDION_QUINTA_CLICK
})

export const Accordion_Sexta_Click = () => ({
    type: ACCORDION_SEXTA_CLICK
})

export const Accordion_Sabado_Click = () => ({
    type: ACCORDION_SABADO_CLICK
})

export const Accordion_Domingo_Click = () => ({
    type: ACCORDION_DOMINGO_CLICK
})

export const CycleSlideshow = () => ({
    type: CYCLESLIDESHOW
})

export const ToggleVisibility = (text) => ({
    type: TOGGLEVISIBILITY,
    payload: text
})

export const AddToggleVisibility = (text) => ({
    type: ADDTOGGLEVISIBILITY,
    payload: text
})

export const RemoveToggleVisibility = (text) => ({
    type: REMOVETOGGLEVISIBILITY,
    payload: text
})

export const Setup_Presentation = () => (dispatch) => {
   dispatch({ type: REQUEST_PRESENTATION_PENDING });
   fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/presentation", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "id_empresas": 1 }, null, 2)
    })
   .then(response => response.json())
   .then(data => dispatch({ type: REQUEST_PRESENTATION_SUCCESS, payload: data}))
   .catch(error => dispatch({ type: REQUEST_PRESENTATION_FAILED, payload: error}))
}

export const Update_Presentation_Wallpaper = (values) => (dispatch) => {
    var token = window.localStorage.getItem('claricia_admin_token');
    if(!token) token='';
    dispatch({ type: UPDATE_PRESENTATION_PENDING });
    
    const formData = new FormData();

    for (const key in values) {       
        formData.append(key, values[key]);
    }

    const options = {
        method: 'PUT',
        body: formData,
        headers: {
            'Authorization': 'Bearer' + token
        }
    };

    fetch('http://ec2-23-22-126-120.compute-1.amazonaws.com/presentation/wallpaper', options)
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_PRESENTATION_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_PRESENTATION_FAILED, payload: error}))
 }

 export const Update_Presentation_Logo = (values) => (dispatch) => {
    var token = window.localStorage.getItem('claricia_admin_token');
    if(!token) token='';
    dispatch({ type: UPDATE_PRESENTATION_PENDING });
    
    const formData = new FormData();

    for (const key in values) {       
        formData.append(key, values[key]);
    }

    const options = {
        method: 'PUT',
        body: formData,
        headers: {
            'Authorization': 'Bearer' + token
        }
    };

    fetch('http://ec2-23-22-126-120.compute-1.amazonaws.com/presentation/logo', options)
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_PRESENTATION_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_PRESENTATION_FAILED, payload: error}))
 }

export const Setup_Intro = () => (dispatch) => {
    dispatch({ type: REQUEST_INTRO_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/intro", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "id_empresas": 1 }, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_INTRO_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_INTRO_FAILED, payload: error}))
}

 export const Update_Intro = (values) => (dispatch) => {
    var token = window.localStorage.getItem('claricia_admin_token');
    if(!token) token='';
    dispatch({ type: UPDATE_INTRO_PENDING });
    fetch('http://ec2-23-22-126-120.compute-1.amazonaws.com/intro', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify(values, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_INTRO_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_INTRO_FAILED, payload: error}))
 }

export const Setup_NextEvent = () => (dispatch) => {
    dispatch({ type: REQUEST_NEXTEVENT_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/nextevent", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "id_lojas": 3 }, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_NEXTEVENT_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_NEXTEVENT_FAILED, payload: error}))
 }

 export const Update_NextEvent = (values) => (dispatch) => { //probably remove
    dispatch({ type: UPDATE_NEXTEVENT_PENDING });
    fetch('http://ec2-23-22-126-120.compute-1.amazonaws.com/test', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_NEXTEVENT_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_NEXTEVENT_FAILED, payload: error}))
 }

 export const Setup_Quotes = () => (dispatch) => {
    dispatch({ type: REQUEST_QUOTES_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/quotes", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "id_empresas": 1 }, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_QUOTES_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_QUOTES_FAILED, payload: error}))
 }

 export const Update_Quotes = (values) => (dispatch) => {
    dispatch({ type: UPDATE_QUOTES_PENDING });
    fetch('http://ec2-23-22-126-120.compute-1.amazonaws.com/test', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_QUOTES_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_QUOTES_FAILED, payload: error}))
 }

 export const Setup_Portfolio = () => (dispatch) => {
    dispatch({ type: REQUEST_PORTFOLIO_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/portfolio", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "id_lojas": 3 }, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_PORTFOLIO_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_PORTFOLIO_FAILED, payload: error}))
 }

 export const Setup_Portfolio_Title = () => (dispatch) => {
    dispatch({ type: REQUEST_PORTFOLIO_TITLE_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/portfolio/title", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "id_lojas": 3 }, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_PORTFOLIO_TITLE_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_PORTFOLIO_TITLE_FAILED, payload: error}))
 }

 export const Update_Portfolio_And_Title = (values) => (dispatch) => { //probably remove
    dispatch({ type: UPDATE_PORTFOLIO_PENDING });
    fetch('http://ec2-23-22-126-120.compute-1.amazonaws.com/test', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_PORTFOLIO_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_PORTFOLIO_FAILED, payload: error}));
    dispatch({ type: UPDATE_PORTFOLIO_TITLE_PENDING });
    fetch('http://ec2-23-22-126-120.compute-1.amazonaws.com/test', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_PORTFOLIO_TITLE_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_PORTFOLIO_TITLE_FAILED, payload: error}))
 }

 export const Setup_Horario = () => (dispatch) => {
    dispatch({ type: REQUEST_HORARIO_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/horario", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "id_lojas": 3 }, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_HORARIO_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_HORARIO_FAILED, payload: error}))
 }

 export const Setup_Nota_Ferias = () => (dispatch) => {
    dispatch({ type: REQUEST_NOTA_FERIAS_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/notas", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "id_lojas": 3 }, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_NOTA_FERIAS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_NOTA_FERIAS_FAILED, payload: error}))
 }

 export const Update_Horario_Nota = (values) => (dispatch) => { //remove nota function name and adapt everywhere else...
    var token = window.localStorage.getItem('claricia_admin_token');
    if(!token) token='';
    dispatch({ type: UPDATE_HORARIO_PENDING });
    fetch('http://ec2-23-22-126-120.compute-1.amazonaws.com/horario', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify(values, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_HORARIO_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_HORARIO_FAILED, payload: error}));
 }

 export const Setup_Details = () => (dispatch) => {
    dispatch({ type: REQUEST_CONTACTS_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/contacts", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "id_lojas": 3 }, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_CONTACTS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_CONTACTS_FAILED, payload: error}));
    dispatch({ type: REQUEST_METODOS_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/metodos_pagamento", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "id_lojas": 3 }, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_METODOS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_METODOS_FAILED, payload: error}));
    dispatch({ type: REQUEST_REDES_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/redes", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "id_lojas": 3 }, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_REDES_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_REDES_FAILED, payload: error}))
 }

export const Update_Details = (values) => (dispatch) => {
    var token = window.localStorage.getItem('claricia_admin_token');
    if(!token) token='';
    dispatch({ type: UPDATE_DETAILS_PENDING });
    fetch('http://ec2-23-22-126-120.compute-1.amazonaws.com/detalhes', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify(values, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_DETAILS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_DETAILS_FAILED, payload: error}))
}

export const Update_Details_Image = (values) => (dispatch) => {
    var token = window.localStorage.getItem('claricia_admin_token');
    if(!token) token='';
    dispatch({ type: UPDATE_DETAILS_PENDING });
    
    const formData = new FormData();

    for (const key in values) {       
        formData.append(key, values[key]);
    }

    const options = {
        method: 'PUT',
        body: formData,
        headers: {
            'Authorization': 'Bearer' + token
        }
    };

    fetch('http://ec2-23-22-126-120.compute-1.amazonaws.com/imagem_detalhes', options)
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_DETAILS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_DETAILS_FAILED, payload: error}))
}

export const Setup_Events = () => (dispatch) => {
    dispatch({ type: REQUEST_EVENTS_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/events", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ "id_lojas": 3 }, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_EVENTS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_EVENTS_FAILED, payload: error}))    
}

export const Update_Events = (values) => (dispatch) => { //SEPARATE IMAGE INPUT FROM THE REST
    var token = window.localStorage.getItem('claricia_admin_token');
    if(!token) token='';
    dispatch({ type: UPDATE_EVENTS_PENDING });
    fetch('http://ec2-23-22-126-120.compute-1.amazonaws.com/evento', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify(values, null, 2)
    })
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_EVENTS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_EVENTS_FAILED, payload: error}))
}

export const Setup_Event = (values) => (dispatch) => {
    dispatch({ type: REQUEST_EVENTDETAILS_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/event/detalhes", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({values}, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_EVENTDETAILS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_EVENTDETAILS_FAILED, payload: error}));
    dispatch({ type: REQUEST_EVENTPHOTOS_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/event/fotos", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({values}, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_EVENTPHOTOS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_EVENTPHOTOS_FAILED, payload: error}))
}

export const Delete_Event = (id_clicked, number) => (dispatch) => {
    dispatch({ type: UPDATE_EVENTS_PENDING });
    var token = window.localStorage.getItem('claricia_admin_token');
    if(!token) token='';
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/event/delete", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify({id: id_clicked, id_lojas: number}, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_EVENTS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_EVENTS_FAILED, payload: error}));
}

export const Update_Event_Image = (values) => (dispatch) => {
    var token = window.localStorage.getItem('claricia_admin_token');
    if(!token) token='';
    dispatch({ type: UPDATE_EVENTS_PENDING });
    
    const formData = new FormData();

    for (const key in values) {       
        formData.append(key, values[key]);
    }

    const options = {
        method: 'PUT',
        body: formData,
        headers: {
            'Authorization': 'Bearer' + token
        }
    };
    
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/event/add_main_image",options)
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_EVENTS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_EVENTS_FAILED, payload: error}));
}

export const Add_Event_Image = (values) => (dispatch) => {
    var token = window.localStorage.getItem('claricia_admin_token');
    if(!token) token='';
    dispatch({ type: UPDATE_EVENTPHOTOS_PENDING });
    
    const formData = new FormData();

    for (const key in values) {       
        formData.append(key, values[key]);
    }

    const options = {
        method: 'PUT',
        body: formData,
        headers: {
            'Authorization': 'Bearer' + token
        }
    };
    
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/event/add_event_image",options)
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_EVENTPHOTOS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_EVENTPHOTOS_FAILED, payload: error}));
}

export const Add_Event_ImageDetails = (values) => (dispatch) => {
    var token = window.localStorage.getItem('claricia_admin_token');
    if(!token) token='';
    dispatch({ type: UPDATE_EVENTPHOTOS_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/event/add_event_image_details",{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify(values, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_EVENTPHOTOS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: UPDATE_EVENTPHOTOS_FAILED, payload: error}));
}

export const DeletePhoto = (id_clicked, id_cliente_fk) => (dispatch) => {
    var token = window.localStorage.getItem('claricia_admin_token');
    if(!token) token='';
    dispatch({ type: DELETE_PHOTO_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/photo/delete", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify({id: id_clicked, id_evento: id_cliente_fk}, null, 2)
      })
    .then(response => response.json())
    .then(data => dispatch({ type: DELETE_PHOTO_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: DELETE_PHOTO_FAILED, payload: error}));
}

export const SignInAdmin = (values) => (dispatch) => {
    var token = window.localStorage.getItem('claricia_admin_token');
        if(!token) token='';
    dispatch({ type: SIGNIN_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/admin/signin",{
        method: 'POST', //if changes happen in redis, do i need to have it in the put method?
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify(values, null, 2)
    })
    .then(response => response.json())
    .then(data => {
        if(Object.keys(data).length > 0 && data.userId && data.success === 'true'){
            if(!data.checking)window.localStorage.setItem('claricia_admin_token', data.token);
            return{isAdminSignIn: true};
        }else{
            console.log(data);
            return{isAdminSignIn: false};
        }
    })
    .then(data => dispatch({ type: SIGNIN_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: SIGNIN_FAILED, payload: error}));
}

export const SignOutAdmin = (values) => (dispatch) => {
    var token = window.localStorage.getItem('claricia_admin_token');
        if(!token) token='';
    dispatch({ type: SIGNOUT_PENDING });
    fetch("http://ec2-23-22-126-120.compute-1.amazonaws.com/admin/signout",{
        method: 'POST', //if changes happen in redis, do i need to have it in the put method?
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify(values, null, 2)
    })
    .then(response => response.json())
    .then(() => {
        window.localStorage.removeItem('claricia_admin_token');
        return {isAdminSignIn: false};
    })
    .then(data => dispatch({ type: SIGNOUT_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: SIGNOUT_FAILED, payload: error}));
}
