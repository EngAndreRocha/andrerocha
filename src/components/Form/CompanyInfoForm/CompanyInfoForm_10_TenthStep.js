import React from 'react';
import { FieldArray, reduxForm } from 'redux-form';
import {renderHashtags} from '../render';


const CompanyInfoFormTenthStep = props => {
    const { handleSubmit, pristine, previousStep, submitting } = props;
    return (
      <form className="form-div" onSubmit={handleSubmit}>
        <div className="form-title"><h2>Informação Empresarial</h2></div>
        {/* EMPRESA: 
                  possiveis hashtags, (text)
        */}
        <div className="input-div">
          <meter value="1"/>
          <div className="input-div-1">
            <FieldArray name="hashtags" fieldclass="fieldarray" component={renderHashtags} />
          </div>
        </div>
          <div className="buttons-form">
            <div className="previous-div">
              <button type="button" className="previous" onClick={previousStep}>Anterior</button>
            </div>
            <div className="next-div">  
              <button type="submit" disabled={pristine || submitting}>Submeter</button>
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
  })(CompanyInfoFormTenthStep);
  