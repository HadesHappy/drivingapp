import React from 'react'
import { useNavigate } from 'react-router-dom'
import './sidebar.css'
import { useAuth } from '../../../../contexts/AuthContext'
import { BACKEND_URL } from '../../../../utils/constants'

const Sidebar = () => {
  const navigate = useNavigate()
  const {logout} = useAuth()
  const onClickLogout = () => {
    logout()
    navigate('/')
  }
  const onClickRegister = () => {
    console.log('Register')
    navigate('/register-student')
  }
  return (
    <div className='adminsidebar'>
      <div className='sidebar-container'>
        <div className='sidebar-logo' />
        <div className='sidebar-menu'>
          <div className='sidebar-menu-container'>
            <div className='sidebar-menu-item' onClick={onClickLogout}>
              <img src={`${BACKEND_URL}icons/Entradas.png`} alt='entradas' />
            </div>
            <div className='sidebar-menu-item'>
              <img src={`${BACKEND_URL}icons/Group 120.png`} alt='add test' />
              <img src={`${BACKEND_URL}icons/Añadir test.png`} alt='add test' />
            </div>
            <div className='sidebar-menu-item'>
              <img src={`${BACKEND_URL}icons/analitica.png`} alt='analitica' />
            </div>
            <div className='sidebar-menu-item'>
              <img src={`${BACKEND_URL}icons/agregar profesor.png`} alt='agregar professor' />
            </div>
            <div className='sidebar-menu-item'>
              <img src={`${BACKEND_URL}icons/agregar admin.png`} alt='agregar admin' />
            </div>
            <div className='sidebar-menu-item'>
              <img src={`${BACKEND_URL}icons/test unico.png`} alt='Test unico' />
            </div>
            <div className='sidebar-menu-item' onClick = {onClickRegister}>
              <img src={`${BACKEND_URL}icons/Inscribir.png`} alt='Inscribir estudiante' />
            </div>
            <div className='sidebar-menu-item'>
              <img src={`${BACKEND_URL}icons/Chat.png`} alt='Chat/Preguntas' />
            </div>
            <div className='sidebar-menu-item'>
              <img src={`${BACKEND_URL}icons/Cerrar sesion.png`} alt='Cerrar sesion' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar