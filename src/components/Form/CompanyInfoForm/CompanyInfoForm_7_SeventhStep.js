import React from 'react';
import { Field, reduxForm } from 'redux-form'; 
/* import {required} from '../validate'; */
import {renderField} from '../render';
import FacebookIcon from '../../../images/icons/124009-social-networks-logos/svg/facebook.svg';
import InstagramIcon from '../../../images/icons/124009-social-networks-logos/svg/instagram.svg';
import TwitterIcon from '../../../images/icons/124009-social-networks-logos/svg/twitter.svg';
import PinterestIcon from '../../../images/icons/124009-social-networks-logos/svg/pinterest.svg';
import YoutubeIcon from '../../../images/icons/124009-social-networks-logos/svg/youtube.svg';
import VineIcon from '../../../images/icons/124009-social-networks-logos/svg/vine.svg';
import LinkedInIcon from '../../../images/icons/124009-social-networks-logos/svg/linkedin.svg';



const CompanyInfoFormSeventhStep = props => {
    const { handleSubmit, previousStep } = props;
    return (
      <form className="form-div" onSubmit={handleSubmit}>
        <div className="form-title"><h2>Informação Empresarial</h2></div>
        {/* EMPRESA: 
          redes sociais, (url)
        */}
        <div className="input-div">
          <meter value="0.7"/>
          <div className="input-div-1">
            <img src={FacebookIcon} alt="FacebookIcon" height="42" width="42" />
            <Field name="facebook" type="url" fieldclass="" component={renderField} label={`Url:`} /* validate={[required]} *//>
            <img src={InstagramIcon} alt="InstagramIcon" height="42" width="42" />
            <Field name="instagram" type="url" fieldclass="" component={renderField} label={`Url:`} /* validate={[required]} *//>
            <img src={TwitterIcon} alt="TwitterIcon" height="42" width="42" />
            <Field name="twitter" type="url" fieldclass="" component={renderField} label={`Url:`} /* validate={[required]} *//>
            <img src={PinterestIcon} alt="PinterestIcon" height="42" width="42" />
            <Field name="pinterest" type="url" fieldclass="" component={renderField} label={`Url:`} /* validate={[required]} *//>
            <img src={YoutubeIcon} alt="YoutubeIcon" height="42" width="42" />
            <Field name="youtube" type="url" fieldclass="" component={renderField} label={`Url:`} /* validate={[required]} *//>
            <img src={VineIcon} alt="VineIcon" height="42" width="42" />
            <Field name="vine" type="url" fieldclass="" component={renderField} label={`Url:`} /* validate={[required]} *//>
            <img src={LinkedInIcon} alt="LinkedInIcon" height="42" width="42" />
            <Field name="linkedin" type="url" fieldclass="" component={renderField} label={`Url:`} /* validate={[required]} *//>
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
  })(CompanyInfoFormSeventhStep);
  