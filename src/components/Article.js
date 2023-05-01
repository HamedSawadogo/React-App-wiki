import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ArticleWrapper = styled.div`
  background: ${({ color }) => color};
  padding: 10px;
  border-radius: 5px;ùù
  width: 90%;
  height: auto;
  display: block;
  margin: 10px auto;
  border: 1px solid whitesmoke;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;
const Article = ({ article }) => {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [time, setTime] = useState(0);

  const { theme } = useContext(ThemeContext);
  setInterval(() => {
    const CalculateCurentMinutes = (date) => {
      const date1 = new Date(date);
      const date2 = new Date();
      let diffTime = Math.abs(date2 - date1);
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 24));
      setTime(new Date(diffTime).getMinutes());
    };
    CalculateCurentMinutes(article.date);
  }, 4000);
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("fr-Fr", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };
  return (
    <ArticleWrapper color={theme}>
      <h3>{article.author}</h3>
      <p>{article.content}</p>
      <small>publié le {formatDate(article.date)}</small>
      <br />
      <small className="time">il y'a {time} minutes</small>
      <Link to={`/blog/${article.id}`}>
        <p style={{ color: "orangered" }}>en savoir plus</p>{" "}
      </Link>
      <span
        style={{ fontStyle: "italic", color: "palegreen", cursor: "pointer" }}
        onClick={() => setEdit(edit == false)}
      >
        {" "}
        commenter
      </span>
      {edit && (
        <input
          style={{ border: "1px solid pink" }}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      )}
      {editValue && <p>{editValue}</p>}
    </ArticleWrapper>
  );
};

export default Article;
