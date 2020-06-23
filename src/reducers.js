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
    /* UPDATE_NOTA_FERIAS_PENDING,
    UPDATE_NOTA_FERIAS_SUCCESS,
    UPDATE_NOTA_FERIAS_FAILED, */
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

/*
JSON.parse() When receiving data from a web server, the data is always a string.
Parse the data with JSON.parse(), and the data becomes a JavaScript object.

JSON.stringify() When sending data to a web server, the data has to be a string.
Convert a JavaScript object into a string with JSON.stringify().
*/


const initialSearchState = {
    searchField: ''
}

export const searchEntity = (state = initialSearchState, action = {}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload} ); //Same as : return { ...state, {searchField: action.payload}}
        default:
            return state;
    }
}


const initialRouteState = {
    route: '',
    id: 0
}

export const ChangeRoute = (state = initialRouteState, action = {}) => {
    switch(action.type){
        case CHANGEROUTE:
            return Object.assign({}, state, {route: action.payload.route, id: action.payload.id});
        default:
            return state;
    }
}

//######################

const initialSideBarsState = {
    is_RightSideBar_Hidden: true,
    is_LeftSideBar_Hidden: true
}

export const SideBars = (state = initialSideBarsState, action = {}) => {
    switch(action.type){
        case CLICK_BACK_TO_TOP:
            return Object.assign({}, state, {is_RightSideBar_Hidden: !state.is_RightSideBar_Hidden, is_LeftSideBar_Hidden: !state.is_LeftSideBar_Hidden});
        case LEFTSIDEBAR_CLOSE:
            return Object.assign({}, state, {is_LeftSideBar_Hidden: true});
        case RIGHTSIDEBAR_CLOSE:
            return Object.assign({}, state, {is_RightSideBar_Hidden: true});
        default:
            return state;
    }
}

const initialNavBarState = {
    is_DropDownList_Hidden: true,
    is_MenuList_Hidden: true,
    is_MessagesList_Hidden: true,
    is_SettingsList_Hidden: true
}

export const NavBar = (state = initialNavBarState, action = {}) => {
    switch(action.type){
        case CLICK_DROPDOWN:
            return Object.assign({}, state, {is_DropDownList_Hidden: !state.is_DropDownList_Hidden});
        case CLICK_MENU:
            return Object.assign({}, state, {is_MenuList_Hidden: !state.is_MenuList_Hidden});
        case CLICK_MESSAGES:
            return Object.assign({}, state, {is_MessagesList_Hidden: !state.is_MessagesList_Hidden});
        case CLICK_SETTINGS:
            return Object.assign({}, state, {is_SettingsList_Hidden: !state.is_SettingsList_Hidden});
        case CLICK_OUT:
            return Object.assign({}, state, {
                is_DropDownList_Hidden: true,
                is_MenuList_Hidden: true,
                is_MessagesList_Hidden: true,
                is_SettingsList_Hidden: true
            });
        default:
            return state;
    }
}

const initialToggleWeekDay = {
    is_Accordion_Segunda_Hidden: true,
    is_Accordion_Terca_Hidden: true,
    is_Accordion_Quarta_Hidden: true,
    is_Accordion_Quinta_Hidden: true,
    is_Accordion_Sexta_Hidden: true,
    is_Accordion_Sabado_Hidden: true,
    is_Accordion_Domingo_Hidden: true,
    is_Panel_Segunda_Hidden: true,
    is_Panel_Terca_Hidden: true,
    is_Panel_Quarta_Hidden: true,
    is_Panel_Quinta_Hidden: true,
    is_Panel_Sexta_Hidden: true,
    is_Panel_Sabado_Hidden: true,
    is_Panel_Domingo_Hidden: true
}

export const ToggleWeekDay = (state = initialToggleWeekDay, action = {}) => {
    switch(action.type){
        case SEGUNDA_CLICK:
            return Object.assign({}, state, {is_Accordion_Segunda_Hidden: !state.is_Accordion_Segunda_Hidden});
        case TERCA_CLICK:
            return Object.assign({}, state, {is_Accordion_Terca_Hidden: !state.is_Accordion_Terca_Hidden});
        case QUARTA_CLICK:
            return Object.assign({}, state, {is_Accordion_Quarta_Hidden: !state.is_Accordion_Quarta_Hidden});
        case QUINTA_CLICK:
            return Object.assign({}, state, {is_Accordion_Quinta_Hidden: !state.is_Accordion_Quinta_Hidden});
        case SEXTA_CLICK:
            return Object.assign({}, state, {is_Accordion_Sexta_Hidden: !state.is_Accordion_Sexta_Hidden});
        case SABADO_CLICK:
            return Object.assign({}, state, {is_Accordion_Sabado_Hidden: !state.is_Accordion_Sabado_Hidden});
        case DOMINGO_CLICK:
            return Object.assign({}, state, {is_Accordion_Domingo_Hidden: !state.is_Accordion_Domingo_Hidden});
        case ACCORDION_SEGUNDA_CLICK:
            return Object.assign({}, state, {is_Panel_Segunda_Hidden: !state.is_Panel_Segunda_Hidden});
        case ACCORDION_TERCA_CLICK:
            return Object.assign({}, state, {is_Panel_Terca_Hidden: !state.is_Panel_Terca_Hidden});
        case ACCORDION_QUARTA_CLICK:
            return Object.assign({}, state, {is_Panel_Quarta_Hidden: !state.is_Panel_Quarta_Hidden});
        case ACCORDION_QUINTA_CLICK:
            return Object.assign({}, state, {is_Panel_Quinta_Hidden: !state.is_Panel_Quinta_Hidden});
        case ACCORDION_SEXTA_CLICK:
            return Object.assign({}, state, {is_Panel_Sexta_Hidden: !state.is_Panel_Sexta_Hidden});
        case ACCORDION_SABADO_CLICK:
            return Object.assign({}, state, {is_Panel_Sabado_Hidden: !state.is_Panel_Sabado_Hidden});
        case ACCORDION_DOMINGO_CLICK:
            return Object.assign({}, state, {is_Panel_Domingo_Hidden: !state.is_Panel_Domingo_Hidden});
        
        default:
            return state;
    }
}

const initialCycleSlideshow = {
    img_list: [],
    quote_list: ["Patricia Gonçalves","Clara Gonçalves","Lurdes Gonçalves","Domingos Gonçalves","Bem Vindos","à","Clarícia"],
    img_index: 0,
    quote_index: 0
}

export const CycleSlideshow = (state = initialCycleSlideshow, action = {}) => {
    switch(action.type){
        case CYCLESLIDESHOW:
        {
            if(state.img_index < 6)
                return Object.assign({}, state, {img_index: state.img_index+1, quote_index:state.quote_index+1});
            else
                return Object.assign({}, state, {img_index: 0, quote_index:0});
        }
        default:
            return state;
    }
}

const initialToggleVisibility = {
    is_Hidden: [], /* Maybe change into an array of objects with name of entity and its visibility state. */
}

export const ToggleVisibility = (state = initialToggleVisibility, action = {}) => {
    switch(action.type){
        case TOGGLEVISIBILITY:
            return Object.assign({}, state, {
                is_Hidden: state.is_Hidden.map((is_Hidden_Element) => {
                    if (is_Hidden_Element.name === action.payload) {
                        is_Hidden_Element.value = (!is_Hidden_Element.value);
                        return is_Hidden_Element;
                    }
                    else {
                        return is_Hidden_Element;
                    }
                })
            })
        case ADDTOGGLEVISIBILITY:
            return Object.assign({}, state, {is_Hidden: [...state.is_Hidden,{name: action.payload,value: true}]})
        case REMOVETOGGLEVISIBILITY:
            let newArray = state.is_Hidden.filter(element => element.name !== action.payload)/* state.is_Hidden.slice();
            newArray.splice(-1,1); */
            return Object.assign({}, state, {is_Hidden: newArray});
        default:
            return state;
    }
}

const initialPresentationState = {
    isPending: false,
    presentationdata: [],
    error: ""
}

export const Presentation = (state = initialPresentationState, action={}) => {
    switch(action.type){
        case REQUEST_PRESENTATION_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_PRESENTATION_SUCCESS:
            return Object.assign({}, state, {presentationdata: action.payload, isPending: false});
        case REQUEST_PRESENTATION_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        case UPDATE_PRESENTATION_PENDING:
            return Object.assign({}, state, {isPending: true});
        case UPDATE_PRESENTATION_SUCCESS:
            return Object.assign({}, state, {presentationdata: action.payload, isPending: false});
        case UPDATE_PRESENTATION_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}

const initialIntroState = {
    isPending: false,
    introdata: [],
    error: ""
}

export const Intro = (state = initialIntroState, action={}) => {
    switch(action.type){
        case REQUEST_INTRO_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_INTRO_SUCCESS:
            return Object.assign({}, state, {introdata: action.payload, isPending: false});
        case REQUEST_INTRO_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        case UPDATE_INTRO_PENDING:
            return Object.assign({}, state, {isPending: true});
        case UPDATE_INTRO_SUCCESS:
            return Object.assign({}, state, {introdata: action.payload, isPending: false});
        case UPDATE_INTRO_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}

const initialNextEventState = {
    isPending: false,
    nexteventdata: [],
    error: ""
}

export const NextEvent = (state = initialNextEventState, action={}) => {
    switch(action.type){
        case REQUEST_NEXTEVENT_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_NEXTEVENT_SUCCESS:
            return Object.assign({}, state, { nexteventdata: action.payload, isPending: false});
        case REQUEST_NEXTEVENT_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        case UPDATE_NEXTEVENT_PENDING:
            return Object.assign({}, state, {isPending: true});
        case UPDATE_NEXTEVENT_SUCCESS:
            return Object.assign({}, state, { nexteventdata: action.payload, isPending: false});
        case UPDATE_NEXTEVENT_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}

const initialQuotesState = {
    isPending: false,
    quotesdata: [],
    error: ""
}

export const Quotes = (state = initialQuotesState, action={}) => {
    switch(action.type){
        case REQUEST_QUOTES_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_QUOTES_SUCCESS:
            return Object.assign({}, state, { quotesdata: action.payload, isPending: false});
        case REQUEST_QUOTES_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        case UPDATE_QUOTES_PENDING:
            return Object.assign({}, state, {isPending: true});
        case UPDATE_QUOTES_SUCCESS:
            return Object.assign({}, state, { quotesdata: action.payload, isPending: false});
        case UPDATE_QUOTES_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}

const initialPortfolioState = {
    isPending: false,
    portfoliodata: [],
    error: ""
}

export const Portfolio = (state = initialPortfolioState, action={}) => {
    switch(action.type){
        case REQUEST_PORTFOLIO_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_PORTFOLIO_SUCCESS:
            return Object.assign({}, state, { portfoliodata: action.payload, isPending: false});
        case REQUEST_PORTFOLIO_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        case UPDATE_PORTFOLIO_PENDING:
            return Object.assign({}, state, {isPending: true});
        case UPDATE_PORTFOLIO_SUCCESS:
            return Object.assign({}, state, { portfoliodata: action.payload, isPending: false});
        case UPDATE_PORTFOLIO_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}

const initialPortfolioTitleState = {
    isPending: false,
    portfolio_title: [],
    error: ""
}

export const Portfolio_Title = (state = initialPortfolioTitleState, action={}) => {
    switch(action.type){
        case REQUEST_PORTFOLIO_TITLE_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_PORTFOLIO_TITLE_SUCCESS:
            return Object.assign({}, state, { portfolio_title: action.payload, isPending: false});
        case REQUEST_PORTFOLIO_TITLE_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        case UPDATE_PORTFOLIO_TITLE_PENDING:
            return Object.assign({}, state, {isPending: true});
        case UPDATE_PORTFOLIO_TITLE_SUCCESS:
            return Object.assign({}, state, { portfolio_title: action.payload, isPending: false});
        case UPDATE_PORTFOLIO_TITLE_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}

const initialHorarioState = {
    isPending: false,
    horariodata: [],
    error: ""
}

export const Horario = (state = initialHorarioState, action={}) => {
    switch(action.type){
        case REQUEST_HORARIO_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_HORARIO_SUCCESS:
            return Object.assign({}, state, { horariodata: action.payload, isPending: false});
        case REQUEST_HORARIO_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        case UPDATE_HORARIO_PENDING:
            return Object.assign({}, state, {isPending: true});
        case UPDATE_HORARIO_SUCCESS:
            return Object.assign({}, state, { horariodata: action.payload, isPending: false});
        case UPDATE_HORARIO_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}

const initialNotaState = {
    isPendig_nota: false,
    notadata: [],
    error_nota: ""
}

export const Nota_Ferias = (state = initialNotaState, action={}) => {
    switch(action.type){
        case REQUEST_NOTA_FERIAS_PENDING:
            return Object.assign({}, state, {isPendig_nota: true});
        case REQUEST_NOTA_FERIAS_SUCCESS:
            return Object.assign({}, state, { notadata: action.payload, isPendig_nota: false});
        case REQUEST_NOTA_FERIAS_FAILED:
            return Object.assign({}, state, {error_nota: action.payload, isPendig_nota: false});
/*      case UPDATE_NOTA_FERIAS_PENDING:
            return Object.assign({}, state, {isPendig_nota: true});
        case UPDATE_NOTA_FERIAS_SUCCESS:
            return Object.assign({}, state, { notadata: action.payload, isPendig_nota: false});
        case UPDATE_NOTA_FERIAS_FAILED:
            return Object.assign({}, state, {error_nota: action.payload, isPendig_nota: false}); */
        default:
            return state;
    }
}

const initialContactsState = {
    isContactsPending: false,
    contactsdata: [],
    Contactserror: "",
    isMetodosPending: false,
    metodosdata: [],
    Metodoserror: "",
    isRedesPending: false,
    redesdata: [],
    Redeserror: "",
    isDetailsPending: false,
    detailsdata: [],
    ErrorDetails: ""
}

export const Details = (state = initialContactsState, action={}) => {
    switch(action.type){
        case REQUEST_CONTACTS_PENDING:
            return Object.assign({}, state, {isContactsPending: true});
        case REQUEST_CONTACTS_SUCCESS:
            return Object.assign({}, state, {contactsdata: action.payload, isContactsPending: false});
        case REQUEST_CONTACTS_FAILED:
            return Object.assign({}, state, {Contactserror: action.payload, isContactsPending: false});
        case REQUEST_METODOS_PENDING:
            return Object.assign({}, state, {isMetodosPending: true});
        case REQUEST_METODOS_SUCCESS:
            return Object.assign({}, state, {metodosdata: action.payload, isMetodosPending: false});
        case REQUEST_METODOS_FAILED:
            return Object.assign({}, state, {Metodoserror: action.payload, isMetodosPending: false});
        case REQUEST_REDES_PENDING:
            return Object.assign({}, state, {isRedesPending: true});
        case REQUEST_REDES_SUCCESS:
            return Object.assign({}, state, {redesdata: action.payload, isRedesPending: false});
        case REQUEST_REDES_FAILED:
            return Object.assign({}, state, {Redeserror: action.payload, isRedesPending: false});
        case UPDATE_DETAILS_PENDING:
            return Object.assign({}, state, {isDetailsPending: true});
        case UPDATE_DETAILS_SUCCESS:
            return Object.assign({}, state, {
                detailsdata: action.payload, //change in the future to recieve in the proper places payload1, payload2, etc...
                isDetailsPending: false
            });
        case UPDATE_DETAILS_FAILED:
            return Object.assign({}, state, {ErrorDetails: action.payload, isDetailsPending: false});
        default:
            return state;
    }
}


const initialEventsState = {
    isEventsPending: false,
    eventsdetailsdata: [],
    eventsError: "",
    isphotosPending: false,
    eventphotosdata: [],
    errorphotos: ""
}

export const Events = (state = initialEventsState, action={}) => {
    switch(action.type){
        case REQUEST_EVENTS_PENDING:
            return Object.assign({}, state, {isEventsPending: true});
        case REQUEST_EVENTS_SUCCESS:
            return Object.assign({}, state, {eventsdetailsdata: action.payload, isEventsPending: false});
        case REQUEST_EVENTS_FAILED:
            return Object.assign({}, state, {eventsError: action.payload, isEventsPending: false});
        case UPDATE_EVENTS_PENDING:
            return Object.assign({}, state, {isEventsPending: true});
        case UPDATE_EVENTS_SUCCESS:
            return Object.assign({}, state, {eventsdetailsdata: action.payload, isEventsPending: false});
        case UPDATE_EVENTS_FAILED:
            return Object.assign({}, state, {eventsError: action.payload, isEventsPending: false});    
        case REQUEST_EVENTDETAILS_PENDING:
            return Object.assign({}, state, {isEventsPending: true});
        case REQUEST_EVENTDETAILS_SUCCESS:
            return Object.assign({}, state, {eventsdetailsdata: action.payload, isEventsPending: false});
        case REQUEST_EVENTDETAILS_FAILED:
            return Object.assign({}, state, {eventsError: action.payload, isEventsPending: false});
        case REQUEST_EVENTPHOTOS_PENDING:
            return Object.assign({}, state, {isphotosPending: true});
        case REQUEST_EVENTPHOTOS_SUCCESS:
            return Object.assign({}, state, {eventphotosdata: action.payload, isphotosPending: false});
        case REQUEST_EVENTPHOTOS_FAILED:
            return Object.assign({}, state, {errorphotos: action.payload, isphotosPending: false});
        case UPDATE_EVENTPHOTOS_PENDING:
            return Object.assign({}, state, {isphotosPending: true});
        case UPDATE_EVENTPHOTOS_SUCCESS:
            return Object.assign({}, state, {eventphotosdata: action.payload, isphotosPending: false});
        case UPDATE_EVENTPHOTOS_FAILED:
            return Object.assign({}, state, {errorphotos: action.payload, isphotosPending: false});
        case DELETE_PHOTO_PENDING:
            return Object.assign({}, state, {isphotosPending: true});
        case DELETE_PHOTO_SUCCESS:
            return Object.assign({}, state, {eventphotosdata: action.payload, isphotosPending: false});
        case DELETE_PHOTO_FAILED:
            return Object.assign({}, state, {errorphotos: action.payload, isphotosPending: false});    
        default:
            return state;
    }
}

/* const initialPostsState = {
    isPostPending: false,
    postdata: [],
    errorpost: ""
}


export const Posts = (state = initialPostsState, action={}) => {
    switch(action.type){
        case DELETE_PHOTO_PENDING:
            return Object.assign({}, state, {isPostPending: true});
        case DELETE_PHOTO_SUCCESS:
            return Object.assign({}, state, {postdata: action.payload, isPostPending: false});
        case DELETE_PHOTO_FAILED:
            return Object.assign({}, state, {errorpost: action.payload, isPostPending: false});
        default:
            return state;
    }
} */

const initialSignInState = {
    isSignInPending: false,
    signindata: [],
    errorsignin: ""
}

export const SignIn = (state = initialSignInState, action={}) => {
    switch(action.type){
        case SIGNIN_PENDING:
            return Object.assign({}, state, {isSignInPending: true});
        case SIGNIN_SUCCESS:
            return Object.assign({}, state, {signindata: action.payload, isSignInPending: false});
        case SIGNIN_FAILED:
            return Object.assign({}, state, {errorsignin: action.payload, isSignInPending: false});
        case SIGNOUT_PENDING:
            return Object.assign({}, state, {isSignInPending: true});
        case SIGNOUT_SUCCESS:
            return Object.assign({}, state, {signindata: action.payload, isSignInPending: false});
        case SIGNOUT_FAILED:
            return Object.assign({}, state, {errorsignin: action.payload, isSignInPending: false});
        default:
            return state;
    }
}


