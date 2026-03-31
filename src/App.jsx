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

       //useEffect

import React from 'react'
import Example from './component/useEffect/withEmpty'
import NoDependency from './component/useEffect/noDependency'
import DependencyValue from './component/useEffect/dependencyValue'

export default function App() {
  return (
    <div>
      <NoDependency/>
      <Example/>
      <DependencyValue/>

    </div>
  )
}
