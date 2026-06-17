import type { Application } from '../../interfaces/Application';
import './EditApplicationForm.scss';
import type { EditApplicationFormProps } from '../../interfaces/EditApplicationFormProps';
import { useContext, useEffect, useState } from 'react';
import { ApplicationContext } from '../../context/applications/ApplicationContext';

const EditApplicationForm = ({id, company, role, date, status, notes, onClose}: EditApplicationFormProps) => {
  const { state, dispatch } = useContext(ApplicationContext);

  const [updatedApplication, setUpdatedApplication] = useState<Application>({
    id,
    company,
    role,
    date,
    status: status as 'saved' | 'applied' | 'interviewing' | 'offered' | 'rejected' | 'ghosted',
    notes
  });

  const handleEditApplicationFormSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    dispatch({ type: 'EDIT_APPLICATION', payload: updatedApplication});
    onClose();
  }

  useEffect(() => {
    console.log('state in edit form: ', state)
  }, [state]);

  return (
    <div className="edit-application">
      <div className="edit-application__header">
        <h2>Edit Application</h2>
      </div>

      <form className="edit-application__form" onSubmit={handleEditApplicationFormSubmit}>
        <div className="form-section">
          <h3>Company & Position</h3>
          
          <div className="form-group">
            <label htmlFor="company">Company Name *</label>
            <input
              id="company"
              type="text"
              placeholder="e.g., Google, Microsoft, Startup Inc."
              value={ updatedApplication.company }
              onChange={(e) => setUpdatedApplication({...updatedApplication, company: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Job Role / Position *</label>
            <input
              id="role"
              type="text"
              placeholder="e.g., Frontend Developer, Product Manager"
              value={ updatedApplication.role }
              onChange={(e) => setUpdatedApplication({...updatedApplication, role: e.target.value})}
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Application Details</h3>
          
          <div className="form-group">
            <label htmlFor="date">Application Date *</label>
            <input
              id="date"
              type="date"
              value={ updatedApplication.date }
              onChange={(e) => setUpdatedApplication({...updatedApplication, date: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Application Status *</label>
            <select id="status" value={ updatedApplication.status } onChange={(e) => setUpdatedApplication({...updatedApplication, status: e.target.value as 'saved' | 'applied' | 'interviewing' | 'offered' | 'rejected' | 'ghosted'})}>
              <option value="saved">Saved</option>
              <option value="applied">Applied</option>
              <option value="interviewing">Interviewing</option>
              <option value="offered">Offered</option>
              <option value="rejected">Rejected</option>
              <option value="ghosted">Ghosted</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h3>Notes</h3>
          
          <div className="form-group">
            <label htmlFor="notes">Notes (optional)</label>
            <textarea
              id="notes"
              rows={6}
              placeholder="Add any relevant information..."
              onChange={(e) => setUpdatedApplication({...updatedApplication, notes: e.target.value})}
            >
                { updatedApplication.notes }
            </textarea>
          </div>
        </div>

        <div className="edit-application__actions">
          <button type="button" className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn-save">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditApplicationForm;