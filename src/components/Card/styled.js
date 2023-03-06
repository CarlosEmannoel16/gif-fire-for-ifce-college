import styled from "styled-components";

export const Container = styled.div`
  height: 15rem;
  width: 15rem;
  box-shadow: 1px 1px 1px #00000040;
  font-size: 1rem;
  display: flex;
  background-color: #dddddd40;
  background-image: url(${({ url }) => url});
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 300;

  background-size: 120% 120%;
  transition: 100ms;

  &:hover {
    transform: scale(1.11);
    background-size: 100% 100%;
    box-shadow: 2px 2px 10px #00000090;
    border-radius: 5px;
  }
`;
