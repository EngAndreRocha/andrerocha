import React from 'react';
import settings from '../../images/icons/149629-essential-compilation/svg/settings-11.svg';
import SettingsList from '../Lists/SettingsList';

const Settings = ({settings_click, is_SettingsList_Hidden, onClickOut}) => {
    return(
        <div className="small-icons-div" onMouseLeave={onClickOut}>
            <a href="#!"className="icons-link" title="Settings" onClick={settings_click}>
                <img className="small-icons" width="16" src={settings} alt="Settings"></img>
            </a>
            {!is_SettingsList_Hidden && <SettingsList />}
        </div>
    );
}

export default Settings;
