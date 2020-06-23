import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CompanyInfoFormFirstStep from './CompanyInfoForm_1_FirstStep';
import CompanyInfoFormSecondStep from './CompanyInfoForm_2_SecondStep';
import CompanyInfoFormThirdStep from './CompanyInfoForm_3_ThirdStep';
import CompanyInfoFormFourthStep from './CompanyInfoForm_4_FourthStep';
import CompanyInfoFormFifthStep from './CompanyInfoForm_5_FifthStep';
import CompanyInfoFormSixthStep from './CompanyInfoForm_6_SixthStep';
import CompanyInfoFormSeventhStep from './CompanyInfoForm_7_SeventhStep';
import CompanyInfoFormEighthStep from './CompanyInfoForm_8_EighthStep';
import CompanyInfoFormNinthStep from './CompanyInfoForm_9_NinthStep';
import CompanyInfoFormTenthStep from './CompanyInfoForm_10_TenthStep';

class CompanyInfoForm extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.state = {
      step: 1,
    };
  }

  nextStep() {
    this.setState({ step: this.state.step + 1 });
  }

  previousStep() {
    this.setState({ step: this.state.step - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { step } = this.state;
    return (
      <div className="form">
        {step === 1 && <CompanyInfoFormFirstStep onSubmit={this.nextStep} />}
        {step === 2 && <CompanyInfoFormSecondStep previousStep={this.previousStep} onSubmit={this.nextStep} />}
        {step === 3 && <CompanyInfoFormThirdStep previousStep={this.previousStep} onSubmit={this.nextStep} />}
        {step === 4 && <CompanyInfoFormFourthStep previousStep={this.previousStep} onSubmit={this.nextStep} />}
        {step === 5 && <CompanyInfoFormFifthStep previousStep={this.previousStep} onSubmit={this.nextStep} />}
        {step === 6 && <CompanyInfoFormSixthStep previousStep={this.previousStep} onSubmit={this.nextStep} />}
        {step === 7 && <CompanyInfoFormSeventhStep previousStep={this.previousStep} onSubmit={this.nextStep} />}
        {step === 8 && <CompanyInfoFormEighthStep previousStep={this.previousStep} onSubmit={this.nextStep} />}
        {step === 9 && <CompanyInfoFormNinthStep previousStep={this.previousStep} onSubmit={this.nextStep} />}
        {step === 10 && <CompanyInfoFormTenthStep previousStep={this.previousStep} onSubmit={onSubmit} />}
      </div>
    );
  }
}

CompanyInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CompanyInfoForm;
