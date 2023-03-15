import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const UserWrapper = styled.div`
  width: 90%;
  height: 250px;
  padding: 10px;
  background: ${({ color }) => color};
  margin: 10px;
  text-align: center;
  border-radius: 20px;
  transition: 0.3s;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
`;
const User = ({ user }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <UserWrapper color={theme}>
      <motion.div
        animate={{ x: [30, 100, 1] }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="user"
      >
        <Image src={user.picture.large} alt="" />
        <h3>
          {user.name.first}
          {user.name.last}
        </h3>
        <p>habite à {user.location.city}</p>
        <small> devellopeur dépuis {user.registered.age}ans</small>
        <br />
        <small>{user.registered.age > 10 ? "❤️" : "❤️❤️"}</small>
      </motion.div>
    </UserWrapper>
  );
};

export default User;
