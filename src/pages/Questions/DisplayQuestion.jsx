import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionsDetails from './QuestionsDetails'
import '../../App.css'
const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
        
    <LeftSideBar/>
    <div className="home-container-2">
      <QuestionsDetails/>
      <RightSidebar/>
   </div>
    </div>
  )
}

export default DisplayQuestion