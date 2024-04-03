import './App.css';
import Heading from  './component/Heading';
import Pera from './component/Pera';
import Img from './component/Image';
import List from './component/List';
import Pera1 from './component/Pera1';
import CompA from './component/CompA';
// import Name from './Task/Greeting';
// import CardProps from './Task/CardProps';
import Props from './component/Props';
// import Img1 from './Image/Img-1.jpg';
// import Img2 from './Image/Img-2.jpg';
// import Img3 from './Image/Img-3.jpg';
// import Data from './Task/Data';
// import Title from './Task/Title';
// import Footer from './Task/Footer';
import One from './component/One';
import Two from './component/Two';
import Onclick from './component/Onclick';
import React,{ useState } from 'react';
function App() {
  const [count,setCount] = useState(0)
  const myCount= ()=>{
    console.log("click")
    setCount(count + 1)
  }
  return (
    <>
      
      {/* <Title/> */}
    <div className="App">
      <h3>{count}</h3>
      <button onClick={myCount}>Click Me!!</button>
      {/* <Heading/>
      <Pera/>
      <Img/>
      <List/>
      <Pera1/> 
      <CompA/> */}
       {/* <Name/> */}
       {/* {((false)?<One/>:<Two/>)}
      <Props Name="Ganga" age="24"/> */}
      <Onclick/>
      {/* {Data.map((cvalue,index,array)=>{
        console.log(cvalue,"cvalue")
        return <CardProps key={index} Name={cvalue.Name} descri={cvalue.descri} btn={cvalue.btn} img={cvalue.img}/>
      })} */}
      
    </div>
    {/* <div className='App flex mt-5'>
    {Data.map((cvalue,index,array)=>{
        console.log(cvalue,"cvalue")
        return <CardProps key={index} Name={cvalue.Name} descri={cvalue.descri} btn={cvalue.btn} img={cvalue.img}/>
      })}
    </div> */}
    {/* <Footer/> */}
      </>
  );
}

export default App;
