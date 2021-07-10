import React,{useState} from "react";
import {FaThumbsUp,FaRegThumbsUp} from "react-icons/fa";
import useStickyState  from "@nicer-toolbox/use-sticky-state"
const LikeButton = ({id}) => {
    let n = `like-button-${id}`;
    const [count, setCount] = useStickyState(0,n);
  
    function handleClick(){
      setCount(count+1);
    }
    
    return (
       
      <div className= {n}>
      
     
        <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
        
        <FaRegThumbsUp onClick={() => handleClick()}/>
        <div class="ml-2">
          <span class="text-black">{count}</span>
        </div>
        </div>
  
       
         
      
      </div>
    );
};

export default LikeButton;
