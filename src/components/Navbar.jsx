import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          width: "max-content",
          paddingLeft: "0",
          margin: "20px 40px",
        }}
      >
        <li
          style={{
            padding: "20px 150px 20px 150px",
            border: "1px solid red",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </li>
        <li
          style={{
            padding: "20px 50px 20px 50px",
            border: "1px solid red",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          <Link
            to="/aboutus"
            style={{ textDecoration: "none", color: "black" }}
          >
            About US
          </Link>
        </li>
        <li
          style={{
            padding: "20px 50px 20px 50px",
            border: "1px solid red",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          <Link to="/users" style={{ textDecoration: "none", color: "black" }}>
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
}
