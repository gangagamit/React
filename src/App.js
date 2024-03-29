import './App.css';
import Heading from  './component/Heading';
import Pera from './component/Pera';
import Img from './component/Image';
import List from './component/List';
import Pera1 from './component/Pera1';
import CompA from './component/CompA';
import Name from './Task/Greeting';
import CardProps from './Task/CardProps';
import Props from './component/Props';
import Img1 from './Image/Img-1.jpg';
import Img2 from './Image/Img-2.jpg';
import Img3 from './Image/Img-3.jpg';
import Data from './Task/Data';
function App() {
  return (
    <>
    <div className="App flex mt-10">
      {/* <Heading/>
      <Pera/>
      <Img/>
      <List/>
      <Pera1/> */}
      {/* <CompA/> */}
      {/* <Name/>
      <Props Name="Ganga" age="24"/> */}
      {Data.map((cvalue,index,array)=>{
        console.log(cvalue,"cvalue")
        return <CardProps key={index} Name={cvalue.Name} descri={cvalue.descri} btn={cvalue.btn} img={cvalue.img}/>
      })}
    </div>
      </>
  );
}

export default App;
