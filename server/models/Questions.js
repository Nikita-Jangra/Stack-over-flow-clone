import mongoose from 'mongoose'

const QuestionSchema = mongoose.Schema({
    questionBody:{type: String,required: 'Question must have a body'},
    questionTitle:{type: String,required: 'Question must have a Title'},
    questionTags:{type: [String],required: 'Question must have a Tag'},
    noOfAnswers:{type :Number,default: 0},
    upVote:{type:[String],default:[]},
    downVote:{type:[String],default:[]},
    userPosted:{type:String,required:'Question must have a author'},
    userId:{type:String},
    askedOn:{type:Date,default:Date.now},
    answer:[{
        answerBody:String,
        userAnswered:String,
        userId:String,
        answeredOn: {type:Date,default:Date.now},
    },
],
});

export default mongoose.model("Question",QuestionSchema)