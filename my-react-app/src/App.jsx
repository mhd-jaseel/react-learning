import Content from "./component/content";
import Header from "./component/header";
import Footer from "./component/footer";
import Navbar from "./component/navbar";

function Me(){
  return(<div>

<Navbar/>
    
    <h1><Header/></h1>

   <Content/>
   <hr />
   <Footer/>
  
  </div>)
}
export default Me