import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Article from '../components/Article';

const BlogInfo = () => {
   const {id}=useParams();

   const [article,setArticle]=useState([]);
   useEffect(()=>{
      if(id){
        axios.get(`http://localhost:3004/articles/${id}`)
        .then((res)=>setArticle(res.data));
      }
   },[]);
   return (
      <div>
         <Navigation/>
         <h1 style={{textAlign:"center"}}>Bienvenu sur l'article {id}</h1>
         <Article article={article} />
      </div>
   );
};

export default BlogInfo;