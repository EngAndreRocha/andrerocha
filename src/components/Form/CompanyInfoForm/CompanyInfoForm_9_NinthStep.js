import React from 'react';
import {  Field, reduxForm } from 'redux-form';
/* import {required} from '../validate'; */
import {renderImageCheckBox} from '../render';
import mbway_icon from '../../../images/icons/mbway_icon.png';
/*<div>Icons made by <a href="/#"href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="/#"href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="/#"href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
import cash from '../../../images/icons/1086732-banking/svg/028-cash.svg';
import debitcard from '../../../images/icons/MultiBanco.png';

const CompanyInfoFormNinthStep = props => {
  const { handleSubmit, previousStep } = props;
    return (
      <form className="form-div" onSubmit={handleSubmit}>
        <div className="form-title"><h2>Informação Empresarial</h2></div>
        {/* EMPRESA:
                  Métodos de Pagamento disponíveis (select)
        */}
        <div className="input-div">
          <meter value="0.9"/>
          <div className="input-div-1">
            <Field types="checkbox" name="mbway" ids="mbway" valued="mbway" srcs={mbway_icon} fieldclass="image-radiobox" component={renderImageCheckBox}/>
            <Field types="checkbox" name="money" ids="money" valued="money" srcs={cash} fieldclass="image-radiobox" component={renderImageCheckBox}/>
            <Field types="checkbox" name="debitcard" ids="debitcard" valued="debitcard" srcs={debitcard} fieldclass="image-radiobox" component={renderImageCheckBox}/>
          </div>
        </div>
          <div className="buttons-form">
            <div className="previous-div">
              <button type="button" className="previous" onClick={previousStep}>Anterior</button>
            </div>
            <div className="next-div">  
              <button type="submit" className="next">Seguinte</button>
            </div>
          </div>
      </form>
    );
  };



export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    /* validate, */
  })(CompanyInfoFormNinthStep);
  