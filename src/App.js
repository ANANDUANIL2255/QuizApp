import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Quiz from './components/Quiz';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
    
  <Header></Header>
<Routes>
  {/* <Quiz></Quiz> */}
  <Route path='/quiz' element={<Quiz></Quiz>}></Route>
  <Route path='/' element={<Landing></Landing>}></Route>
  </Routes>
  <Footer></Footer>

    </div>
  );
}


export default App;
