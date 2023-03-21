import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Article from "../components/Article";
import styled from "styled-components";
import { useStore } from "react-redux";
import { getPost } from "../utils/store";

const BlogContainerWrapper = styled.div`
  display: block;
  margin: 0 auto;
`;
const Blog = () => {
  const store = useStore();

  const [articles, setArticles] = useState([]);

  async function fetchPosts(store) {
    await axios.get("http://localhost:3004/articles").then((res) => {
      setArticles(res.data);
      store.dispatch(getPost(...res.data));
    });
  }
  useEffect(() => {
    fetchPosts(store);
  }, [store]);
  store.getState().posts.map((post) => console.log(post.posts.author));

  console.log(store.getState().posts.posts);

  return (
    <div>
      <Navigation />
      <h2>Nos meilleurs Articles a la Une des médias 🎆</h2>
      <BlogContainerWrapper>
        {store.getState().posts.map((article) => (
          <Article key={article.posts.id} article={article.posts} />
        ))}
      </BlogContainerWrapper>
    </div>
  );
};
export default Blog;
