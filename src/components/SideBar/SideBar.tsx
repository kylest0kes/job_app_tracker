import { useContext } from 'react';
import type { SideBarProps } from '../../interfaces/SideBarProps';
import SidebarItem from '../SideBarItem/SideBarItem'
import './Sidebar.scss'
import { ApplicationContext } from '../../context/applications/ApplicationContext';
import type { Application } from '../../interfaces/Application';

export default function Sidebar({openModal}: SideBarProps) {
  const { state } = useContext(ApplicationContext);

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <span className="sidebar__title">Applications</span>
        <button className="sidebar__add-btn" onClick={openModal}>
          + Add
        </button>
      </div>
      <div className="sidebar__list">
        {/* SidebarItem components will go here */}
        {state.applications.map((application: Application) => (
          <SidebarItem key={application.id} {...application} />
        ))}
      </div>
    </aside>
  );
}