import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegisterFormFirstStep from './RegisterForm_1_FirstStep';
import RegisterFormSecondStep from './RegisterForm_2_SecondStep';
import RegisterFormThirdStep from './RegisterForm_3_ThirdStep';
import RegisterFormFourthStep from './RegisterForm_4_FourthStep';


class RegisterForm extends Component {
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
        <div className="form-title"><h2>Registo</h2></div>
        {step === 1 && <RegisterFormFirstStep onSubmit={this.nextStep} />}
        {step === 2 && <RegisterFormSecondStep previousStep={this.previousStep} onSubmit={this.nextStep} />}
        {step === 3 && <RegisterFormThirdStep previousStep={this.previousStep} onSubmit={this.nextStep} />}
        {step === 4 && <RegisterFormFourthStep previousStep={this.previousStep} onSubmit={onSubmit} />}
      </div>
    );
  }
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
