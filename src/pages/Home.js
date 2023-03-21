import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import User from "../components/User";
import styled from "styled-components";
import "../styles/home.css";
// import { store } from "../utils/store";
import { useStore } from "react-redux";
import { UsersData, changeTheme } from "../utils/store";

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
  const [loading, setLoading] = useState(true);

  const store = useStore();

  const getUsers = async (store) => {
    await axios.get("https://randomuser.me/api/?results=24").then((res) => {
      setUsers(res.data.results);
    });
  };
  useEffect(() => {
    getUsers(store);
  }, [store]);

  store.dispatch(changeTheme());
  console.log(store.getState());

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
        {store.getState().map((user, key) => (
          <User key={key} user={user} />
        ))}
      </UsersWrappers>
    </div>
  );
};

export default Home;
