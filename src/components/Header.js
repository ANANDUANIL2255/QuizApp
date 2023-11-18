import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div className=''>
        <Navbar  style={{backgroundColor:'grey' , color:'white'}}>
        {/* <Container> */}
         
          <Navbar.Brand href="#">
            <img
              alt=""
              src="https://i.postimg.cc/c4169LBR/quiz-comic-pop-art-style-175838-505-removebg-preview.png"
              width="100"
              height="80"
              className="d-inline-block align-top"
              
            />{' '}
         {/* <b className='fs-2' id='l'> <span style={{color:'red'}}>QUIZ APP</span></b> */}

          </Navbar.Brand>
          
        {/* </Container> */}
      </Navbar>
    </div>
  )
}

export default Header