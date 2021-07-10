import {
    GET_DATA_WAITING,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED,
    LINE_API
} from "./constants"

import axios from "axios"

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
                
            })
            .catch( (err) => {
                dispatch(fetchDataFailure(err))
            })
    }
}


export const fetchBookmarks = (link) =>{
    return async function(dispatch) {
        axios.get(link)
            .then( (response) => {
                
            })
            .catch( (err) => {
                dispatch(fetchDataFailure(err))
            })
    }
}