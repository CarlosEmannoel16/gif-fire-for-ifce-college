import { useEffect, useState } from "react";
import { Container, AreaScreenGifs, AreaContent } from "./styled";
import services from "../../services/index";
import { Loading } from "../../components/Loading";
import { Card } from "../../components/Card";

export const Home = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    services
      .getTrending()
      .then((data) => {
        setGifs([]);
        setGifs(data.data.data);
        console.log(data.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Container>
      <AreaScreenGifs>
        <h1 className="colorWhite">Tendencias</h1>
        <AreaContent>
          {gifs.length ? (
            gifs.map((item, index) => (
              <Card key={index} index={index} item={item} />
            ))
          ) : (
            <Loading />
          )}
        </AreaContent>
      </AreaScreenGifs>
    </Container>
  );
};
