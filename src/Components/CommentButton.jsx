import React,{useState} from "react";
import {FaRegCommentDots} from "react-icons/fa";
import useStickyState  from "@nicer-toolbox/use-sticky-state"
import { useEffect } from "react";
const CommentButton = ({id}) => {
  
    let n = `comment-button-${id}`;
    const [totals, setCount] = useState(JSON.parse(localStorage.getItem(n)));
    
    
    
    return (
       
      <div className= {n}>
      
     
        <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
        
        <FaRegCommentDots />
        <div class="ml-2">
          <span class="text-black">{totals?totals.length:0}</span>
        </div>
        </div>

  
       
         
      
      </div>
    );
};

export default CommentButton;
