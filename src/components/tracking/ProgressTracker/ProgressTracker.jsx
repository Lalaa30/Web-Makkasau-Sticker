import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ steps, currentStep }) => {
  // Calculate progress percentage
  const progress = (currentStep / (steps.length - 1)) * 100;
  
  return (
    <div className="progress-tracker">
      <div className="progress-line"></div>
      <div className="progress-line-filled" style={{ width: `${progress}%` }}></div>
      
      <div className="progress-steps">
        {steps.map((step, index) => {
          let iconClass = "";
          if (index < currentStep) {
            iconClass = "completed";
          } else if (index === currentStep) {
            iconClass = "active";
          }
          
          return (
            <div className="progress-step" key={index}>
              <div className={`step-icon ${iconClass}`}>{step.icon}</div>
              <div className="step-text">{step.label}</div>
              <div className="step-date">{step.date || '-'}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressTracker;