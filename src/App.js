import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import RouteAll from './RouteAll';
import { fetchAllQuestions } from './actions/askQuestion';
import { fetchAllUsers } from './actions/users';
import { useDispatch } from 'react-redux';


function App() {
const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchAllQuestions())
  dispatch(fetchAllUsers())
}, [dispatch])




  return (
    <div>
      
        <Navbar/>
        <RouteAll/>
    </div>
  )
}

export default App;
