import React, { useState } from 'react';
import "../styles/article.css";
import { Link } from 'react-router-dom';

const Article = ({article}) => {

   const  [edit,setEdit]=useState(false);
   const [editValue,setEditValue]=useState("");
   
   const formatDate=(date)=>{
      console.log(new Date(date).toLocaleDateString());
      return  new Date(date).toLocaleDateString();
   }
   return (
      <div className='article'>
         <h3>{article.author}</h3>
         <p>{article.content}</p>
         <small>publié le {formatDate(article.date)}</small>
         <Link to={`/blog/${article.id}`}><p style={{color:"orangered"}}>en savoir plus</p> </Link>
         <span style={
            {fontStyle:"italic",
            color:"palegreen",
            cursor:"pointer"
            }}
         onClick={()=>setEdit(edit==false)
         }
         >commenter</span>
         {edit&&<input style={{border:"1px solid pink"}} 
         type='text' 
          value={editValue}
          onChange={(e)=>setEditValue(e.target.value)}
         />}
         {editValue&&<p>{editValue}</p>}
      </div>
   );
};

export default Article;