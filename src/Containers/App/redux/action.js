import {
    GET_DATA_WAITING,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED,
    LINE_API
} from "./constants"

import axios from "axios"
import React, { useState} from "react";
export const fetchDataSuccess = (payload) =>{
    return {
        type:GET_DATA_SUCCESS,
        payload : payload
    }
}

export const fetchDataFailure = (error) => {
    return {
        type:GET_DATA_FAILED,
        error: error
    }
}



export const fetchData = () =>{
    return async function(dispatch) {
        axios.get(LINE_API)
            .then( (response) => {
                const dataCategory = response.data.result.categories
                const dataTab = response.data.result.categoryList
                const payload = {categories:[], categoryTab: []}
                const categories = dataCategory.map((categories) => {
                    var obj = {name:"", articleCategory:[]}
                    obj["articleCategory"] = categories.templates
                    obj["name"] = categories.name
                    return obj
                })
                const categoryTab = dataTab.map((categories) => {
                    var obj = {name:"" , highlight: false}
                    if(categories.highlight !== undefined){
                        obj["highlight"] = categories.highlight.enable
                    }
                    obj["name"] = categories.name
                    return obj
                })
                payload["categories"] = categories;
                payload["categoryTab"] = categoryTab
                // console.log(payload)
                dispatch(fetchDataSuccess(payload))
            })
            .catch( (err) => {
                dispatch(fetchDataFailure(err))
            })
    }
}


export const fetchArticleDetails = (link) =>{
    return async function(dispatch) {
        axios.get(link)
            .then( (response) => {
                console.log(response)
            })
            .catch( (err) => {
                dispatch(fetchDataFailure(err))
            })
    }
}




export const  useStickyState= (defaultValue, key) => {
    const [value, setValue] = useState(() => {
      const stickyValue = JSON.parse(window.localStorage.getItem(key));
    
      return stickyValue !== null
        ? stickyValue
        : defaultValue;
    });
    
    React.useEffect(() => {
        
        const data = JSON.parse(window.localStorage.getItem(key))||[];
        if (value instanceof Array){
            return;
        }
        if (data===""){
            return;
        }
        if (value ===""){
            return;
        }
        if (data.indexOf(value) === -1){
            
            
            data.push(value)
            
            window.localStorage.setItem(key, JSON.stringify(data));
            
            return;
        }
        
        // const index = getLocalStorage
        // .findIndex(user => return user == id_of_the_user_to_remove);
//         
       
      
    },[key, value]);
    return [value, setValue];
  }

export const  useArrayStickyState= (defaultValue, key) => {
    const [value, setValue] = useState(() => {
      const stickyValue = JSON.parse(window.localStorage.getItem(key));
    
      return stickyValue !== null
        ? stickyValue
        : defaultValue;
    });
    
    React.useEffect(() => {
        
        const data = JSON.parse(window.localStorage.getItem(key))||[];
        if (value instanceof Array){
            return;
        }
        if (data===""){
            return;
        }
        if (value ===""){
            return;
        }
        console.log('aa')
        console.log(value)
        console.log(data)
        if (data.indexOf(value) === -1){
            
            
            data.push(value)
            
            window.localStorage.setItem(key, JSON.stringify(data));
            
            return;
        }
        
        // const index = getLocalStorage
        // .findIndex(user => return user == id_of_the_user_to_remove);
//         
       
      
    },[key, value]);
    return [value, setValue];
}

export const  useCommentStickyState= (defaultValue, key) => {
    const [value, setValue] = useState(() => {
      const stickyValue = JSON.parse(window.localStorage.getItem(key));
    
      return stickyValue !== null
        ? stickyValue
        : defaultValue;
    });
    
    React.useEffect(() => {
        
        const data = JSON.parse(window.localStorage.getItem(key))||[];
        if (value instanceof Array){
            return;
        }
        if (data===""){
            return;
        }
        if (value ===""){
            return;
        }
        if (data.indexOf(value) === -1){
            
            
            data.push(value)
            
            window.localStorage.setItem(key, JSON.stringify(data));
            
            return;
        }
        
        // const index = getLocalStorage
        // .findIndex(user => return user == id_of_the_user_to_remove);
//         
       
      
    },[key, value]);
    return [value, setValue];
  }