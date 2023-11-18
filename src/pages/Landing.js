import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='home'>
           <section className="bg-dark text-white" >
            <div className="">
                <div className="row h- align-items-center justify-content-center" style={{height:'500px'}}>
                    <div className="col-lg-6">
                    <img height={150} src="https://i.postimg.cc/9fCdJh0s/giphy.gif" alt="" />

                        <div >
                            <h1 className='mb-2 fw-bold'></h1>
                            <h3 className='mb-3 fw-bold'></h3>
                            
                            <img height={60} src="https://i.postimg.cc/kM8syCSR/YkAw.gif" alt="" />

                            <Link to={'/quiz'} style={{textDecoration:'none'}}>
                            {/* <button className='btn py-2 px-4 btn-light fw-bold d-inline option-btn'>Start Quiz</button> */}
                            <img height={100} src="https://i.postimg.cc/VLXY1JCs/quiz-button.gif" alt="" />
                            </Link>
                            <img height={60} src="https://i.postimg.cc/kM8syCSR/YkAw.gif" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </div>
  )
}

export default Landing