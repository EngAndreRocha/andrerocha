import React from 'react';

import { Field } from 'redux-form';
import {renderField, renderCheckBox} from './render';

const WorkHours = ({weekday}) => {
    return(
            <div className="weekday_time">
                <div className="horarios_reg_alm_jant">
                    <label>Aberto:</label>
                    <div className="horas">
                    <Field fieldclass="time_in_div" classname="frst_time_in" type="time" label="das:" name= {"abr_time_" + weekday} component={renderField}/>
                    <Field fieldclass="time_in_div" classname="scnd_time_in" type="time" label="às:" name= {"enc_time_" + weekday} component={renderField}/>
                </div>
                </div>
                <div className="horarios_reg_alm_jant">
                    <label>Almoço:</label>
                    <div className="horas">
                    <Field fieldclass="time_in_div" classname="frst_time_in" type="time" label="das:" name={"enc_alm_time_" + weekday} component={renderField}/>
                    <Field fieldclass="time_in_div" classname="scnd_time_in" type="time" label="às:" name={"abr_alm_time_" + weekday} component={renderField}/>
                    </div>
                    <Field fieldclass="int_check_in" type="checkbox" label="Encerrado para almoço:" name={"enc_alm_" + weekday} id="enc_alm" component={renderCheckBox}/>
                </div>
                <div className="horarios_reg_alm_jant">
                    <label>Jantar:</label>
                    <div className="horas">
                    <Field fieldclass="time_in_div" classname="frst_time_in" type="time" label="das:" name={"enc_jnt_time_" + weekday} component={renderField}/>
                    <Field fieldclass="time_in_div" classname="scnd_time_in" type="time" label="às:" name={"abr_jnt_time_" + weekday}  component={renderField}/>
                    </div>
                    <Field fieldclass="int_check_in" type="checkbox" label="Encerrado para jantar:" name={"enc_jnt_" + weekday} id="enc_jant" component={renderCheckBox}/>
                </div>
            </div>
    );
}

export default WorkHours;
