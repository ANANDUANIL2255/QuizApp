import React, { useState } from 'react'
import { Data } from '../QuizData/Data'
import Result from './Result'
import { Container } from 'react-bootstrap'


function Quiz() {
   
    const [actualQuestion,setActualQuestion]=useState(0)
    const questionChange=()=>{
        pointUpdate()
        if(actualQuestion<Data.length-1){
            setActualQuestion(actualQuestion+1)
            setSelectedOption(0)

        }
        else{
             setViewResult(true)
        }
    }

    const [point,setPoint]=useState(0)
    const [selectedOption,setSelectedOption]=useState(0)

    const pointUpdate=()=>{
        if(selectedOption===Data[actualQuestion].answer){
            setPoint(point+1);
        }
      
    }

    const [viewResult,setViewResult]=useState(false)

    const resetAll=()=>{
        setViewResult(false)
        setActualQuestion(0)
        setSelectedOption(0)
        setPoint(0)
    }

    return (
        <div className='body'>
            
            <div className='container'>
                

                {
                 viewResult?(
                    <Result score={point} totalscore={Data.length} tryAgain={resetAll} >

                    </Result>
                 ):(
                  <> 
                <p className='heading-txt '>QUIZ APP</p>
                <div className="question">
                 <span id="question-number">{actualQuestion+1}:</span>
                 <span id="question-txt">{Data[actualQuestion].question}</span>
                </div>
                <div className="option-container">
                    {Data[actualQuestion].options.map((option, i) => {
                         return(
                            <button className={`option-btn ${selectedOption==i+1?"checked":null}` }key={i} onClick={()=>setSelectedOption(i+1)}>
                                {option}
                            </button>
                         )
                    })}
                </div> 
                          <button type='button'  onClick={questionChange} id='next-button'>Next</button>
                          </>)}
                         
            </div>
           
        </div>
    )
}

export default Quiz