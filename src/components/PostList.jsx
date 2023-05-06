import React from "react";
import PostItem from "./PostItem";

const PostLIst=({posts, title})=>{
    return(
        <div className="">
        <h1 style={{textAlign:'center'}}>{title}</h1>
             {posts.map(post =>
         <PostItem post={post} key={post.id}/>
        )}
        </div>
    )
}
export default PostLIst