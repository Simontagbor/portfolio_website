import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  margin: auto;
`;

export const MyContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 100%;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 55%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 65%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
  }
`;
