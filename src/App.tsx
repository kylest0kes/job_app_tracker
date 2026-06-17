import { useState } from 'react'
import './App.scss'

import MainPanel from './components/MainPanel/MainPanel'
import Sidebar from './components/SideBar/SideBar'
import Modal from './components/Modal/Modal';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import { ApplicationProvider } from './context/applications/ApplicationContext';

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  return (
    <div className='app-shell'>
      <ApplicationProvider>
        <Sidebar openModal={handleOpenModal} />
        <MainPanel />
        <Modal isOpen={openModal} onClose={handleCloseModal}>
          <ApplicationForm onClose={handleCloseModal}/> 
        </Modal>
      </ApplicationProvider>
    </div>
  )
}

export default App;