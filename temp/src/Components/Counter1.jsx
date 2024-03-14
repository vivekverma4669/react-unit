import React, { useEffect, useReducer, useRef, useState } from 'react';


const Counter1 = () => {

    const [count,setCount]= useState(0);
    console.log("use State");

    const Ref= useRef(0);
    console.log(Ref);

    const intialState={
      count:0,
    }
    
    const reducer=( state, action)=>{
      switch (action.type) {
        case 'inc':
            return { count: state.count + 1 };
        case 'dec':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
    }

    const[state,dispatch]= useReducer(reducer,intialState);



  return (

    <div>

       <div style={{backgroundColor:"purple"}}>
        <h1> use state hook 1</h1>
         <h2> count:{count}</h2>
         <button onClick={()=>{setCount(count+1)}}>inc</button>
         <button onClick={()=>{setCount(count-1)}}  disabled={count==0}>dec</button>
       </div>
       <hr></hr>

       {/* useState hook  */}


       <div style={{backgroundColor:"crimson"}}>
        <h1> use Ref hook  2</h1>
         <h2> count:{count}</h2>

         <button onClick={()=>{Ref.current+=1}}>inc</button>
         <button onClick={()=>{setCount(Ref.current)}}> get count </button>
         <button onClick={()=>{Ref.current+=1}}  disabled={count==0}>dec</button>
       </div>
       <hr></hr>

       {/* {use ref hook} */}


       <div style={{backgroundColor:"blue"}}>
        <h1> use effect 3 </h1>
        {/* {
            useEffect(()=>{

            },[dependency array])
        } */}
         <h2> for side effect iam expert so no need 😂</h2>

       </div>
       <hr></hr>


      
       <div style={{backgroundColor:"silver"}}>
        <h1> useContext 4</h1>
         <h2>use contexxt  we use to get data from an context api it's </h2>

       </div>
       <hr></hr>

       <div style={{backgroundColor:"green  "}}>
        <h1> useReducer 5</h1>
        <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'inc' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'dec' })} disabled={state.count === 0}>Decrement</button>
        </div>
       <hr></hr>

       <div style={{backgroundColor:"grey"}}>
        <h1> useMemo 6</h1>
         <h2>use contexxt  we use to get data from an context api it's </h2>

       </div>
       <hr></hr>


       <div style={{backgroundColor:"black" , color: 'whitesmoke'}}>
        <h1> useCallback 7</h1>
         <h2>use contexxt  we use to get data from an context api it's </h2>

       </div>
       <hr></hr>


       <div style={{backgroundColor:"red"}}>
        <h1> use Debug value  8</h1>
         <h2>use contexxt  we use to get data from an context api it's </h2>

       </div>
       <hr></hr>

       <div style={{backgroundColor:"yellow"}}>
        <h1> useId 9</h1>
         <h2>use contexxt  we use to get data from an context api it's </h2>

       </div>
       <hr></hr>

       <div style={{backgroundColor:"red"}}>
        <h1> use layout hook 10</h1>
         <h2>use contexxt  we use to get data from an context api it's </h2>
       </div>
       <hr></hr>

       <div style={{backgroundColor:"green "}}>
        <h1> useTransition 11</h1>
         <h2>use contexxt  we use to get data from an context api it's </h2>
       </div>
       <hr></hr>

       
       




    </div>
  )
}

export default Counter1;
