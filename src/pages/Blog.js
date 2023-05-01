import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Article from "../components/Article";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../utils/store";

const BlogContainerWrapper = styled.div`
  display: block;
  margin: 0 auto;
`;
const Blog = () => {
  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.posts);
  useEffect(() => {
    axios.get("http://localhost:3004/articles").then((res) => {
      setArticles(res.data);
      dispatch(addBlog(res.data));
    });
  }, []);
  return (
    <div>
      <Navigation />
      <h2>Nos meilleurs Articles a la Une des médias 🎆</h2>
      <BlogContainerWrapper>
        {blogs?.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </BlogContainerWrapper>
    </div>
  );
};
export default Blog;
