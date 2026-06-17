import './ApplicationFormStep4.scss';
import type { ApplicationFormStepProps } from "../../interfaces/ApplicationFormStepProps";

const ApplicationFormStep4 = ({formData}: ApplicationFormStepProps) => {

  return (
    <div className="step-container">
      <div className="step-header">
        <h3>Review Your Application</h3>
        <p>Please verify that all information is correct before submitting</p>
      </div>

      <div className="summary-card">
        <div className="summary-section">
          <h4>Company & Position</h4>
          <div className="summary-row">
            <span className="summary-label">Company:</span>
            <span className="summary-value">{formData.company || '—'}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Role:</span>
            <span className="summary-value">{formData.role || '—'}</span>
          </div>
        </div>

        <div className="summary-section">
          <h4>Application Details</h4>
          <div className="summary-row">
            <span className="summary-label">Date:</span>
            <span className="summary-value">
              {formData.date 
                ? new Date(formData.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })
                : '—'
              }
            </span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Status:</span>
            <span className="summary-value status-badge" data-status={formData.status}>
              {formData.status}
            </span>
          </div>
        </div>

        {formData.notes && (
          <div className="summary-section">
            <h4>Notes</h4>
            <div className="notes-preview">
              {formData.notes.split('\n').map((line, index) => (
                <p key={index}>{line || <br />}</p>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  )
};

export default ApplicationFormStep4;