import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import UserCard from "../components/UserCard";
import PerPage from "../components/PerPage";

export default function Users() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [perPage, setPerPage] = useState(2);

  useEffect(() => {
    fetch(
      "https://www.melivecode.com/api/users?page=" +
        page +
        "&per_page=" +
        perPage
    )
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.data);
        setPageCount(res.total_pages);
      });
  }, [page, perPage]);

  return (
    <div
      style={{
        width: "100%",
        border: "1px solid red",
        margin: "20px 40px 20px 0 ",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Pagination
          pageCount={pageCount}
          page={page}
          onChange={(pageIndex) => setPage(pageIndex)}
        />

        <PerPage
          perPage={perPage}
          onChange={(dropDownChoice) => setPerPage(dropDownChoice)}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingLeft: "20px",
        }}
      >
        {characters.map((character) => (
          <UserCard key={character.id} data={character} />
        ))}
      </div>
    </div>
  );
}
