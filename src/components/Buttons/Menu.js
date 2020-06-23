import React from 'react';
import menu from '../../images/icons/149629-essential-compilation/svg/menu-5.svg';
import MenuList from '../Lists/MenuList';

const Menu = ({menu_click, is_MenuList_Hidden, onClickOut}) => {
    return(
        <div className="small-icons-div" onMouseLeave={onClickOut}>
            <a href="#!"className="icons-link" title="Menu" onClick={menu_click}>
                <img className="small-icons" width="16" src={menu} alt="Menu"></img>
            </a>
            {!is_MenuList_Hidden && <MenuList />}
        </div>
    );
}

export default Menu;
