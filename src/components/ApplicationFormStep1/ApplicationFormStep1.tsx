import './ApplicationFormStep1.scss';
import type { ApplicationFormStepProps } from "../../interfaces/ApplicationFormStepProps";

const ApplicationFormStep1 = ({formData, updateFormData}: ApplicationFormStepProps) => {
  return (
    <div className="step-container">
      <div className="step-header">
        <h3>Basic Information</h3>
        <p>Tell us about the company and position you're applying for</p>
      </div>

      <div className="form-group">
        <label htmlFor="company">
          Company Name <span className="required">*</span>
        </label>
        <input
          id="company"
          type="text"
          placeholder="e.g., Google, Microsoft, Startup Inc."
          aria-label="Enter a Company"
          value={formData.company}
          onChange={(e) => updateFormData('company', e.target.value)}
          autoFocus
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="role">
          Job Role / Position <span className="required">*</span>
        </label>
        <input
          id="role"
          type="text"
          placeholder="e.g., Frontend Developer, Product Manager, UX Designer"
          aria-label="Enter a role"
          value={formData.role}
          onChange={(e) => updateFormData('role', e.target.value)}
          required
        />
      </div>
    </div>
  )
};

export default ApplicationFormStep1;