import React from 'react'
import {Link,useParams} from 'react-router-dom'
import moment from 'moment'
import QuestionsDetails from './QuestionsDetails'
import Avatar from '../../Components/Avatar/Avatar'
import { useDispatch,useSelector } from 'react-redux'
import { deleteAnswer } from '../../actions/Question'
import './Questions.css'
const DisplayAnswer = ({question,handleShare}) => {
  const dispatch=useDispatch()
  const User = useSelector((state) => state.currentUserReducer)
  const { id }=useParams()
  const handleDelete = (answerId, noOfAnswers) =>{
    dispatch(deleteAnswer(id,answerId, noOfAnswers - 1))
  }

  return (
  <div>
    {question.answer?.map((ans)=>(
    <div className='display-ans' key={ans._id}>
      <p>{ans.answerBody}</p>
      <div className='question-actions-user'>
        <div>
            <button type='button' onClick={handleShare}>Share</button>
            {
                User?.result?._result === ans?.UserId && (
                <button type='button' onClick={() =>handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
                 )
            }
        </div>
        <div>
            <p>answered {moment(ans.answeredOn).fromNow}</p>
            <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                        <Avatar backgroundColor="green" px='8px' py='5px'>{ans.userAnswered.toUpperCase().charAt(0)}</Avatar>
                        <div><p>{ans.userAnswered}</p></div>
                      </Link>     
        </div>
      </div>
    </div>
    ))}
    </div>
  )
}

export default DisplayAnswer
