import React, { SyntheticEvent } from 'react';
import './ReasonForm.scss';
import { useInput } from '../hooks/useInput';
import { Reason } from '../models/Reason';

interface ReasonFormProps {
  onSubmit: (reason: Reason) => void;
  submitButtonIcon: React.ReactNode;
  className: string;
}

const ReasonForm: React.FC<ReasonFormProps> = ({onSubmit, className, submitButtonIcon}) => {
  const { value: reasonText, bind: bindReasonText, reset: resetReasonText } = useInput('');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (reasonText) {
      onSubmit({ id: 0, text: reasonText });
      resetReasonText();
    }
  }

  return (
    <form className={`ReasonForm ${className}`} onSubmit={handleSubmit}>
      <input className="ReasonForm__text" placeholder="Reason" type="text" {...bindReasonText} />
      <button className="ReasonForm__submit" onClick={handleSubmit}>{ submitButtonIcon }</button>
    </form>
  );
}

export default ReasonForm;
