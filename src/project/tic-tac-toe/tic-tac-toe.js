import React from "react";

import homepage from "./assets/homepage.svg";
import signInPage from "./assets/sign-in-page.svg";
import roomListPage from "./assets/room-list-page.svg";
import createARoom from "./assets/create-a-room.svg";
import gamePage from "./assets/game-page.svg";
import beforeTheGame from "./assets/before-the-game.svg";
import duringTheGame from "./assets/during-the-game.svg";
import afterTheGame from "./assets/after-the-game.svg";

export const ticTacToe = {
  homepage: {
    img: <img src={homepage} className="d-block" alt="Homepage" />,
    heading: "Homepage",
    captions: ["React and Python are used for front-end and back-end development respectively."]
  },
  signInPage: {
    img: <img src={signInPage} className="d-block" alt="Sign In Page" />,
    heading: "Sign In Page",
    captions: [
      "User authentication is implemented with Flask-JWT-Extended.",
      "The database that manages data related to users, rooms and games is set up by using Flask-SQLAlchemy and PostgreSQL."
    ]
  },
  roomListPage: {
    img: <img src={roomListPage} className="d-block" alt="Room List Page" />,
    heading: "Room List Page",
    captions: [
      "Users can join any room as long as the room is not full or it doesn’t have a password that users don’t know.",
      "Users can have a chat with other users."
    ]
  },
  createARoom: {
    img: <img src={createARoom} className="d-block" alt="Create A Room" />,
    heading: "Create A Room",
    captions: [
      "Users can choose the grid size (the number of rows and columns) and also set a password.",
      "A room can be deleted only by a person who created the room."
    ]
  },
  gamePage: {
    img: <img src={gamePage} className="d-block" alt="Game Page" />,
    heading: "Game Page",
    captions: ["A user should wait for the other user to join."]
  },
  beforeTheGame: {
    img: <img src={beforeTheGame} className="d-block" alt="Before The Game" />,
    heading: "Before The Game",
    captions: [
      "As soon as the room has the second user, ‘start the game’ button is activated.",
      "Users can have a chat with the other user who is in the same room, but not with other users who are in other rooms, and it is supported by Flask-SocketIO."
    ]
  },
  duringTheGame: {
    img: <img src={duringTheGame} className="d-block" alt="During The Game" />,
    heading: "During The Game",
    captions: ["Flask-SocketIO also allows users to receive real-time information about the game."]
  },
  afterTheGame: {
    img: <img src={afterTheGame} className="d-block" alt="Before The Game" />,
    heading: "After The Game",
    captions: ["When two users close the alert box that shows the result, they can start the game again."]
  }
};
