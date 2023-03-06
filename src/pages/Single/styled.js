import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  min-height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: #000;
  align-items: center;
  justify-content: space-evenly;
`;

export const AreaInformation = styled.div`
  height: auto;
  min-height: 30vh;
  height: 85vh;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 5rem;
  padding-right: 5rem;
  margin-top: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
`;

export const AreaSingle = styled.div`
  width: 90%;
  height: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  //background-color: red;
  align-items: center;
  margin-bottom: 5rem;
`;

export const AreaScreenGifs = styled.div`
  height: 85vh;
  min-height: 30vh;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 5rem;
  padding-right: 5rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  &h1 {
    margin-bottom: 4rem;
    margin-left: 10rem;
    font-weight: 100;
  }
`;
