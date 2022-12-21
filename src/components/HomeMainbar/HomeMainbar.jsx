import React from 'react'
import { useLocation, useNavigate} from "react-router-dom"
import {useSelector} from "react-redux";
import QuestionList from './QuestionList'
import './HomeMainbar.css'

const Home = () => {



const navigate = useNavigate()    

const user= 1;


const location= useLocation()
const questionsList= useSelector((state) => state.questionsReducer)

console.log(questionsList)



// const questionsList = [
//   {
//     id: 1,
//     votes: 3,
//     noOfAnswers: 2,
//     questionTitle: "What is a function",
//     questionBody: "It meant to be",
//     questionTags: ["javascript", "R", "Python"],
//     userPosted: "mano",
//     askedOn: "jan 1"
    
//   },
//   {
//     id: 2,
//     votes:6,
//     noOfAnswers: 8,
//     questionTitle: "What is a function",
//     questionBody: "It meanst to be",
//     questionTags: ["javascript", "ReactJs", "Nodejs"],
//     userPosted: "mano",
   
//     askedOn: "Jan 18",
    
//   },
//   {
//     _id: 3,
//     votes: 7,
//     noOfAnswers: 2,
//     userId: 3,
//     questionTitle: "What is a function",
//     questionBody: "It meanst to be",
//     questionTags: ["javascript", "Ruby"],
//     userPosted: "mano",
//     askedOn: "Jan 17",
    
//   },
// ]


const clickHandle =() => {
  if (user===null) {
    alert("login or signup to ask a question")
    navigate('/Auth')
  }
  else {
    navigate('/AskQuestion')
  }
}


  return (
    <div className='main-bar'>
    <div className="main-bar-header">
    { location.pathname === "/" ? <h1> Top Questions </h1> : <h1>All Questions</h1>

    }
    <button onClick={clickHandle} className="ask-btn">Ask Question</button>

    </div>
    <div>
                {
                    questionsList.data=== null ?
                    <h1>Loading...</h1> : (
                    <>
                         <p>{ questionsList.data.length } questions</p>  
                        <QuestionList questionsList={questionsList.data} />
                    </>
                    )
                }
            </div>
    
        

    </div>
  )
}

export default Home