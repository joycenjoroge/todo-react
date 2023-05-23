import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import profilePic from './assets/Passport Photo.jpg'
import Todo from './Todo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Description description="Hi 👋,I'm Joyce Njoroge. I am web developer with experience in HTML, CSS, JavaScript and React." designation="Managerial"/>
        <Photo profilePic={profilePic} className="rounded"/>
        <Todo/>
      </div>
    </>
  )
}
 
function Description({description}){
  return(
     <section className ="flex-center">
        <p>
          {description}
        </p>
        </section>
  )
}

function Photo({profilePic, className}){
  return(
    <section>
    <img className={className} src={profilePic} alt="Profile Picture" width="200px" height="200px"/>
</section>
  )
}

export default App
