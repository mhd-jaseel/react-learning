// import Toggle from "./component/Toggle";
// import Counter from "./component/Counter";
// import Form from "./component/Form";
// import DeleteList from "./component/DeleteList";
// import MiniApp from "./component/MiniApp/MiniApp";
// function App(){
//   return(
//     <div>
//       {/* <Toggle/>
//       <Counter/>
//        <Form/>
//        <DeleteList/> */}
//        <MiniApp/>
//     </div>
//   )
// }

              //use state
// import React from 'react'
// import Name from './component/useState';

//  function App() {
//   return (
//     <div>
//       <Name/>

//     </div>
//   )
// }
//  export default App;


//        //useEffect
// import React from 'react'
// import Example from './component/useEffect/withEmpty'
// import NoDependency from './component/useEffect/noDependency'
// import DependencyValue from './component/useEffect/dependencyValue'

// export default function App() {
//   return (
//     <div>
//       <NoDependency/>
//       <Example/>
//       <DependencyValue/>

//     </div>
//   )
// }

//              //useRef()
// import React from 'react'
// import Example1 from './component/useRef/inputFocus'
// import StorePreviousValue from './component/useRef/storePreviousValue'
// import Timer from './component/useRef/Timer'

// export default function App() {
//   return (
//     <div>
//       <Example1/>
//       <StorePreviousValue/>
//       <Timer/>

//     </div>
//   )
// }


             //form
// import React from 'react'
// import Form from './component/Form/Form'
// import LoginForm from './component/Form/LoginForm'

// export default function App() {
//   return (
//     <div>
//       {/* <Form/> */}
//       <LoginForm/>
//     </div>
//   )
// }


//         //style
// import React from 'react'
// import Inline from './component/style/Inline'
// import App1 from './component/style/CSSFile/app'
// import Css from './component/style/CSSModule/Css'
// import StyledComponents from './component/style/StyledComponents'

// export default function App() {
//   return (
//     <div><Inline/>
//     <App1/>
//     <Css/>
//     <StyledComponents/>
//     </div>
//   )
// }
         //Reusable components
// import React from 'react'
// import ButtonComponents from './component/Reusable Components/ButtonComponents'

// export default function App() {
//   return (
//     <div>
//       <ButtonComponents text="login"/>
//       <ButtonComponents text="singnup"/>
//       <ButtonComponents text="logout"/>
//     </div>
//   )
// }


//       //Routing
// import React from 'react'
// import BrowserRouterExample from './component/Routing/BrowserRouter'
// import RoutesExample from './component/Routing/RoutesExample'
// import RouteExample from './component/Routing/RouteExample'
// import LinkExample from './component/Routing/LinkExample'
// import NavLinkExample from './component/Routing/NavLinkExample'
// import DynamicRouteExample from './component/Routing/DynamicRouteExample'


// export default function App() {
//   return (
//     <div>
//       <BrowserRouterExample/>
//       <RoutesExample/>
//       <RouteExample/>
//       <LinkExample/>
//       <NavLinkExample/>
//       <DynamicRouteExample/>
//     </div>
//   )
// }

// students App
// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Navbar from './component/StudentNavbar/Navbar'
// import Home from './StudentsPages/Home'
// import About from './StudentsPages/About'
// import Student from './StudentsPages/Student'
// import StudentDetails from './StudentsPages/StudentDetails'
// export default function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/about' element={<About/>}></Route>
//         <Route path='/student' element={<Student/>}></Route>
//         <Route path='/students/:id' element={<StudentDetails/>}></Route>
//       </Routes>
//     </div>
//   )
// }

import Home from './BlogPages/Home'
import PostDetails from './BlogPages/PostDetails'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostDetails />} />
    </Routes>
  )
}