import styled from 'styled-components';


// MAIN CONTENTS
export const ContentBox = styled.section`
  display: flex;
  margin-top: 50px;
  max-width: 1100px;
  position: relative;
  box-sizing: border-box;
  padding: 32px 48px 0;
  margin: 0 auto;
  max-width: 814px;
  /* place-self: flex-end; */
  align-content: center;
  align-items: center;
  top: 50px;
  justify-content: space-between;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
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
 padding: 12px;
 position: relative;
 height: max-content;
 max-width: 90%;


 @media ${(props) => props.theme.breakpoints.lg}{
  width:  494;
  /* left: 17.84%;
  right: 17.84; */

 }

 @media ${(props) => props.theme.breakpoints.md}{
  width: 380px;
  /* left: 10.31%;
  right: 10.62%; */
 }

 @media ${(props) => props.theme.breakpoints.sm} {
  width: 253px;
  /* left: 8.75%;
  right: 12.19%; */
 }
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  text-align: center;
  -webkit-letter-spacing: 0.15em;
  -moz-letter-spacing: 0.15em;
  -ms-letter-spacing: 0.15em;
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
position: static;
  top: 25.81%;
  font-size: 18px;
  line-height: 25px;
  text-align: justify;
  letter-spacing: 0.015em;
  color: black;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 25px 0px;

@media ${(props) => props.theme.breakpoints.lg} {
  font-size: 15px;
  line-height: 166.68%;
  letter-spacing: 0.02em;
  /* left: 3px; */
}

@media ${(props) => props.theme.breakpoints.md}{
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.02em;

}

@media ${(props) => props.theme.breakpoints.sm} {
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.02em;
}
`;

export const H2 = styled.h2`
 position: static;
 /* left: 0.33%;
 right: 0.33%; */
 /*top: 71.43%;*/
 /*bottom: 14.29%;*/
 /* font-family: Work Sans;
 font-style: normal; */
 font-weight: 500;
 font-size: 22px;
 line-height: 26px;
 text-align: center;
 letter-spacing: 0.05em;
 color:black;

/* Inside auto layout */

 flex: none;
 order: 2;
 align-self: stretch;
 flex-grow: 0;
 margin: 25px 0px;

 @media ${(props) => props.theme.breakpoints.lg}{
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
 }

 @media ${(props) => props.theme.breakpoints.md}{
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
 }

 @media ${(props) => props.theme.breakpoints.sm}{
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
/* left: 293px; */
/* top: 739px; */

@media ${(props) => props.theme.breakpoints.lg}{
 flex-direction: column;
 align-items: center;

 width: 512px;
 height: 830px;
 /* left: calc(50% - 512px/2 - 21px);
 top: calc(50% - 830px/2 - 936px); */
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

export const MockImageC = styled.div`
 position: static;
 width: 375px;
 height: 812px;
 left: calc(50% - 375px/2 + 227.5px);
 top: 20px;
 filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
 border-radius: 22px;

/* Inside auto layout */

 flex: none;
 order: 1;
 flex-grow: 0;
 margin: 0px 40px;

 @media ${(props) => props.theme.breakpoints.lg} {
  width: 288.75px;
  height: 629px;
  left: calc(50% - 288.75px/2);
  top: 181px;

 }

 @media ${(props) => props.theme.breakpoints.md}  {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  position: static;
  width: 228px;
  height: 409px;
  left: calc(50% - 228px/2);
  top: calc(50% - 409px/2 + 95.5px);

/* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 41px 0px;
 }

@media ${(props) => props.theme.breakpoints.sm}  {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  position: static;
  width: 208px;
  height: 389px;
  left: calc(50% - 208px/2);
  top: 198px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 30px 0px;
 }
`;


