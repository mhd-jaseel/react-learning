import Content from "./component/content";
import Header from "./component/header";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import Student from "./component/props";
import Button from "./component/props";


// //component
//  export function Me(){
//   return(<div>

// <Navbar/>
    
//     <h1><Header/></h1>

//    <Content/>
//    <hr />
//    <Footer/>
  
//   </div>)
// }



//props 
//  export function App(){
//   return(
//     <div>
//       <Student name="jaseel" age={21}/>
//     </div>
//   )
// }

// export function App(){
//   const ShowAlert =()=>{
//     alert("hello !")
//   }
//   return<Button clickme={ShowAlert}/>
// }

 export function App(){
  return <Parent name ="jaseel"/>

}
function Parent({name}){
  return <Child name={name}/>;
}
 function Child({name}){
  return <h1>{name}</h1>
}

