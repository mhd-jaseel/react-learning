import Navbar from "./components/navbar";
import Parent from "./components/parent";
import Props from "./components/props";

function App(){
  return(
    <div>
     <Navbar/>
     <Props name="jaseel" age={21}/>
     <Props name="arun"/>
     <Parent name ="Mohammed jaseel "/>

    </div>
  )
}
export default App