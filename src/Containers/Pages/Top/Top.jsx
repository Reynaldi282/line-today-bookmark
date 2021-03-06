import React from 'react';
import {useSelector} from "react-redux";
import Articles from '../../../Components/Articles';
import MainSection from '../../../Components/MainSection';

const Top = () => {
    const appState = useSelector((state) => state.appState)
    console.log(appState)
    
    return (
        <MainSection>
            {
                appState.categories[0].articleCategory.map((article, i) => {
                    if (article.type !== 56 && article.type !== 86 && 
                        article.type !== 57 && article.sections[0].type !== 12){
                        return <Articles sections={article.sections} title={article.title} key={i}/>     
                    }
                    
                })
            }
            
        </MainSection>
    )
}

export default Top
