import React from "react";

const Bookmark = ({user, handleToogleBookmark}) => {
 
  
 
    return <>
    <button className="btn btn-primary" onClick={()=>{handleToogleBookmark(user._id)}}>
    <i className= {`"bi bi-bookmark" ${
          user.bookmark ? "bi bi-bookmark-fill" : "bi bi-bookmark"
        }`} ></i>
    </button>
    </>
   };
   
   export default Bookmark;