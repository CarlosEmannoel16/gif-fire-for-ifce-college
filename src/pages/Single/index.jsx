import { useEffect, useState } from "react";
import { Container, AreaScreenGifs, AreaInformation } from "./styled";
import services from "../../services/index";
import { Link, useParams } from "react-router-dom";
import { AreaSingle } from "./styled";
import { Loading } from "../../components/Loading";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
export const Single = () => {
  const [gif, setGif] = useState({});

  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const params = useParams();
  let { id } = params;

  useEffect(() => {
    if (id) {
      setLoading(true);
      const getById = services.getById;
      getById(id)
        .then((data) => {
          setGif({});
          setGif(data.data.data);

          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites) {
      if (favorites.includes(id)) {
        setIsFavorite(true);
      }
    }
  }, []);

  const addInfavorites = (id) => {
    setIsFavorite(true);
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites) {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
      return;
    }
    localStorage.setItem("favorites", JSON.stringify([id]));
    return;
  };

  const removefavorites = (id) => {
    setIsFavorite(false);
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites) {
      const newFavorites = favorites.filter((item) => {
        if (item !== id) return item;
      });

      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
      return;
    }
  };

  return (
    <>
      {!loading || Object.keys(gif).length ? (
        <Container>
          <AreaScreenGifs>
            <AreaSingle>
              <img className="gifSingle" src={gif.images.downsized_large.url} />
              {isFavorite ? (
                <span
                  style={{
                    color: "white",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                  }}
                >
                  <MdOutlineFavorite
                    style={{ color: "red", fontSize: "3rem" }}
                    onClick={() => {
                      removefavorites(gif.id);
                    }}
                  />{" "}
                  <br />
                  Você gostou desse gif!
                  <br />
                  <Link to="/favorites"> ver meus gifs favoritos </Link>
                </span>
              ) : (
                <span style={{ color: "white", fontSize: "0.9rem" }}>
                  Gostou? <br />
                  <MdOutlineFavoriteBorder
                    style={{
                      color: "white",
                      fontSize: "3rem",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      addInfavorites(gif.id);
                    }}
                  />
                  <br />
                  Que tal salvar nos favoritos?
                </span>
              )}
            </AreaSingle>
          </AreaScreenGifs>
          <AreaInformation>
            <h1 className="colorSingle">{gif && gif.title}</h1>
          </AreaInformation>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};
