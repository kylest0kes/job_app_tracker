import { useContext } from "react";
import "./ConfirmDelete.scss";
import { ApplicationContext } from "../../context/applications/ApplicationContext";
import type { ConfirmDeleteProps } from "../../interfaces/ConfirmDeleteProps";

const ConfirmDelete = ({ id, onClose }: ConfirmDeleteProps) => {
    const { dispatch } = useContext(ApplicationContext);

  const handleDelete = () => {
    dispatch({ type: "DELETE_APPLICATION", payload: id });
  };

  return (
    <div className="confirm-delete">
      <div className="confirm-delete__header">
        <h3>Delete Application</h3>
      </div>

      <p className="confirm-delete__message">
        Are you sure you want to delete this application?
      </p>
      <p className="confirm-delete__warning">This action cannot be undone.</p>

      <div className="confirm-delete__actions">
        <button className="confirm-delete__cancel" onClick={onClose}>Cancel</button>
        <button className="confirm-delete__confirm" onClick={handleDelete}>Yes, Delete</button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
