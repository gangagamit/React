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
      <CardProps Name="David Dell" descri="The lorem text the section contain contains header having open andclose functionality"
      btn="View More" Image={Img1}/>
       <CardProps Name="Rose Bush" descri="The lorem text the section contain contains header having open andclose functionality"
      btn="View More" Image={Img2}/>
        <CardProps Name="Johns Gail" descri="The lorem text the section contain contains header having open andclose functionality"
      btn="View More" Image={Img3}/>
    </div>
      </>
  );
}

export default App;
