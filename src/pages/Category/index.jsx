import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Container, AreaScreenGifs, AreaContent } from "./styled";
import services from "../../services/index";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
export const Category = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  let { name } = params;
  const caregories = {
    car: "Carros",
    cat: "Gatos",
    dog: "Cachorros",
    technology: "Tecnologia",
  };
  useEffect(() => {
    if (name) {
      setLoading(true);
      services
        .search({ param: name, limit: 45 })
        .then((data) => {
          setGifs([]);
          setGifs(data.data.data);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [name]);

  return (
    <Container>
      <AreaScreenGifs>
        <h1 className="colorWhite">{caregories[name]}</h1>
        <AreaContent>
          {!loading || gifs.length ? (
            gifs.map((item, index) => <Card key={index} item={item} />)
          ) : (
            <Loading />
          )}
        </AreaContent>
      </AreaScreenGifs>
    </Container>
  );
};
