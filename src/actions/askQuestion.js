import * as api from '../api/index'
// import axios from "axios";

// export const askQuestion =(questionData, navigate) =>  {
//     return async (dispatch) => {
//         try {
//          const {data} = await axios.post("http://localhost:5000/questions/Ask", questionData)
//          dispatch({
//             type: "POST_QUESTION",
            
//          })
//          dispatch(fetchAllQuestions())
//          navigate('/')
//         }
//         catch (err) {
//           console.log(err)
//         } 
//     }
    
// }

// export const fetchAllQuestions = () =>  async (dispatch) =>{
//   try {
//   const {data} = await axios.get("http://localhost:5000/questions/get")
//    dispatch ({
//     type: "FETCH_ALL_QUESTIONS",
//     payload: data
//    })
//   }
//   catch (error) {
//     console.log(error)
//   }
// } 




// export const voteQuestion = (id, value, userId) =>  async (dispatch) => {
//   try {
//     const {data} = await axios.patch(`http://localhost:5000/questions/vote/${id}`, {value, userId})
//     dispatch(fetchAllQuestions())

//   } catch (error) {
//     console.log(error)
//   }

// }




// export const deleteQuestion = (id, navigate) => async(dispatch) => {
//   try {
    
//   const {data} = await axios.delete(`http://localhost:5000/questions/delete/${id}`)
//    dispatch(fetchAllQuestions())
//    dispatch(navigate('/'))

//   } catch (error) {
//     console.log(error)
//   }
// }

// export const postAnswer = (answerData)  => async(dispatch) => {
//   try {
//       const {id, noOfAnswers, answerBody, userAnswered, userId} = answerData 
   
//     const {data} =await axios.patch(`http://localhost:5000/answer/post/${id}`, {noOfAnswers, answerBody, userAnswered, userId})
//       dispatch({type: 'POST_ANSWER', payload: data})
//       //  dispatch(fetchAllQuestions())
//   } catch (error) {
//     console.log(error)
//   }
  
// }




// export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
//   try {
    
//     const {data} =await axios.patch(`http://localhost:5000/answer/delete/${id}`, {id, answerId, noOfAnswers})
//     dispatch(fetchAllQuestions())
//   } 
  
//   catch (error) {
//     console.log(error)
//   }
// }

export const askQuestion = (questionData, navigate) => async (dispatch) => {
  
  
  try{
    const { data } = await api.postQuestion(questionData)
    dispatch({type: 'POST_QUESTION', payload: data})
    dispatch(fetchAllQuestions())
    navigate('/')
  }
  catch(error){
    console.log(error)
  }
}

export const fetchAllQuestions = () => async (dispatch) => {

  try{

    const { data } = await api.getAllQuestions()
    dispatch({ type: 'FETCH_ALL_QUESTIONS', payload: data})

  }
  catch(error){
    console.log(error);
  }
}

export const postAnswer = (answerData) => async (dispatch) => {
  try {
      const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData;

      const { data } = await api.postAnswer( id, noOfAnswers, answerBody, userAnswered, userId )

      dispatch({ type: 'POST_ANSWER', payload: data})

      dispatch(fetchAllQuestions())
      
  } 
  catch (error) {
      console.log(error)
  }
}

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
      await api.deleteQuestion(id)
      dispatch(fetchAllQuestions())
      navigate('/')
  } catch (error) {
      console.log(error)
  }
}

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
  try{
    await api.deleteAnswer(id, answerId, noOfAnswers)
    dispatch(fetchAllQuestions())
  }
  catch(error){
    console.log(error)
  }
}


export const voteQuestion = (id, value, userId) => async(dispatch) => {
  try{
    await api.voteQuestion(id, value, userId);
    dispatch(fetchAllQuestions())
  }
  catch(error){
    console.log(error)
  }
}