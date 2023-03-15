import React, { useState } from 'react';
import "../styles/article.css";
import { Link } from 'react-router-dom';

const Article = ({article}) => {

   const  [edit,setEdit]=useState(false);
   const [editValue,setEditValue]=useState("");
   
   const CalculateCurentMinutes=(date)=>{
      setTimeout(() => {
         const date1=new Date(date);
         const date2=new Date();
         console.log("date1: "+date1+" date2: "+date2);
         let diffTime=Math.abs(date2-date1);
         console.log(diffTime);
         let diffDays=Math.ceil(diffTime/(1000*60*60*24));
         console.log(diffDays);
         document.querySelector('.time').innerHTML=diffDays;     
      },3000);
   }
   const formatDate=(date)=>{
      return  new Date(date).toLocaleDateString('fr-Fr',{
         year:"numeric",
         month:"long",
         day:"numeric",
         hour:"numeric",
         minute:"numeric"
      });
   }
   return (
      <div className='article'>
         <h3>{article.author}</h3>
         <p>{article.content}</p>
         <small>publié le {formatDate(article.date)}</small>
         <br/>
         <small className='time'>il y'a {CalculateCurentMinutes(article.date)} minutes</small>
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