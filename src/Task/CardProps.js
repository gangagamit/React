import React from 'react'
function CardProps(props) {
  return (
        
    <div className='Box'>
      <div className='grid grid-cols-3 justify-center items-center place-content-center'>
    
        <div className="box">
          <div className='w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 mx-5'>
              <img className='rounded-full w-28 h-28 outline-white-700  text-center bottom-3 border-sky-700 inline-flex items-center bg-blue-600 border-4' src={props.Image} alt='Image'/>
            
              <p className='text-md text-center text-black'>{props.Name}</p>
              <p className='text-lg text-wrap text-slate-600 text-center'>{props.descri}</p>
              <button className="bg-sky-500/100 text-white rounded p-1 text-center">{props.btn}</button>
          </div>
          
        </div>
        {/* card-1 end */}
      
      </div>
    </div>
  )
}

export default CardProps
