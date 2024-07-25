import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/Question.js';
import './App.css';
import AllRoutes from './AllRoutes.jsx'
function App() {
  const dispatch =useDispatch()
  useEffect(() => {
   dispatch(fetchAllQuestions())
  }, [dispatch])
  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
    </Router>
  );
}
export default App;
