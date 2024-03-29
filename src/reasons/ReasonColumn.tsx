import React from 'react';
import { Reason } from '../models/Reason';
import ReasonForm from './ReasonForm';
import './ReasonColumn.scss';

interface ReasonColumnProps {
  className: string;
  title: string;
  reasons: Reason[];
  formOnSubmit: (reason: Reason) => void;
  formButtonIcon: React.ReactNode;
}

const ReasonColumn: React.FC<ReasonColumnProps> = ({className, title, reasons, formOnSubmit, formButtonIcon}) => {

  return (
    <div className={`column ${className}`}>
      <div className="column__title">{ title }</div>
      {
        reasons.map((reason) => <p key={reason.id}>{ reason.text }</p>)
      }
      <ReasonForm onSubmit={formOnSubmit} submitButtonIcon={formButtonIcon} className={className} />
    </div>
  );
}

export default ReasonColumn;
