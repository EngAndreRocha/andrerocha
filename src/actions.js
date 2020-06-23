
import { 
    CHANGE_SEARCH_FIELD,
    CHANGEROUTE,
    CYCLESLIDESHOW,
    TOGGLEVISIBILITY,
    ADDTOGGLEVISIBILITY,
    REMOVETOGGLEVISIBILITY
} from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const ChangeRoute = (text, id_clicked) => ({
    type: CHANGEROUTE,
    payload: { route: text, id: id_clicked }
    /* payload: text */
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
