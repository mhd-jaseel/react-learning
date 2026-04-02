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

             //useRef()
import React from 'react'
import Example1 from './component/useRef/inputFocus'
import StorePreviousValue from './component/useRef/storePreviousValue'
import Timer from './component/useRef/Timer'

export default function App() {
  return (
    <div>
      <Example1/>
      <StorePreviousValue/>
      <Timer/>

    </div>
  )
}
