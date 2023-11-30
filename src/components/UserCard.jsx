import { Link } from "react-router-dom";

export default function UserCard({ data }) {
  return (
    <Link
      to={"" + data.id}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 60px 30px 0",
        fontFamily: "sans-serif",
        fontSize: "13px",
        textDecoration: "none",
        color: "black",
      }}
    >
      <img width={150} src={data.avatar} alt={data.fname} />
      <b>
        {data.fname}
        {data.lname}
      </b>
    </Link>
  );
}
