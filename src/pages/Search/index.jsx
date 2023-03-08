import { useEffect, useState } from "react";
import services from "../../services/index";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { Card } from "../../components/Card";
import { Container, AreaScreenGifs, AreaContent } from "./styled";

export const SearchResult = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState();
  const params = useParams();
  let { name } = params;

  useEffect(() => {
    if (name) {
      setLoading(true);
      if (time) clearTimeout(time);
      const timeForRequest = setTimeout(() => {
        services
          .search({ param: name, limit: 45 })
          .then((data) => {
            if (data.data.data.length) {
              setGifs(data.data.data);
              setLoading(false);
              return;
            }

            setGifs([]);
            setLoading(false);
          })
          .catch((e) => {
            console.log(e);
          });

        setTime();
      }, [2000]);
      setTime(timeForRequest);
    }
  }, [name]);

  return (
    <Container>
      <AreaScreenGifs>
        <span className="colorWhite">Resultados para: </span>
        <span className="colorSingle">&nbsp;{name}</span>
        <AreaContent>
          {!loading && gifs.length ? (
            gifs.map((item, index) => <Card key={index} item={item} />)
          ) : !gifs.length && !loading ? (
            <h1 className="colorWhite">Ops.. Nada encontrado</h1>
          ) : (
            <Loading />
          )}
        </AreaContent>
      </AreaScreenGifs>
    </Container>
  );
};
