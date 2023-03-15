import React from "react";
import "../styles/user.css";
import { motion } from "framer-motion";

const User = ({ user }) => {
  return (
    <motion.div
      animate={{ x: [30, 100, 1] }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="user"
    >
      <img src={user.picture.large} alt="" />
      <h3>
        {user.name.first}
        {user.name.last}
      </h3>
      <p>habite à {user.location.city}</p>
      <small> devellopeur dépuis {user.registered.age}ans</small>
      <br />
      <small>{user.registered.age > 10 ? "❤️" : "❤️❤️"}</small>
    </motion.div>
  );
};

export default User;
