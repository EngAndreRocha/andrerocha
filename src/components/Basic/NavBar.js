import React, { Component } from 'react';
import { connect } from 'react-redux';
import {    
    setSearchField,
    Dropdown_Click,
    Menu_Click,
    Messages_Click,
    Settings_Click,
    CloseDropdowns
} from '../../actions';

import './NavBar.css';
import SearchBox from './SearchBox.js';
import Dropdown from '../Buttons/Dropdown.js'
import Menu from '../Buttons/Menu.js'
import Messages from '../Buttons/Messages.js'
import Settings from '../Buttons/Settings.js'


const mapStateToProps = (state) => {
    return {
        searchField: state.searchEntity.searchField,
        is_DropDownList_Hidden: state.NavBar.is_DropDownList_Hidden,
        is_MenuList_Hidden: state.NavBar.is_MenuList_Hidden,
        is_MessagesList_Hidden: state.NavBar.is_MessagesList_Hidden,
        is_SettingsList_Hidden: state.NavBar.is_SettingsList_Hidden
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onDropdown_Click: () => dispatch(Dropdown_Click()),
        onMenu_Click: () => dispatch(Menu_Click()),
        onMessages_Click: () => dispatch(Messages_Click()),
        onSettings_Click: () => dispatch(Settings_Click()),
        onClickOut: () => dispatch(CloseDropdowns())
    }
  }

class NavBar extends Component {

    render(){

        const { 
            onSearchChange,
            is_DropDownList_Hidden, 
            onDropdown_Click,
            is_MenuList_Hidden,
            onMenu_Click,
            is_MessagesList_Hidden, 
            onMessages_Click,
            is_SettingsList_Hidden, 
            onSettings_Click,
            onClickOut
          } = this.props;

        return(
            <div className="navbar-div">
                <div className="icons-link"><p>Logotipo</p></div>
                <SearchBox searchChange={onSearchChange} />
                <div></div>
                <Dropdown dropdown_click={onDropdown_Click} is_DropDownList_Hidden={is_DropDownList_Hidden} onClickOut={onClickOut}/>
                <Menu menu_click={onMenu_Click} is_MenuList_Hidden={is_MenuList_Hidden} onClickOut={onClickOut}/>
                <Messages messages_click={onMessages_Click} is_MessagesList_Hidden={is_MessagesList_Hidden} onClickOut={onClickOut}/>
                <Settings settings_click={onSettings_Click} is_SettingsList_Hidden={is_SettingsList_Hidden} onClickOut={onClickOut}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
