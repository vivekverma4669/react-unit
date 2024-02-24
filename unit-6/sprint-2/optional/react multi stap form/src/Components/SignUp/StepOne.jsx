import React, { useState } from 'react';

const StepOne = ({ onNext }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const handleNext = () => {
    onNext({ email, password, confirmedPassword });
  };

  return (
    <div>
      <form>
        <label>Email</label>
        <input
          type="email"
          data-cy="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          data-cy="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          data-cy="confirmedPassword"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />

        <button type="button" data-cy="next" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default StepOne;
