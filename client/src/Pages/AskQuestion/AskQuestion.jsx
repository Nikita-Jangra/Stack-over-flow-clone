import React,{useState} from 'react'
import './AskQuestion.css'
import { useDispatch ,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import{askQuestion} from '../../actions/Question.js'
const AskQuestion = () => {
   const [questionTitle, setQuestionTitle] = useState('')
   const [questionBody, setQuestionBody] = useState('')
   const [questionTags, setQuestionTags] = useState('')
   const navigate=useNavigate()
   const dispatch = useDispatch()
   const User =useSelector((state)=>(state.currentUserReducer))
   const handleSubmit=(e)=>{
      e.preventDefault()
      // console.log({questionTitle,questionBody,questionTags})
      dispatch(askQuestion({questionBody,questionTitle,questionTags,userPosted:User.result.name,userId:User?.result?._id},navigate))
   }
   const handleEnter =(e) =>{
      if(e.key === 'Enter'){
         setQuestionBody(questionBody+'\n')
      }
   }
  return (
    <div className='ask-question'>
     <div className='ask-question-container'>
        <h1>Ask a public question</h1>
        {/* <h1>{questionBody}</h1> */}
        <form onSubmit={handleSubmit}>
            <div className='ask-form-container'>
                <label htmlFor='ask-ques-title'>
                   <h4>Title</h4> 
                   <p>Be specific and imagine you are asking question another person</p>
                   <input type='text' id='ask-ques-title' onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder='e.g. Is there an R function for finding the index of an element in a vector?'/>
                </label>
                <label htmlFor='ask-ques-title'>
                   <h4>Body</h4> 
                   <p>Include all the information omeone would need to answer your question</p>
                   <textarea id='ask-ques-title' onClick ={handleEnter} onChange={(e)=>{setQuestionBody(e.target.value)}} ></textarea>
                </label>
                <label htmlFor='ask-ques-title'>
                   <h4>Tags</h4> 
                   <p>Add up to 5 tags to describe what your question is about</p>
                   <input type="text" id='ask-ques-title' onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}} placeholder='e.g. (xml typescript wordpress)'/>
                </label>
            </div>
            <input type='submit' /*onClick={handleSumbit}*/ value='Review your question' className='review-btn'/>
        </form>
     </div>
    </div>
  )
}

export default AskQuestion
