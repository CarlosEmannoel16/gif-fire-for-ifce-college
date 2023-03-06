import { Link } from "react-router-dom";
import { Container } from "./styled";

export const Card = ({ item, index }) => {
  console.log(index);
  return (
    <Link to={`/gif/${item.id}`}>
      <Container url={item.images.original.url}></Container>
    </Link>
  );
};
