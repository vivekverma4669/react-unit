import React, { useState } from 'react';
import StepOne from   '../components/SignUp/StepOne';
import StepTwo from   '../components/SignUp/StepTwo';
import StepThree from  '../components/SignUp/StepThree';
import StepFour from '../components/SignUp/StepFour';
import UserInfo from '../components/SignUp/UserInfo';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (data) => {
    setFormData({ ...formData, ...data });
    setSubmitted(true);
  };

  return (
    <div>
      <h2 data-cy="current-step">Step {step}</h2>
      {submitted ? (
        <UserInfo data={formData} />
      ) : (
        <>
          {step === 1 && <StepOne onNext={handleNext} />}
          {step === 2 && <StepTwo onNext={handleNext} onPrevious={handlePrevious} />}
          {step === 3 && <StepThree onNext={handleNext} onPrevious={handlePrevious} />}
          {step === 4 && <StepFour onSubmit={handleSubmit} onPrevious={handlePrevious} />}
        </>
      )}
    </div>
  );
};

export default SignUp;
