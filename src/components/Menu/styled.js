import styled from "styled-components";
export const ContainerMenu = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  background-color: black;
  color: #fff;
`;

export const MenuLeftArea = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 5vw;
`;

export const MenuOptions = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
`;
export const MenuRightArea = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  padding-right: 5vw;
  flex-direction: column;

  justify-content: center;
  padding-right: 5vh;
`;

export const MenuOptionGroup = styled.ul`
  //background-color: violet;
  width: 100%;
  height: unset;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1rem;
`;
export const OptionMenu = styled.li`
  list-style: none;
  width: 10rem;
  display: flex;
  word-wrap: 1px;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: 1s;

  &:hover {
    opacity: 0.7;
  }
`;
