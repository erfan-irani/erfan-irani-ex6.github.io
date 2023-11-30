export default function PerPage({ perPage, onChange }) {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        fontSize: "17px",
        margin: "15px 20px 0 0",
      }}
    >
      <span style={{ fontFamily: "sans-serif", fontSize: "17px" }}>
        Users per page:
      </span>
      <select
        value={perPage}
        onChange={(event) => onChange(event.target.value)}
        style={{
          width: "50px",
          height: "30px",
          textAlign: "center",
          fontSize: "17px",
        }}
      >
        {[2, 4, 6, 8].map((perPageNumber) => (
          <option key={perPageNumber} value={perPageNumber}>
            {perPageNumber}
          </option>
        ))}
      </select>
    </div>
  );
}
