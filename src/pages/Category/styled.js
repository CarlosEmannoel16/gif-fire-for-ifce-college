import styled from "styled-components";
export const Container = styled.div`
  height: auto;
  min-height: 85vh;
  width: 100vw;
  padding-left: 5vw;
  padding-right: 5vw;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const AreaContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const AreaScreenGifs = styled.div`
  height: auto;
  min-height: 85vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  margin-top: 3rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: row;

  &h1 {
    margin-bottom: 4rem;
    color: #fff;
  }
`;
