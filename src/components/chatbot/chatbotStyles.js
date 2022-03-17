import styled from "styled-components";

// MAIN CONTENTS
// project page Container
export const MyContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1000px;

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

//  new reusable rows
export const Row = styled(MyContainer)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const RowNomgbt = styled(Row)`
  margin-bottom: 0 !important;
`;

export const Rowmgt8 = styled(Row)`
  margin-top: 8rem;
`;
export const Col = styled(Row)`
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;
  width: 100%;
  margin-left: auto;
  left: auto;
  right: auto;
`;

export const ColpImg = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
`;
export const MyContainerBig = styled(MyContainer)`
  width: 100%;
`;
export const MyContainerOk = styled(MyContainer)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-top: 8rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  height: auto;
`;

export const MyContTextDiv = styled.div`
  margin-left: auto;
  left: auto;
  right: auto;
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;
`;

export const MycontImgDiv = styled(MyContTextDiv)`
  width: 100%;
`;

export const MycontImgcenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
`;

export const MycontImg = styled.img`
  width: 90%;
  max-width: 500px;
  border: 0;
`;

export const MyContImgBig = styled(MycontImg)`
  width: 100%;
  max-width: 2000px;
`;

// Decorators
export const LeftVertical = styled.p`
  border-left: 0.4rem solid #ec8300;
  padding-left: 1.6rem;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #351700;
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const RowCentred = styled(Rowmgt8)`
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentBox = styled.section`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  position: absolute;
  box-sizing: content-box;
  padding: 32px 48px 0;
  margin: 0 auto;
  max-width: 1378px;
  justify-content: center;
  align-content: center;
  top: 50px;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3px;
  width: 70%;

  position: relative;
  height: auto;
  /* left: 18.89%;
  right: 18.89%; */
  /* top: 191px; */

  @media ${(props) => props.theme.breakpoints.lg} {
    /* width: 494; */
    /* left: 17.84%;
    right: 17.84; */
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3px;
    width: 95%;
    position: relative;
    height: auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    /* width: 380px; */
    /* left: 10.31%;
    right: 10.62%; */
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    /* width: 253px; */
    /* left: 8.75%;
    right: 12.19%; */
  }
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.15em;

  color: #000000;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
  }
`;

export const Paragraph = styled.p`
  align-items: flex-start;
  padding: 3px;
  width: 90%;
  position: relative;
  height: auto;
  margin-left: 70px;
  flex: none;
  flex-grow: 0;
  margin: 25px 0px;
  color: black;
  line-height: 28px;
  text-align: justify;
  font-size: 19px;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 15px;
    letter-spacing: 0.02em;
    /* left: 3px; */
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 13px;
    line-height: 22px;
    letter-spacing: 0.02em;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13px;
    line-height: 22px;
    letter-spacing: 0.02em;
    overflow-wrap: anywhere;
    width: 100%;
    padding: 0px;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const H2 = styled.h2`
  position: static;
  font-style: normal;
  font-weight: 00;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.05em;
  color: black;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  margin: 25px 0px;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  margin: 25px 0px;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const MockupFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;

  position: absolute;
  width: 870px;
  height: 852px;
  left: 293px;
  top: 739px;

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
    align-items: center;

    width: 512px;
    height: 830px;
    left: calc(50% - 512px / 2 - 21px);
    top: calc(50% - 830px / 2 - 936px);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    align-items: center;

    width: 324px;
    height: 606.7px;
    left: 80px;
    /*top: calc(50% - 606.7px/2 - 271.5px);*/
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
    padding: 10px;

    width: 292px;
    height: 599px;
    left: 14px;
    /*top: calc(50% - 599px/2 + 331.5px);*/
  }
`;

export const MockImageC = styled.img`
  width: 375px;
  height: 612px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 22px;

  /* Inside auto layout */
  order: 1;
  flex-grow: 0;
  margin: 0px 40px;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 288px;
    height: 409px;
    top: 181px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 228px;
    height: 409px;
    /* Inside auto layout */
    order: 1;
    flex-grow: 0;
    margin: 41px 0px;
    padding: 10px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 10px;

    position: static;
    width: 208px;
    height: 389px;

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 30px 0px;
  }
`;

export const PageNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;

  position: absolute;
  width: 114px;
  height: 319px;
  right: 32px;
  top: calc(50% - 319px / 2 - 963.5px);

  mix-blend-mode: luminosity;
`;

export const PageNavText = styled.div`
  position: static;
  height: 18px;
  left: 15px;
  top: 17px;

  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.11em;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 7px 0px;
`;
