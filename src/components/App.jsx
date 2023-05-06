import React, {  useState } from "react";
// import Counter from './Counter'
// import ClassCounter from "./ClassCounter";
import './styles/App.css'
// import PostItem from "./PostItem";
import PostLIst from "./PostList";
import MyButton from "./UI/MyButton";
import MyInput from "./UI/MyInput";

function App () {
  // , setPosts

  const [posts, setPosts] =useState([
    {id:1, title:'Javascript', body:'Description'},
    {id:2, title:'Javascript 2', body:'Description'},
    {id:3, title:'Javascript 3', body:'Description'},

  ])
const [post, setPost] = useState({title:'', body:''})




const addNewPost =(e)=>{
  e.preventDefault()
  // const newPost={
  //   id:Date.now(),
  //   title,
  //   body
  // }
  setPosts([...posts, {...post, id:Date.now()}])

  setPost({title:'', body:''})

}


  return (
    <div className="App"

    >

      {/* <h1>{value}</h1> */}
      {/* <input 
        type="text" 
        value={value}
        onChange={e => setValue(e.target.value)}
      /> */}



      {/* <Counter/>

      <ClassCounter/> */}
      <form action="">
        <MyInput 
        onChange={e=> setPost({...post, title: e.target.value})}
        value= {post.title} 
        type="text" 
        placeholder="Название поста" />
       
        <MyInput 
      onChange={e=> setPost({...post, body: e.target.value})}
      value= {post.body} 
        type="text" 
        placeholder="Описание поста" />
        <MyButton onClick={addNewPost} >Создать</MyButton>
      </form>

      <PostLIst posts={posts} title='JS'/>



    </div>
  );
};

export default App;