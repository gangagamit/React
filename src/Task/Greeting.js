import React from "react"; 
function Name() { 
  let timeOfDay; 
  const date = new Date(); 
  const hours = date.getHours(); 
 
  if (hours < 12) { 
    timeOfDay = 'Good morning'; 
  } else if (hours >= 12 && hours < 20) { 
    timeOfDay = 'Good afternoon'; 
  } else { 
    timeOfDay = 'Good night'; 
  } 
 
  return ( 
    <> 
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fsurat-city.html&psig=AOvVaw2rrgnwVH5XSl3KnKnqX_Fn&ust=1711681785862000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCt3Nr9lYUDFQAAAAAdAAAAABAE" alt="image"></img>
      <h1  className="text-4xl text-center absolute top-[180px] left-[350px]">Hello :{timeOfDay}!</h1> 
    </> 
  ) 
}; 
export default Name;