import React, { useEffect, useState } from "react";
import "../styles/article.css";
import { Link } from "react-router-dom";

const Article = ({ article }) => {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [time, setTime] = useState(0);

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
    <div className="article">
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
    </div>
  );
};

export default Article;
