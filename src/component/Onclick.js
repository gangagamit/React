import React from 'react'

function Onclick() {
    const shoot =()=>{
        alert("Greate Shot");
    }
  return (
    <div className='border-1 border-black bg-slate-500 text-center'>
      <button onClick={shoot}>Click me !!</button>
    </div>
  )
}

export default Onclick;
