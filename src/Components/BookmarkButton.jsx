import React,{useState} from "react";
import {BsBookmarksFill,BsBookmarks} from "react-icons/bs";
import { useArrayStickyState } from "../Containers/App/redux/action";
import { useEffect } from "react";
const BookmarkButton = ({id,title}) => {
  
    let n = `bookmark-button-${id}`;
    const [bookmarkL, addBookmarkl] = useArrayStickyState('', 'bookmark');
    const [bookmark, addBookmark] = useArrayStickyState('', n);
    const [list,setList] = useState(JSON.parse(localStorage.getItem(n)));
    const[isBookmark,setIsBookmark] = useState(list?true:false);

    const deleteHandler = (title) => {
		if (list){
        var index = list.indexOf(title);
			list.splice(index, 1);

			localStorage.removeItem(n)

			localStorage.setItem('bookmark', JSON.stringify(list));
			setIsBookmark(false);
		}
   
    //setList(list.filter(bookmarklist => bookmarklist.id !== id));
  }

  const onClick=(title)=>{
    if (!isBookmark){
        var temp = {}
        temp.title = title;
        temp.id = n;
        addBookmark(title);
        addBookmarkl(temp);
        
        setIsBookmark(true)
    } else{
        deleteHandler(title)
    }

  }
    
    
    return (
       
      <div className= {n}>
      
     
        <button >
            <BsBookmarksFill color={isBookmark?"blue":"grey"} key={id} onClick={() => onClick(title)}></BsBookmarksFill>
        </button>

  
       
         
      
      </div>
    );
};

export default BookmarkButton;
