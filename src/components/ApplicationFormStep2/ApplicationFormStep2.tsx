import './ApplicationFormStep2.scss';
import type { ApplicationFormStepProps } from "../../interfaces/ApplicationFormStepProps";

const ApplicationFormStep2 = ({formData, updateFormData}: ApplicationFormStepProps) => {
  const statusOptions = [
    { value: 'saved', label: 'Saved' },
    { value: 'applied', label: 'Applied' },
    { value: 'interviewing', label: 'Interviewing' },
    { value: 'offered', label: 'Offered' },
    { value: 'rejected', label: 'Rejected' },
    { value: 'ghosted', label: 'Ghosted' }
  ];

  return (
    <div className="step-container">
      <div className="step-header">
        <h3>Application Details</h3>
        <p>When did you apply and what's the current status?</p>
      </div>

      <div className="form-group">
        <label htmlFor="applicationDate">
          Application Date <span className="required">*</span>
        </label>
        <input
          id="applicationDate"
          type="date"
          aria-label="Enter application date"
          value={formData.date}
          onChange={(e) => updateFormData('date', e.target.value)}
          required
        />
        <span className="field-hint">
          Select the date you submitted your application
        </span>
      </div>

      <div className="form-group">
        <label htmlFor="status">
          Application Status <span className="required">*</span>
        </label>
        <select
          id="status"
          aria-label="Select application status"
          value={formData.status}
          onChange={(e) => updateFormData('status', e.target.value)}
          className="status-select"
          required
        >
          {statusOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="field-hint">
          Track your progress through the hiring process
        </span>
      </div>
    </div>
  )
};

export default ApplicationFormStep2;