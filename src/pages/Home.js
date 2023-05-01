import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import User from "../components/User";
import styled from "styled-components";
import "../styles/home.css";
import { useDispatch, useSelector } from "react-redux";
import { initUsers } from "../utils/store";

const UsersWrappers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Home = () => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=24").then((res) => {
      setUsers(res.data.results);
      dispatch(initUsers(res.data.results));
    });
  }, []);

  return (
    <div>
      <Navigation />
      <form>
        <input
          type="search"
          className="search"
          name=""
          placeholder="rechercher un profil"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      {/* <h2>Découvrez nos profils de devellopeurs expérimentés a travers le monde</h2> */}
      <UsersWrappers>
        {usersData?.map((user, key) => (
          <User key={key} user={user} />
        ))}
      </UsersWrappers>
    </div>
  );
};

export default Home;
