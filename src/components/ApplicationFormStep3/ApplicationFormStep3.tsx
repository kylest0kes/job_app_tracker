import './ApplicationFormStep3.scss';
import type { ApplicationFormStepProps } from "../../interfaces/ApplicationFormStepProps";

const ApplicationFormStep3 = ({formData, updateFormData}: ApplicationFormStepProps) => {
  return (
    <div className="step-container">
      <div className="step-header">
        <h3>Additional Notes</h3>
        <p>Keep track of important details about this application</p>
      </div>

      <div className="form-group">
        <label htmlFor="notes">
          Notes <span className="optional">(optional)</span>
        </label>
        <textarea
          id="notes"
          aria-label="Enter notes about the application"
          value={formData.notes}
          onChange={(e) => updateFormData('notes', e.target.value)}
          placeholder="e.g., Contact person: John Doe (john@company.com)&#10;Application deadline: March 15th&#10;Need to follow up next week&#10;Portfolio link: https://..."
          rows={8}
          className="notes-textarea"
        />
        <div className="field-footer">
          <span className="field-hint">
            Add any relevant information you want to remember
          </span>
          <span className="character-count">
            {formData.notes.length} characters
          </span>
        </div>
      </div>

    </div>
  )
};

export default ApplicationFormStep3;