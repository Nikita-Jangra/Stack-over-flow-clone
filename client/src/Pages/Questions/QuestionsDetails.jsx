import React,{useState} from 'react'
import {useParams,Link,useNavigate,useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Questions.css'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import upvote from '../../Assets/upvote.png'
import downvote from '../../Assets/downvote.png'
import Avatar from '../../Components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import {postAnswer,deleteQuestion,voteQuestion} from '../../actions/Question'

const QuestionsDetails = () => {
    const {id} =useParams()
    const questionsList =useSelector(state=> state.questionsReducer)
    // console.log(id)
    // var questionList =[{
    //     _id: '1',
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
    //     _id: '2',
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
    //     _id: '3',
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
    const [Answer, setAnswer] = useState('')
    const Navigate =useNavigate()
    const dispatch =useDispatch()
    const location=useLocation()
    const url='http://localhost:3000'
    const User = useSelector(state => state.currentUserReducer)
    const handlePostAns =(e,answerLength)=>{
        e.preventDefault()
        if(User === null){
          alert('login or signup to answer a question')
          Navigate('/Auth')
        }
        else{
          if(Answer === ''){
              alert('Enter the answer before submitting')
          }
          else{
            dispatch(postAnswer({id,noOfAnswers:answerLength + 1,answerBody:Answer,userAnswered:User.result.name,userId:User.result._id}))
          }
        }
    }
    const handleShare =()=>{
       copy(url+location.pathname)
       alert('copied url:' +url+location.pathname)
    }
    const handleDelete =()=>{
       dispatch(deleteQuestion(id,Navigate))
    }
    const handleUpVote =() =>{
      dispatch(voteQuestion(id, 'upVote', User.result._id))
    }
    const handleDownVote =() =>{
      dispatch(voteQuestion(id, 'downVote', User.result._id))
    }
  return (
    <div className='question-details-page'>
      {
        questionsList.data === null ?
        <h1>Loading...</h1>:
        <>
        {
          questionsList.data.filter(question => question._id === id)?.map(question =>(
            <div key={question._id}>
              {console.log(question)}
              <section className='question-details-container'>
                 <h1>{question.questionTitle}</h1>
                 <div className='question-details-container-2'>
                 <div className='question-votes'>
                  <img src={upvote} alt='upvote' width='20px' className='votes-icon' onClick={handleUpVote}/>
                  <p>{question?.upVotes?.length-question?.downVotes?.length}</p>
                  <img src={downvote} alt='downvote'  width='20px' className='votes-icon' onClick={handleDownVote}/>
                 </div>
                 <div style={{width: "100%"}}>
                  <p className='question-body'>{question.questionBody}</p>
                  <div className="question-details-tags">
                    {
                      question.questionTags?.map((tag) =>(
                        <p key={tag}>{tag}</p>
                        ))
                    }
                  </div>
                  <div className='question-actions-user'>
                     <div>
                      <button type='button' onClick={handleShare}>Share</button>
                      {
                        User?.result?._result === question?.UserId && (
                          <button type='button' onClick={handleDelete}>Delete</button>
                        )
                      }
                     </div>
                     <div>
                      <p>asked {moment(question.askedOn).fromNow()}</p>
                      <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                        <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.toUpperCase().charAt(0)}</Avatar>
                        <div><p>{question.userPosted}</p></div>
                      </Link>
                     </div>
                  </div>
                 </div>
                 </div>
              </section>
              {
                question.noOfAnswers !== 0 &&(
                  <section>
                    <h3>{question.noOfAnswers} Answer</h3>
                  </section>

                )
              }
                <section className='post-ans-container'>
                  <h3>Your Answer</h3>
                  <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                  <form onSubmit={ (e) => {handlePostAns(e,question.answer.length)}}>
                    <textarea name='' id='' cols='30' rows='10' onChange={ e=> setAnswer(e.target.value)}></textarea>
                    <input type='Submit' value='Post Your Answer' className='post-ans-btn'/>
                  </form>
                  <p>Browse other Question tagged
                    {question.questionTags?.map((tag)=>(
                      <Link to='/Tags' className='ans-tag'> {tag} </Link>
                    ))}or 
                      <Link to='/AskQuestion' style={{textDecoration:'none',color:'#009dff'}}> ask your question</Link>
                  </p>
                </section>
            </div>
          )) 
        }
        </>
      }
    </div>
  )
}

export default QuestionsDetails
