import React from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList.jsx'
import AskQuestion from '../../Pages/AskQuestion/AskQuestion.jsx'
import { useSelector } from 'react-redux'
const HomeMainbar = () => {
  const questionsList =useSelector(state => state.questionsReducer)
  console.log(questionsList);
//   var questionList =[{
//     _id: 1,
//     upVotes: 3,
//     downVotes:2,
//     noOfAnswers:2,
//     questionTitle:"What is a function",
//     questionBody:"It meant tobe",
//     questionTags:["java","node.js","react js","mongodb"],
//     userPosted:"mano",
//     userId :1,
//     askedOn:'jan 1',
//     answer: [{
//       answerBody:'answer',
//       userAnswered:'kumar',
//       answeredOn: 'jan 2',
//       userId:2,
//     }]
//   },
//   {
//     _id: 2,
//     upVotes: 3,
//     downVotes:2,
//     noOfAnswers:0,
//     questionTitle:"What is a function",
//     questionBody:"It meant tobe",
//     questionTags:["java","node.js","react js","mongodb"],
//     userPosted:"mano",
//     userId :1,
//     askedOn:'jan 1',
//     answer: [{
//       answerBody:'answer',
//       userAnswered:'kumar',
//       answeredOn: 'jan 2',
//       userId:2,
//     }]
//   },
//   {
//     _id: 3,
//     upVotes: 3,
//     downVotes:2,
//     noOfAnswers:0,
//     questionTitle:"What is a function",
//     questionBody:"It meant tobe",
//     questionTags:["java","node.js","react js","mongodb"],
//     userPosted:"mano",
//     userId :1,
//     askedOn:'jan 1',
//     answer: [{
//       answerBody:'answer',
//       userAnswered:'kumar',
//       answeredOn: 'jan 2',
//       userId:2,
//     }]
//   }
// ]
    const location=useLocation()
    const user = 1;
    const navigate= useNavigate()
    const checkauth =() =>{
       if (user===null) {
        alert('login or signup to ask a question')
        navigate('/Auth')
       } 
        else{
          navigate('/Askquestion')
        }
      }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
          {location.pathname === '/' ? <h1>Top questions</h1> :<h1>All question</h1>}
          <button onClick={checkauth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList?.data === null ? 
          <h2>Loading...</h2> :
        <>
           <p>
            {questionsList?.data.length} question</p>
            <QuestionList questionList={questionsList?.data}/>
        </>
        }
      </div>
    </div>
  )
      }

export default HomeMainbar
