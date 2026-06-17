import './EmptyState.scss';

const EmptyState = () => {
  return (
    <div className="empty-state">
      <div className="empty-state__content">
        <h3 className="empty-state__title">No application selected</h3>
        <p className="empty-state__message">
          Select an application from the sidebar to view details, or add a new application to get started.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;