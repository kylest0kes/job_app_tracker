import { useState } from 'react';
import type { Application } from '../../interfaces/Application';
import './ApplicationDetail.scss';
import Modal from '../Modal/Modal';
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete';
import EditApplicationForm from '../EditApplicationForm/EditApplicationForm';

const ApplicationDetail = ({ id, company, role, date, status, notes}: Application) => {

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [showEditApplicationForm, setShowEditApplicationForm] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const selectedApplication: Application = {
    id, 
    company, 
    role, 
    date, 
    status,
    notes
  }

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setShowDeleteConfirm(false);
  }

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
    setShowDeleteConfirm(true);
  }

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
    setShowEditApplicationForm(true);
  }

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setShowEditApplicationForm(false);
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T12:00:00');
    return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="application-detail">
      {showDeleteConfirm ? (
        <Modal isOpen={openDeleteModal} onClose={handleCloseDeleteModal}>
          <ConfirmDelete id={id} onClose={handleCloseDeleteModal}/>
        </Modal>
      ) : null}
      {showEditApplicationForm ? (
        <Modal isOpen={openEditModal} onClose={handleCloseEditModal}>
          <EditApplicationForm {...selectedApplication} onClose={handleCloseEditModal}/> 
        </Modal>
      ) : null}
      <div className="detail-header">
        <h2>Application Details</h2>
      </div>

      <div className="detail-section">
        <h3>Company & Position</h3>
        <div className="detail-row">
          <span className="detail-label">Company:</span>
          <span className="detail-value">{ company }</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Role:</span>
          <span className="detail-value">{ role }</span>
        </div>
      </div>

      <div className="detail-section">
        <h3>Application Details</h3>
        <div className="detail-row">
          <span className="detail-label">Date:</span>
          <span className="detail-value">{ formatDate(date) }</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Status:</span>
          <span className="detail-value status-badge">{ status }</span>
        </div>
      </div>

      <div className="detail-section">
        <h3>Notes</h3>
        <div className="detail-notes">
         { notes } 
        </div>
      </div>

      <div className="detail-actions">
        <button className="btn-edit" onClick={handleOpenEditModal}>Edit</button>
        <button className="btn-delete" onClick={handleOpenDeleteModal}>Delete</button>
      </div>
    </div>
  );
};

export default ApplicationDetail;