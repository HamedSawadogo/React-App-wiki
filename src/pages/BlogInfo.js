import React, { useEffect, useState } from "react";
import { Navigate, redirect, useNavigate, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import axios from "axios";
import Article from "../components/Article";

const BlogInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState([]);
  useEffect(() => {
    if (isNaN(id)) {
      navigate("/error", { replace: true });
    }
    try {
      axios.get(`http://localhost:3004/articles/${id}`).then((res) => {
        setArticle(res.data);
        console.log(res);
      });
    } catch (error) {
      navigate("/error", { replace: true });
    }
  }, []);
  return (
    <div>
      <Navigation />
      <h1 style={{ textAlign: "center" }}>Bienvenu sur l'article {id}</h1>
      <Article article={article} />
    </div>
  );
};

export default BlogInfo;
