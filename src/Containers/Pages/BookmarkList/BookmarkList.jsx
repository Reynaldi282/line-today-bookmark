
import React, { useState,useEffect } from "react";
import Card from "@material-tailwind/react/Card";


import {useSelector} from "react-redux";
// import Articles from '../../../Components/Articles';
import MainSection from '../../../Components/MainSection';
import {FaTrash} from "react-icons/fa";
const BookmarkList = () => {
    const [list,setList] = useState(JSON.parse(localStorage.getItem('bookmark')));
    

    const deleteHandler = (id) => {
      // console.log(id)
      list.splice(id, 1);



      localStorage.setItem('bookmark', JSON.stringify(list));
     
      setList(list.filter(bookmarklist => bookmarklist.id !== id));
    }

    return (
        <>
           {list.length > 0  ? (
            <div className="grid grid-flow-row grid-cols-2 gap-3 m-4">
              
                {list.map((item, i) => {
                  return (
                    <Card>
                        <p className="text-xl font-medium text-black">
                            {item}
                        </p>
                        <FaTrash onClick = {() => deleteHandler(i)}></FaTrash>
                    </Card>
                  );
                })}
              
            </div>
          ) : (
            <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div class="flex">
              <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
              <div>
                <p class="font-bold">No Bookmark</p>
                
              </div>
            </div>
          </div>


          )}
           </>
          );
    
          }

export default BookmarkList
