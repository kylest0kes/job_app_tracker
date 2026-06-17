import { useContext, useEffect } from 'react'
import type { SideBarItemProps } from '../../interfaces/SideBarItemProps'
import './SidebarItem.scss'
import { ApplicationContext } from '../../context/applications/ApplicationContext'

export default function SidebarItem({id, company, role, status}: SideBarItemProps) {
  const { state, dispatch} = useContext(ApplicationContext);

  useEffect(() => {
    console.log("state in side bar item: ", state)
  }, [state]);

  const handleSideBarItemClicked = () => {
    dispatch({ type: 'SELECT_APPLICATION', payload: id})
  }

  return (
    <div className={`sidebar-item${id === state.selectedId ? '--active' : ''}`} onClick={handleSideBarItemClicked}>
      <div className="sidebar-item__company">{ company }</div>
      <div className="sidebar-item__role">{ role }</div>
      <span className="sidebar-item__badge">{ status }</span>
    </div>
  )
}