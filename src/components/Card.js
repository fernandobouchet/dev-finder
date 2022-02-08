import React from "react";
import "./Card.css";
import { format, parseISO } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {
  let date = format(parseISO(props.info.created_at), "PP");
  console.log(date);
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
              <h2>Joined {date}</h2>
            </div>
          </div>
          <div className="card-center">
            <div>
              <h2>Repos</h2>
              <h2>{props.info.public_repos}</h2>
            </div>
            <div>
              <h2>Followers</h2>
              <h2> {props.info.followers}</h2>
            </div>
            <div>
              <h2>Following</h2>
              <h2>{props.info.following}</h2>
            </div>
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
