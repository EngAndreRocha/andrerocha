import React from 'react';
import './SearchBox.css';
/* import search from '../../images/icons/149629-essential-compilation/svg/search-2.svg'; */

const SearchBox = ({ /* searchField,  */searchChange }) => {
    return(
        <div className="nav-search-div">
            <input className="nav-search-input"  id="nav-search-input" type='search' placeholder='Procurar...' onChange={searchChange} ></input>
           {/*  <a href="#!"className="nav-search-link" title="Search" id=" ">
                <img className="icons" src={search} alt="Search"></img>
            </a> */}
        </div>
    );
}

export default SearchBox;
