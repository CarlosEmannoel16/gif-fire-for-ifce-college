import { Container } from "./styled";
import { Rings, BallTriangle, Hearts, Grid, Bars } from "react-loading-icons";

export const Loading = () => {
  return (
    <Container>
      <BallTriangle stroke="#ff0000" speed={1.75} width="50%" />
    </Container>
  );
};
