// export default function Todo({task})
// {  
//     // props is read only
//     // props.task = 'new task'; is not allowed
//     // console.log(props);
//     // const {task} = props;
    

//     return (
//         <li>Task:{task}</li>
//     );  
// }

// conditional rendering option:1
// export default function Todo({task,isDone})
// {  
//     if(isDone===true)
//     {
//         return <li>Finished : {task}</li>
//     }
//     else
//     {
//         return <li>Not Finished : {task}</li>
//     }
// }
// conditional rendering option:2
// export default function Todo({task,isDone})
// {  
//     if(isDone)
//     {
//         return <li>Finished : {task}</li>
//     } 
//     return <li>Not Finished : {task}</li>
// }
// conditional rendering option:3
// export default function Todo({task,isDone})
// {  
//     // using ternary operator
//     return (
//         <li>{isDone ? 'Finished' : 'Not Finished'} : {task}
//         </li>
//     )
// }
// conditional rendering option:4 &&
// export default function Todo({task,isDone})
// {  
  
//     return (
//         <li>{task} {isDone && ': Finished'}
//         </li>
        
//     )

// }
// conditional rendering option:5 || or
// export default function Todo({task,isDone})
// {  
  
//     return (
//         <li>{task} {isDone || ':Do it'}
//         </li>

//     )

// }
// conditional rendering option:6 
export default function Todo({task,isDone})
{  
    let lisItem;
    if(isDone)
    {
        lisItem = <li>Finished : {task}</li>
    }
    else
    {
        lisItem = <li>Not Finished : {task}</li>

    }
    return lisItem;

}




