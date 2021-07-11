import React,{useState} from "react";
import {FaThumbsUp,FaRegThumbsUp} from "react-icons/fa";
import useStickyState  from "@nicer-toolbox/use-sticky-state"
import NoticePopUp from "./NoticePopUp";
const LikeButton = ({id}) => {
    let n = `like-button-${id}`;
    const [count, setCount] = useStickyState(0,n);
    const [status,setStatus] = useState(false);
  
    function handleClick(){
      setCount(count+1);
      setStatus(true)
    }
    
    return (
       
      <div className= {n}>
      
     
        <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
        
        <FaRegThumbsUp onClick={() => handleClick()}/>
        <div class="ml-2">
          <span class="text-black">{count}</span>
        </div>
        </div>
        {/* {status?(
        <NoticePopUp description={"Like"} explainerText={"You like this article"} onCancel={setStatus(false)}></NoticePopUp>
        ):null} */}
  
       
         
      
      </div>
    );
};

export default LikeButton;
