import React from "react";
import Card from "./Card";

export default function Form() {
  const [user, setUser] = React.useState({});
  let userLength = Object.keys(user).length;

  async function getInfo(userName) {
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if (!res.ok) {
        alert("Couldn't find the username in the database.");
      } else {
        const data = await res.json();
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearch(e) {
    const userName = document.getElementById("search-input").value;
    console.log(e.target.value);
    e.preventDefault();
    getInfo(userName);
  }

  return (
    <>
      <form id="form">
        <input
          id="search-input"
          type="input"
          name="button-input"
          placeholder="Github Username"
          autoComplete="off"
        ></input>
        <button type="submit" id="button-input" onClick={handleSearch}>
          Search
        </button>
      </form>
      {userLength > 0 && <Card info={user} />}
    </>
  );
}
