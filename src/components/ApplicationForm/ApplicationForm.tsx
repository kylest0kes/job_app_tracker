import './ApplicationForm.scss';
import { useContext, useEffect, useState } from "react";
import ApplicationFormStep1 from "../ApplicationFormStep1/ApplicationFormStep1";
import ApplicationFormStep2 from "../ApplicationFormStep2/ApplicationFormStep2";
import ApplicationFormStep3 from "../ApplicationFormStep3/ApplicationFormStep3";
import ApplicationFormStep4 from "../ApplicationFormStep4/ApplicationFormStep4";
import type { Application } from '../../interfaces/Application';
import { ApplicationContext } from '../../context/applications/ApplicationContext';
import type { ApplicationFormProps } from '../../interfaces/ApplicationFormProps';

const ApplicationForm = ({onClose}: ApplicationFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Application>({
    id: crypto.randomUUID(),
    company: '',
    role: '',
    date: new Date().toISOString().split('T')[0],
    status: 'applied',
    notes: ''
  });
  const [justTransitioned, setJustTransitioned] = useState(false);

  const { state, dispatch  } = useContext(ApplicationContext);
  
  useEffect(() => {
    console.log("state in useEffect: ", state)
  }, [state]);

  const totalSteps = 4;

  const isNextBtnDisabled = () => {
    if (step === 1) {
      return formData.company === '' || formData.role === '';
    }
    return false;
  }

  const handleNextStep = () => {
    if (step < 4) {
      if (step === 3) {
        setJustTransitioned(true);
        setTimeout(() => {
          setJustTransitioned(false)
        }, 150);
        setStep(step + 1);
      } else {
        setStep(step + 1);
      }
    }
  }

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // dispatch log to come
    const application: Application = {
      id: formData.id,
      company: formData.company,
      role: formData.role,
      date: formData.date,
      status: formData.status,
      notes: formData.notes
    }
    dispatch({ type: 'ADD_APPLICATION', payload: application })
    onClose();
  }

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }

  const renderStep = () => {
    switch(step) {
      case 1: 
        return (
          <ApplicationFormStep1 formData={formData} updateFormData={updateFormData} />
        );
      case 2: 
        return (
          <ApplicationFormStep2 formData={formData} updateFormData={updateFormData} />
        );
      case 3: 
        return (
          <ApplicationFormStep3 formData={formData} updateFormData={updateFormData} />
        );
      case 4: 
        return (
          <ApplicationFormStep4 formData={formData} updateFormData={updateFormData} />
        );
      default: 
        return null;
    }
  }

  return (
    <div className="application-form">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Add New Application</h2>
          <div className="step-indicator">
            Step {step} of {totalSteps}
          </div>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        <div className="form-content">
          {renderStep()}
        </div>

        <div className="form-actions">
          {step > 1 && (
            <button 
              type="button" 
              className="btn-secondary"
              onClick={handlePreviousStep}
            >
              Previous
            </button>
          )}
          
          {step < totalSteps ? (
            <button 
              type="button" 
              className={`btn-primary ${isNextBtnDisabled() ? 'disabled' : ''}`}
              onClick={handleNextStep}
              disabled={isNextBtnDisabled()}
            >
              Next
            </button>
          ) : (
            <button 
              type="submit" 
              className="btn-success"
              disabled={justTransitioned}
            >
              Submit Application
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ApplicationForm;