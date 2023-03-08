import { useEffect, useState } from "react";
import { Container, AreaScreenGifs, AreaContent } from "./styled";
import { Loading } from "../../components/Loading";
import { Card } from "../../components/Card";
import services from "../../services";
import { AreaInformation } from "../Single/styled";

export const Favorites = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites) {
      services
        .getByIds(favorites)
        .then((data) => {
          setGifs([]);
          setGifs(data.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  return (
    <>
      <Container>
        <>
          <AreaScreenGifs>
            <h1 className="colorWhite">Meus Gifs Favoritos</h1>
            <AreaContent>
              {gifs.length ? (
                gifs.map((item, index) => (
                  <Card key={index} index={index} item={item} />
                ))
              ) : (
                <Loading></Loading>
              )}
            </AreaContent>
          </AreaScreenGifs>
        </>
      </Container>
    </>
  );
};
