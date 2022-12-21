import React from 'react'
import './Users.css'
import { useLocation } from 'react-router-dom'
import LeftSidebar from '../../components/LeftSideBar/LeftSideBar'
import UsersList from './UsersList'

const Users = () => {
    const location = useLocation()
  return (
    <div className="home-container-3">
        <LeftSidebar/>
        <div className="home-container-4">
          <h1 style={{fontWeight: "500"}}>Users</h1>
            <UsersList/> 
        </div>    
    </div>
  )
}

export default Users