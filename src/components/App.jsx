import React, { useState } from "react";
// import Counter from './Counter'
// import ClassCounter from "./ClassCounter";
import './styles/App.css'
// import PostItem from "./PostItem";
import PostLIst from "./PostList";
import MyButton from "./UI/MyButton";

function App () {

    // const [value, setValue] =useState('текст в инпуте')
  const [posts, setPosts] =useState([
    {id:1, title:'Javascript', body:'Description'},
    {id:2, title:'Javascript 2', body:'Description'},
    {id:3, title:'Javascript 3', body:'Description'},

  ])




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
        <input type="text" placeholder="Название поста" />
        <input type="text" placeholder="Описание поста" />
        <MyButton >Создать</MyButton>
      </form>

      <PostLIst posts={posts} title='JS'/>



    </div>
  );
};

export default App;