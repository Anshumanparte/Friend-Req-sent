import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const btnRef = useRef(null)
  const [check, setcheck] = useState(true)
  const clickHandler = ()=>{
    if(check){
      btnRef.current.style.backgroundColor = 'gray'
    btnRef.current.innerHTML = 'Sending..'

    setTimeout(()=>{
      btnRef.current.innerHTML = 'Sending...'
      setTimeout(()=>{
       btnRef.current.innerHTML = 'Sending....'
        setTimeout(()=>{
        btnRef.current.innerHTML = 'Sending.....'
        setcheck(false)
        },1000)
      },1000)
    },1000)
    setTimeout(()=>{
      btnRef.current.innerHTML = 'Cancel'
      btnRef.current.style.backgroundColor = 'red'
    },4000)
    
    }else{
      btnRef.current.style.backgroundColor = '#1D4ED8'
      btnRef.current.innerHTML ='Add Friend'
      setcheck(true)
    }
    
    
  }
  return (
    <>
      <div className='flex bg-slate-800 h-screen w-full justify-center items-center'>
        <div className='bg-white h-96 w-96 rounded-xl flex flex-col items-center text-center p-5 justify-evenly'>
          
          <img 
          className='w-32 h-32 object-cover object-center rounded-full'
           src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h1>Tom jack</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem.</p>
            <button 
            ref={btnRef}
            onClick={clickHandler}
            className='px-8 py-3 bg-blue-700 text-white rounded-xl active:scale-95'>Add Friend</button>
        </div>
      </div>
    </>
  )
}

export default App
