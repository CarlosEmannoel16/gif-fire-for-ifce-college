import { Container } from "./styled";
import { Rings, BallTriangle, Hearts, Grid, Bars } from "react-loading-icons";

export const Loading = () => {
  return (
    <Container>
      <Grid stroke="#ff0000" speed={1.75} width="50%" />
    </Container>
  );
};
