import React,{ useState } from 'react'
import useTheme from '../Context/theme'

function Cart(props) {
  const { lightMode, darkMode } = useTheme()
  const [mode, setMode] = useState('dark')  
  return (
    <div className='text-white p-6 w-[60%] h-[60%] text-left rounded-3xl'>
      <div className='w-[100%] h-[70%]'>
        <img className
          ="w-full h-full"
          src='https://th.bing.com/th?id=OIP.dWjdawqTtQCdXtDuqKh1qwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' />
      </div>
      <div className='bg-slate-500 p-4 rounded-3xl m-3 flex justify-between items-center'>
        <div>
        <h1>
          {props.courseName}
        </h1>
          <p>
            Hey this is a product Where we can buy stuff and make our generation great.....
          </p>
        </div>
        <div>
          <span className='font-bold tracking-wide text-[30px]'>{props.Price}</span>
          <button className='bg-green-500 p-3 rounded-3xl shadow-lg mx-2'
            onClick={() => {
              console.log(mode)
              if (mode == 'dark') {
                console.log("yes It is dark")
                darkMode()
                setMode('light')                
              }
              else {
                console.log("working")
                lightMode()
                setMode('dark')
               
              }
            }}
          >Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Cart