import React,{useState} from "react";

const  Comment =(items,id)=>{
       
      return(
        <div className="comment" id ={id}>
          <p className="comment-header">{items['username']}</p>
          <p className="comment-body">- {items.comments}</p>
          {/* <div className="comment-footer">
            <a href="#" className="comment-footer-delete" onClick={this._deleteComment}>Delete Comment</a>
          </div> */}
        </div>
      );
    }

export default Comment;