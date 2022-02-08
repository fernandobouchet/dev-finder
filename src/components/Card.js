import React from "react";
import "./Card.css";
import { format, parseISO } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {
  let date = format(parseISO(props.info.created_at), "PP");

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
              <h2 id="main-name">{props.info.name}</h2>
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
            <div>
              <FontAwesomeIcon
                icon="fa-solid fa-location-arrow"
                pull="left"
                className="icon"
                size="2x"
              />
              {props.info.location ? (
                <h2>{props.info.location}</h2>
              ) : (
                <h2 className="not-available">Not Available</h2>
              )}
            </div>
            <div>
              <FontAwesomeIcon
                icon="fa-solid fa-link"
                pull="left"
                className="icon"
                size="2x"
              />
              {props.info.blog ? (
                <a
                  href={props.info.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="bottom-link"
                >
                  <h2>{props.info.blog}</h2>
                </a>
              ) : (
                <h2 className="not-available">Not Available</h2>
              )}
            </div>
            <div>
              <FontAwesomeIcon
                icon="fa-brands fa-twitter"
                pull="left"
                className="icon"
                size="2x"
              />
              {props.info.twitter_username ? (
                <a
                  href={`https://twitter.com/${props.info.twitter_username}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bottom-link"
                >
                  <h2>{`@${props.info.twitter_username}`}</h2>
                </a>
              ) : (
                <h2 className="not-available">Not Available</h2>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
