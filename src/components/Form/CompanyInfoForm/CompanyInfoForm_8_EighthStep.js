import React from 'react';
import { Field, reduxForm } from 'redux-form'; 
import {required, number} from '../validate';
import {renderField} from '../render';


const CompanyInfoFormEighthStep = props => {
  const { handleSubmit, previousStep } = props;
    return (
      <form className="form-div" onSubmit={handleSubmit}>
        <div className="form-title"><h2>Informação Empresarial</h2></div>
        {/* EMPRESA: 
                  tipo de negocio, (select) // consider API for validation and UX, possivelmente desnecessario
                  lotação máxima, (number)
        */}
        <div className="input-div">
          <meter value="0.8"/>
          <div className="input-div-1">
            <Field name={`capacidade_total`} type="number" fieldclass="" component={renderField} label={`Capacidade`} validate={[required, number]} />
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
  })(CompanyInfoFormEighthStep);
  