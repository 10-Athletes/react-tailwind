import React from "react";
import {
  Link
} from "react-router-dom";

function NewsFeedNav(props) {
  return (
    <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-white text-lg title-font font-medium">{props.cardTitle}</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">{props.cardDescription}</p>
            <Link to={props.cardLink} className="mt-3 text-indigo-400 inline-flex items-center">{props.cardLinkTitle}
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    
  )
 };
 function NewsFeedWall() {
  return (
    <div className="p-2 md:w-1/4">
        <div className="flex rounded-lg bg-gray-800 bg-opacity-60 p-4 flex-col">
          
        <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">Matches</h2>
      <h1 className="sm:text-2xl text-1xl font-medium title-font text-white">Sports Name</h1>
        </div>
        
      </div>
    
  )
 };

export default function NewsFeed() {
    return (
<section className="text-gray-400 bg-gray-900 body-font">
  <div className=" container px-5 py-24 md:mx-5 mx-12 flex flex-wrap">
    <div className="flex flex-col text-left w-full mb-20">
      <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">Sports nearby you</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Matches</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <NewsFeedWall  />
      <NewsFeedWall  />
      <NewsFeedWall  />
      <NewsFeedWall  />
      <NewsFeedWall  />
      <NewsFeedWall  />
      <NewsFeedWall  />
      
    </div>
  </div>
</section>

)}