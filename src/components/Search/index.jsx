import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/search/gif/${search}`);
  }, [search]);

  return (
    <input
      style={{
        border: "none",
        height: "3rem",
        color: "#000",
        fontSize: "1rem",
        backgroundAttachment: "red",
        padding: "0.6rem",
        borderRadius: "4px",
        fontStyle: "oblique",
        textTransform: "uppercase",
      }}
      onChange={(e) => {
        e.target.value.length <= 20 && setSearch(e.target.value);
      }}
      placeholder="Procure os melhores gifs"
      value={search}
      type="search"
      name=""
      id=""
    />
  );
};
