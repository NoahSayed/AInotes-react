import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createcard(notess){
  return <Note
key = {notess.id}
title = {notess.title}
content = {notess.content} 
  />
}

function App() {
  
  return (
    <div>
      <Header />
      {notes.map(createcard)}
      <Footer />
    
    </div>


);
}

export default App;
