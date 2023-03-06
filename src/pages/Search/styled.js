import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  min-height: 85vh;
  width: 100vw;
  display: flex;

  background-color: #000;
`;

export const AreaContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  //background-color: red;
`;

export const AreaScreenGifs = styled.div`
  height: auto;
  min-height: 30vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 5rem;
  padding-right: 5rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;

  &span {
    margin-left: 0.5rem;
  }
`;
