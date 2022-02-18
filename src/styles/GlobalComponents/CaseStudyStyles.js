import styled from "styled-components";

export const Mockup_flex1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: center;
  padding-top: 19px;
  padding-left: 19px;
  padding-right: 19px;
  padding-bottom: 165px;
  width: 95%;

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const TextBox = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 18px;
  padding-right: 0;
  margin-right: 32px;
  width: 525px;
  height: 173px;
  align-content: stretch;
  align-items: flex-start;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 10px;
    width: auto;
    height: auto;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 0px;
    width: 100%;
    height: auto;
    padding-left: 0px;
  }
`;

export const ImgContainer = styled.img`
  width: 254px;
  height: 478px;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 288.75px;
    height: 550px;
    align-self: center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 208px;
    height: 389px;
    align-self: center;
  }
`;

export const TextBoxH1 = styled.div`
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 3.5px;
  text-align: center;
  justify-content: center;
  margin: 12px;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 15px;
    align-self: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
    align-self: center;
  }
`;

export const TextBoxP = styled.div`
  font-size: 18px;
  text-align: left;
  justify-content: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  width: 507px;
  height: 110px;
  font-weight: 400;
  letter-spacing: 0.3px;
  margin: 12px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 13px;
    width: auto;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13px;
    /* width: auto; */
    overflow-wrap: anywhere;
    width: 100%;
  }
`;

// Three Mock- Ups
export const Mockups3l = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 9px;
  padding-right: 9px;

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const Mockups3Img = styled.div`
  width: 288.75px;
  height: 629px;
  margin-right: 67px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 190.33px;
    height: 432px;
    margin-right: 50px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 190.33px;
    height: 432px;
    margin-bottom: 50px;
  }
`;

export const ProjectDets = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 41;
  padding-bottom: 41;
  padding-left: 1;
  padding-right: 1;

  @media ${(props) => props.theme.breakpoints.lg} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: row;
  }
`;

export const ProjectDetsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3;
  padding-bottom: 3;
  padding-left: 0;
  padding-right: 0;
  margin-right: 44px;
  width: 258px;
  height: 101px;

  @media ${(props) => props.theme.breakpoints.lg} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const ProjectDetsH1 = styled.h1`
  font-size: 20;
  font-weight: 700;
  letter-spacing: 0.4;
  text-align: center;
  width: 258px;
  margin-bottom: 10px;

  @media ${(props) => props.theme.breakpoints.lg} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const ProjectDetp = styled.div`
  font-size: 15;
  font-weight: 300;
  line-height: 167%;
  width: 258px;
  margin-bottom: 10px;

  @media ${(props) => props.theme.breakpoints.lg} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Mockup_flex2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 56;
  padding-bottom: 56;
  padding-left: 40;
  padding-right: 40;

  @media ${(props) => props.theme.breakpoints.lg} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Mockup_flex2ImgS = styled.div`
  width: 288.75px;
  height: 629px;
  margin-right: 59px;

  @media ${(props) => props.theme.breakpoints.lg} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Mockup_flex2ImgL = styled.div`
  width: 375px;
  height: 812px;
  margin-right: 59px;

  @media ${(props) => props.theme.breakpoints.lg} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Mockup_flex2TXt = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 29;
  padding-bottom: 29;
  padding-left: 0;
  padding-right: 0;

  @media ${(props) => props.theme.breakpoints.lg} {
  }

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
export const MacbookPro1441 = styled.div`
  width: 100%;
  height: 982px;
  background: white;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 640px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Overviewlg = styled.div`
  width: 21.85%;
  height: 49px;
  display: flex;
  margin-left: 10.12%;
  margin-top: 186px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 73.31%;
    height: 379px;
    margin-left: 13.28%;
    margin-top: 53px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 73.33%;
    height: 394px;
    margin-left: 13.33%;
    margin-top: 38px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Themelinelg = styled.div`
  width: 0%;
  height: 49px;
  border-style: solid;
  border-width: 6px;
  border-color: rgba(35.52, 134.53, 250.75, 1);
`;

export const ProjectOverviewlg = styled.span`
  height: 35.12px;
  font-size: 36px;
  text-decoration: NONE;
  letter-spacing: 0em;
  line-height: 100%;
  color: black;
  display: inline;
  font-family: Open Sans;
  font-weight: 400;
  margin-left: -0.66%;
  margin-top: 2.28px;

  &::first-line {
    line-height: 1;
  }
`;

export const Infocardcontainer = styled.div`
  width: 74.12%;
  height: 192px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 13.03%;
  margin-top: 160px;

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Infocard = styled.div`
  width: 30.22%;
  height: 192px;
  border-radius: 24px 24px 24px 24px;
  background: rgba(229, 229, 229, 0.56);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 46.89%;
    height: 172px;
    border-radius: 12px 12px 12px 12px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Icon = styled.div`
  width: 11.51%;
  height: 37px;
  border-radius: 9999px;
  background: rgba(35.52, 134.53, 250.75, 1);
  margin-left: 4.13%;
  margin-top: 19px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Database = styled.div`
  width: 46.15%;
  height: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const Vectordiv = styled.div`
  width: 100%;
  height: 17px;
  background-image: url("https://storage.googleapis.com/rd-stg-designs/project/5eed9488-bb02-459f-a6b3-ce5857c05302/assets/e3ffcab2-154a-4fb3-81dd-6ead56cc3af8.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  margin-top: 3px;
`;

export const VectorImg = styled.img`
  width: 18px;
  height: 6px;
  display: block;
  margin-top: -3px;
`;

export const VectorImg2 = styled.img`
  width: 18px;
  height: 3px;
  display: block;
  margin-top: 4px;
`;

export const Infocardtext = styled.div`
  width: 85%;
  height: 78.02px;
  margin: 5.43%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Heading = styled.span`
  height: 17.01px;
  font-size: 18px;
  text-decoration: NONE;
  letter-spacing: 0em;
  line-height: 100%;
  color: rgba(35.52, 134.53, 250.75, 1);
  display: inline;
  font-family: Work Sans;
  font-weight: 400;

  &::first-line {
    line-height: 1;
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Details = styled.span`
  height: 46.07px;
  font-size: 12px;
  text-decoration: NONE;
  letter-spacing: 0.005em;
  line-height: 142.1875%;
  color: black;
  text-align: justify;
  margin-left: -0.17%;
  margin-top: -0.79px;
  display: inline;
  font-family: Open Sans;
  font-weight: 400;

  &::first-line {
    line-height: 1;
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
