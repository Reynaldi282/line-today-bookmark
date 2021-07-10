import React,{useState} from "react";
import {FaThumbsUp,FaRegThumbsUp} from "react-icons/fa";
import { useArrayStickyState } from "../../App/redux/action";
import useStickyState from "@nicer-toolbox/use-sticky-state";
import Comment from "../../../Components/Comment";
import { useLocation, Link } from "react-router-dom";

const CommentSection = (props) => {
   
   
    const id = props.match.params.id
  
    let n = `comment-button-`+id;
    
    const [commentList,setCommentList] = useState(JSON.parse(localStorage.getItem(n)));
   
    // const [count,setCount] = useState(commentList.length);
    // const [commentList]= useState(commentList)
    const [showComments,setShowComment] = useState(false);
    const [comment,setComment]=useArrayStickyState('',n);

    const [buttonText,setButtonText] = useState('Show Comments')
    const [inputs, setInputs] = useState({
      username: '',
      comments: ''
  });
  const { username, comments } = inputs;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleClick(){
    setShowComment(!showComments);
    if (showComments){
      console.log('here')
      setButtonText('Hide Comments');
    } 
    
    
  }

  function handleSubmit(e) {
      e.preventDefault();
  
      // setSubmitted(true);
      if (username) {

          // console.log(inputs)
          setComment(inputs);
          //setCount({totals})
          // setCount(count+1)
         
          
      } 
    }

    return (
       
      <div className= {n}>
        <div className="mt-5 md:mt-0 md:col-span-2">
       
 
          <form  onSubmit={handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input 
                            class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..."
                            type="text" 
                            required
                            name="username" 
                            value={username} 
                            onChange={handleChange} 
                            placeholder="Nama"
                          
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mt-1">
                      <textarea
                        id="comments"
                        name="comments"
                        rows={4}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Your comment"
                      
                        onChange={handleChange}
                                  />
            
                    </div>
                  </div>

                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Post Comment</button>
                </div>
              </div>
          </form>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleClick}>{buttonText}</button>
        </div>
        
        {!commentList && showComments?(
        
            <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
            <p class="font-bold">No Comments</p>
            
          </div>
        ):null}
        {showComments && commentList?(
          <>
            {commentList.map((item, i) => {
              return(
              <div className="flex-grow">
              <p className="text-base font-semibold text-black">
                {item.username}
                <p className="text-sm text-gray-400">
                {item.comments}
              </p>
              </p>
              
              
            </div>
              )
            })}
            </>
        ):
        null
        }
        
      </div>  
      </div>
  
       
         
      
          
       
   

    
    );
};

export default CommentSection;
