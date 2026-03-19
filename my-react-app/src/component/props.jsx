// function Student(props){
//     return (
//         <h2>name:{props.name}</h2>
//     )
// }

// function Student(props){
//     return(
//         <div>
//             <h2>{props.name}</h2>
//             <p>age:{props.age}</p>
//         </div>
//     )
// }
// function Student({name,age}){
//     return(
//         <div>
//             <h2>{name}</h2>
//             <h4>Age:{age}</h4>
//         </div>
//     )
// }

// export default Student

function Button({clickme}){
    return <button onClick={clickme}>clickme</button>
}
export default Button