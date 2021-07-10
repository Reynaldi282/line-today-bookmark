import React,{useState} from "react";
import { titleSlicer } from "../utils/helper";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import {BsBookmarkPlus} from "react-icons/bs";

import { useArrayStickyState } from "../Containers/App/redux/action";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
const Articles = ({ sections, title }) => {
  
  const [bookmark, addBookmark] = useArrayStickyState('', 'bookmark')
  // const [numofcomment,setNumOfComment = useState(JSON.parse(localStorage.getItem(n)));
  
  if (sections.length < 2) {
    return (
      <>
        {sections[0].type === 11 ? (
          <div className="w-full mb-4">
            <Carousel autoplay={true} show={1}>
              {sections[0].articles.map((item, i) => {
                return (
                  <div
                    className="place-content-center"
                    key={i}
                  >
                    
                    <img
                      className="w-full h-96 bg-contain bg-center z-0"
                      src={
                        "https://obs.line-scdn.net/" +
                        item.thumbnail.hash +
                        "/w1200"
                      }
                    />
                    <div className="center w-full h-18 bg-gray-100 mx-16 transform -translate-y-16 p-2">
                      <a href={item.url.url}className="font-medium text-2xl">
                        {titleSlicer(item.title)} 
                      </a>
                      
                    </div>
                  </div>
                );
              })}
            </Carousel>
            
          </div>
        ) : (
          <>
            {sections[0].type === 6 && sections[0].articles.length > 2 ? (
              <div className="w-full mb-4">
                <Carousel show={2} duo>
                  {sections[0].articles.map((item, i) => {
                    return (
                      <div className="w-full px-1" key={i}>
                        <img
                          className="w-full h-40 bg-contain bg-center"
                          src={
                            "https://obs.line-scdn.net/" +
                            item.thumbnail.hash +
                            "/w1200"
                          }
                        />
                        <div className="w- h-18 bg-gray-100 mx-1 transform -translate-y-16 p-2">
                          <a href={item.url.url} className="font-small text-thin">
                            {titleSlicer(item.title)} 
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            ) : (
              <div
                style={
                  sections[0].articles.length === 0 ? { display: "none" } : {}
                }
                className="w-full"
              >
                {/* additional articles */}
                <section className="bg-white m-4 p-2 rounded">
                  <h1 className="text-3xl font-semibold text-gray-800 p-6">
                    {title === undefined || title === ""
                      ? "Artikel Lainnya"
                      : title}
                  </h1>
                  <div className="grid grid-flow-row grid-cols-2 gap-3 m-4">
                    {sections[0].articles.map((item, i) => {
                      return (
                        <div
                          className="articles-item"
                          key={i}
                        >
                          <img
                            className="w-full h-60 rounded"
                            src={
                              "https://obs.line-scdn.net/" +
                              item.thumbnail.hash +
                              "/w580"
                            }
                          />
                          <a href={item.url.url} className="text-xl font-medium text-black">
                            {titleSlicer(item.title)}
                          </a>
                          <p className="text-normal text-gray-400">
                            {item.publisher}
                          </p>
                          
                          <BsBookmarkPlus key={i} onClick={() => addBookmark(item.title)}></BsBookmarkPlus>
                    
                          <div class="flex space-x-3 mb-4 text-sm font-medium">
                          <div class="flex-auto flex space-x-3">
                              <LikeButton id={item.thumbnail.hash}></LikeButton>

                          </div>
                          <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
                    
                      <Link 
                      to={{
                        pathname: `/comments/${item.thumbnail.hash}`,
                        state:{id:item.thumbnail.hash},
                     
                      }}
                    >
                      <CommentButton id={item.thumbnail.hash}></CommentButton>
                      </Link>
                   </button>
                        </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            )}
          </>
        )}
      </>
    );
  }
  return (
    <>
      {sections[0].articles.length >= 2 ? (
        <div className="w-full mb-4">
          <Carousel autoplay={true} show={1}>
            {sections[0].articles.map((item, i) => {
              return (
                <div className="place-content-center" key={i}>
                  <img
                    className="w-full h-96 bg-contain bg-center z-0"
                    src={
                      "https://obs.line-scdn.net/" +
                      item.thumbnail.hash +
                      "/w1200"
                    }
                  />
                  <div className="center w-full h-18 bg-gray-100 mx-16 transform -translate-y-16 p-2">
                    <a href={item.url.url} className="font-medium text-2xl">
                      {titleSlicer(item.title)}
                     
                    </a>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <div
          style={sections[0].articles.length === 0 ? { display: "none" } : {}}
          className="w-full"
        >
          <section className="bg-white p-4 rounded">
            <div className="grid grid-flow-row grid-cols-2 gap-3">
              {sections[0].articles.map((item, i) => {
                return (
                  <div className="articles-item-wrapper">
                    <div className="articles-item" key={i}>
                      <img
                        className="w-36 h-20 rounded-lg"
                        src={
                          "https://obs.line-scdn.net/" +
                          item.thumbnail.hash +
                          "/w580"
                        }
                      />
                      <div className="flex-grow">
                        <a href={item.url.url} className="text-l font-semibold text-black">
                          {titleSlicer(item.title)}  
                        </a>
                        <p className="text-normal text-gray-400">
                          {item.publisher}
                        </p>
                        
                        <BsBookmarkPlus key={i} onClick={() => addBookmark(item.title)}></BsBookmarkPlus>
                    </div>
                    <div class="flex space-x-3 mb-4 text-sm font-medium">
                    <div class="flex-auto flex space-x-3">
                        <LikeButton id={item.thumbnail.hash}></LikeButton>
                           
                
                        
                    </div>
                    <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
                    
                      <Link 
                      to={{
                        pathname: `/comments/${item.thumbnail.hash}`,
                        state:{id:item.thumbnail.hash},
                     
                      }}
                    >
                      <CommentButton id={item.thumbnail.hash}></CommentButton>
                      </Link>
                   </button>
                  </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}
      <div
        style={sections[1].articles.length === 0 ? { display: "none" } : {}}
        className="w-ful mt-12"
      >
        {/* under carousel */}
        <section className="w-full">
          <div className="flex flex-wrap">
            {sections[1].articles.map((item, i) => {
              return (
                <div className="w-full">

                  <div
                    className="h-full flex items-center p-4 rounded-lg"
                    key={i}
                  >
                    <img
                      className="w-36 h-16 bg-gray-100 bg-contain bg-cover flex-shrink-0 mr-4 rounded"
                      src={
                        "https://obs.line-scdn.net/" +
                        item.thumbnail.hash +
                        "/w580"
                      }
                    />
                    
                    <div className="flex-grow">
                      <a href={item.url.url}className="text-xl font-semibold text-black">
                        {titleSlicer(item.title)}
                      </a>
                      <p className="text-normal text-gray-400">
                        Dipublikasi oleh : {item.publisher}
                      </p>
                      <BsBookmarkPlus key={i} onClick={() => addBookmark(item.title)}></BsBookmarkPlus>
                    </div>
                    <div class="flex space-x-3 mb-4 text-sm font-medium">
                    <div class="flex-auto flex space-x-3">
                        <LikeButton id={item.thumbnail.hash}></LikeButton>
                           
                
                        
                    </div>
                    <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
                    
                      <Link 
                      to={{
                        pathname: `/comments/${item.thumbnail.hash}`,
                        state:{id:item.thumbnail.hash},
                     
                      }}
                    >
                      <CommentButton id={item.thumbnail.hash}></CommentButton>
                      </Link>
                   </button>
                  </div>
                         
                     
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

    </>
  );
};

export default Articles;
