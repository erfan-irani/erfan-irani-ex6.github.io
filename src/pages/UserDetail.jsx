import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { userName } = useParams();

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://www.melivecode.com/api/users/" + userName)
      .then((res) => res.json())
      .then((res) => {
        setCharacter(res.user);
      });
  }, [userName]);

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        border: "1px solid red",
        margin: "20px 40px 20px 0 ",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        fontSize: "20px",
      }}
    >
      <b>User details of {character.fname}:</b>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={character.avatar}
          alt={character.fname}
          width={150}
          style={{ margin: "10px 0 10px 0" }}
        />
        <div style={{ marginBottom: "5px" }}>
          <b>First name:</b>
          {character.fname}
        </div>
        <div style={{ marginBottom: "5px" }}>
          <b>Last name:</b>
          {character.lname}
        </div>
        {character.username && (
          <div style={{ marginBottom: "5px" }}>
            <b> Username:</b> {character.username}
          </div>
        )}
        {character.email && (
          <div style={{ marginBottom: "5px" }}>
            <b>Email:</b> {character.email}
          </div>
        )}
      </div>
    </div>
  );
}
