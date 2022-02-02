import React from "react";
import "./Card.css";

export default function Card() {
  const [user, setUser] = React.useState({});

  async function getInfo() {
    const user = document.getElementById("search-input").value;
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    setUser(data);
  }

  return (
    <>
      <header className="header">
        <h1>devfinder</h1>
      </header>
      <form id="form">
        <input
          id="search-input"
          type="search"
          name="search-input"
          placeholder="Github Username"
          autoComplete="off"
        ></input>
        <button type="button" id="button-input" onClick={getInfo}>
          Search
        </button>
      </form>
      {user.name && (
        <div className="card-container">
          <div className="card-top">
            <div className="avatar-image-container">
              <img src={user.avatar_url} alt="Github user Avatar"></img>
            </div>
            <div>
              <h1>{user.name}</h1>
              <a href={user.html_url}>
                <h2>@{user.login}</h2>
              </a>
              <h2>Joined {user.created_at}</h2>
            </div>
          </div>
          <div className="card-center">
            <h2>Repos {user.public_repos}</h2>
            <h2>Followers {user.followers}</h2>
            <h2>Following {user.following}</h2>
          </div>
          <div className="card-bottom">
            <h2>{user.location}</h2>
            <h2>{user.blog}</h2>
            <h2>{user.twitter_username}</h2>
          </div>
        </div>
      )}
    </>
  );
}
