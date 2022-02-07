import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {
  return (
    <>
      {props.info !== undefined && (
        <div className="card-container">
          <div className="card-top">
            <div className="avatar-image-container">
              <img
                src={props.info.avatar_url}
                alt="Github props.info Avatar"
              ></img>
            </div>
            <div>
              <h1>{props.info.name}</h1>
              <a href={props.info.html_url} target="_blank" rel="noreferrer">
                <h2>@{props.info.login}</h2>
              </a>
              <h2>Joined {props.info.created_at}</h2>
            </div>
          </div>
          <div className="card-center">
            <h2>Repos {props.info.public_repos}</h2>
            <h2>Followers {props.info.followers}</h2>
            <h2>Following {props.info.following}</h2>
          </div>
          <div className="card-bottom">
            <h2>
              <FontAwesomeIcon
                icon="fa-solid fa-location-dot"
                pull="left"
                className="icon"
              />
              {props.info.location}
            </h2>
            <h2>
              <FontAwesomeIcon
                icon="fa-solid fa-link"
                pull="left"
                className="icon"
              />
              {props.info.blog}
            </h2>
            <h2>
              <FontAwesomeIcon
                icon="fa-brands fa-twitter"
                pull="left"
                className="icon"
              />
              @{props.info.twitter_username}
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
