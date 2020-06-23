import { 
    CHANGE_SEARCH_FIELD,
    CHANGEROUTE,
    CYCLESLIDESHOW,
    TOGGLEVISIBILITY,
    ADDTOGGLEVISIBILITY,
    REMOVETOGGLEVISIBILITY
} from './constants'


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


