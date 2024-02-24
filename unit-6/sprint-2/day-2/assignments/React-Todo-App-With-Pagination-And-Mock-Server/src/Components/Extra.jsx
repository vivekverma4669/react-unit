import React,{ useState} from 'react';
import {useRef} from 'react';


const ButtonRef = ()=>{

    const ref =useRef(0);
    const [count, setCount] = useState(0);
  
   const handleCount =()=>{
   setCount(count+1);
   }
   const incRef=()=>{
   ref.current= ref.current+1;
   }

   console.log(ref, ref.current , "use ref"  );
  console.log(count , " count use state");


   return (
  <div> 

  <h1> use state count {count}</h1><button onClick ={handleCount}> use state count button</button>
  <h1> use ref count {ref.current}</h1><button onClick={incRef}> useRef count button</button>
  
  
  </div>


   )




}
export default ButtonRef;