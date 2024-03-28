import React from 'react'
import '../Task/StyleProp.css';
import Img1 from '../Task/Image/Img-1.jpg';
// import Img2 from '../Task/Image/Img-2.jpg';
// import Img3 from '../Task/Image/Img-3.jpg';
function CardProps(Props) {
  return (
        
    <div className='Box'>
      <div className='grid grid-cols-3'>
    
        <div className="box">
          <div className='w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 mx-5'>
              <img className='rounded outline-white-700 text-center'   src={Img1}alt='Image'/>
              {/* <img src={Img2}alt='Image'/>
              <img src={Img3}alt='Image'/> */}
              <p className='text-md text-center text-black'>{Props.Name}</p>
              <p className='text-lg text-wrap text-slate-600'>{Props.descri}</p>
              <button className="bg-sky-500/100 text-white rounded p-1">{Props.btn}</button>
          </div>
          
        </div>
        {/* card-1 end */}
      
      </div>
    </div>
  )
}

export default CardProps
