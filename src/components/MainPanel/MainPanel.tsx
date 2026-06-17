import { useContext } from 'react'
import EmptyState from '../EmptyState/EmptyState'
import './MainPanel.scss'
import { ApplicationContext } from '../../context/applications/ApplicationContext'
import ApplicationDetail from '../ApplicationDetail/ApplicationDetail';

export default function MainPanel() {
  const { state } = useContext(ApplicationContext);

  const selectedApplication = state.applications.find(app => app.id === state.selectedId);

  return (
    <main className="main-panel">
      <div className="main-panel__content">
        { state.activeView === 'empty' ? (
        <EmptyState />
        ) : (selectedApplication ? <ApplicationDetail {...selectedApplication} /> : null)}
      </div>
    </main>
  )
}