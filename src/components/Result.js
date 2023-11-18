import React from 'react'

function Result(props) {
  return (
    <>
    <div className='show-score'>
       score= {props.score} <br />
       total= {props.totalscore} <br />
     
    <button  id='try-button' onClick={props.tryAgain}>Try Again</button>
    </div>

    </>
  )
}

export default Result