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
    height: fit-content;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 640px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Overviewlg = styled.div`
    width: 100%;
    height: 49px;
    display: flex;
    /* margin-left: 10.12%; */
    /* margin-top: 186px; */
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 60px;
    /* margin-left: 13.28%; */
    margin-top: 53px;
    flex-direction: row;
    justify-content: flex-start;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    margin-left: 0%;
    margin-top: 27px;
    flex-direction: row;
    align-items: center;
  }
`;

export const Themelinelg = styled.div`
  width: 0%;
  height: 49px;
  border-style: solid;
  border-width: 6px;
  border-color: rgba(35.52, 134.53, 250.75, 1);
  @media ${(props) => props.theme.breakpoints.md} {
    height: 32px;
    border-style: solid;
    border-width: 8px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 32px;
    border-style: solid;
    border-width: 8px;
  }
`;

export const ProjectOverviewlg = styled.span`
    height: 35.12px;
    font-size: 30px;
    text-decoration: NONE;
    letter-spacing: 0em;
    line-height: 100%;
    color: black;
    display: inline;
    font-family: Open Sans;
    font-weight: 400;
    margin-left: 0.66%;
    margin-top: 2.28px;

  &::first-line {
    line-height: 1;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 16.58px;
    font-size: 17px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 16.58px;
    font-size: 17px;
    margin-top: 0.94px;
  }
`;

/* misssing overviewnflex component */
export const Overviewflex = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 365px;
    margin-bottom: 25%;

   @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: fit-content;
    /* margin-left: 1.28%; */
    margin-top: 53px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media ${(props) => props.theme.breakpoints.sm} {

  }

`;
export const InfocardGroup = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    /* margin: 2.03%; */
    /* margin-top: 48px; */
    /* flex-wrap: wrap; */
`;
export const Infocardcontainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin: 2.03%; */
    /* margin-top: 48px; */
    /* flex-wrap: wrap; */
    align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 197px;
    flex-direction: row;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 73.33%;
    height: 394px;
    margin-left: 13.33%;
    margin-top: 38px;
    flex-direction: column;
  }
`;

export const Infocard = styled.div`
    width: 277px;
    height: 178px;
    border-radius: 24px 24px 24px 24px;
    background: rgba(229,229,229,0.56);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 21px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 48.89%;
    height: 172px;
    border-radius: 12px 12px 12px 12px;
    margin: 0px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 172px;
    border-radius: 12px 12px 12px 12px;
  }
`;

export const Icon = styled.div`
    width: 37px;
    height: 37px;
    border-radius: 9999px;
    background: rgba(35.52,134.53,250.75,1);
    margin-left: 4.13%;
    margin-top: 19px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  @media ${(props) => props.theme.breakpoints.md} {

  }
  @media ${(props) => props.theme.breakpoints.sm} {
  
  }
`;

export const Database = styled.div`
  width: 46.15%;
  height: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  @media ${(props) => props.theme.breakpoints.md} {

}
@media ${(props) => props.theme.breakpoints.sm} {

}
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
    height: 84px;
    margin: 4%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 91.75%;
    height: 86.1px;
    margin: 5.37%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 91.75%;
    height: 86.1px;
    margin: 5.37%;
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
    height: 13.23px;
    font-size: 14px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 13.23px;
    font-size: 14px;
  }
`;

export const Details = styled.span`
  height: auto;
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
    height: 63px;
    font-size: 12px;
    margin-left: -0.23%;
    margin-top: -0.65px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 63px;
    font-size: 12px;
    margin-left: -0.23%;
    margin-top: -0.65px;
  }
`;

// understanding the user
export const Themetitle = styled.div`
  width: 100%;
    height: 49px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 32px;
    /* margin-left: 10.29%; */
    margin-top: 96px;
    /* align-self: flex-start; */
    /* display: flex; */
    justify-content: flex-start;
    flex-direction: row;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 65.01%;
    height: 32px;
    margin-left: 10%;
    margin-top: 93px;
  }
`;

export const ThememarkerRed = styled.div`
 width: 15px;
    height: 49px;
    border-width: 12px;
    border-color: rgba(250.75,35.52,74.26,1);
    /* display: flex; */
    background-color: #fb244a;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 32px;
    border-width: 8px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 32px;
    border-style: solid;
    border-width: 8px;

  }
`;

export const ProjectOverviewh1sm5 = styled.span`
   height: 36px;
  font-size: 30px;
  line-height: 100%;
  color: black;
  margin-left: 0.31%;
  margin-top: 1.4px;
  display: inline;
  font-family: Open Sans;
  font-weight: 400;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 17px;
    font-size: 17px;
    margin-left: 0.54%;
    margin-top: 0.52px;
    display: inline;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 17px;
    font-size: 17px;
    margin-left: 0.54%;
    margin-top: 0.52px;
    display: inline;
  }
`;

export const RedThemeContainer = styled.div`
width: 95.71%;
    height: 225px;
    /* margin-left: 4.29%; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 95.19%;
    height: 292px;
    margin-top: 119.5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 66.11%;
    height: 190px;
    margin-top: 102px;
  }
`;

export const RedFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 241px;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 48.06%;
    height: 130px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 136px;
  }
`;

export const DetailCard = styled.div`
width: 70.74%;
  height: 112px;
  border-radius: 12px 12px 12px 12px;
  background: rgba(229,229,229,0.56);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 78.95%;
    height: 125px;
    margin: 6px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 55.8%;
    height: 108px;
  }
`;

export const IconRed = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 9999px;
  background: rgba(250.75, 35.52, 74.26, 1);
  margin-top: 19px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 37px;
    height: 37px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 37px;
    height: 37px;

  }
`;

export const H1_R = styled.span`
  height: 13.32px;
  font-size: 18px;
  text-decoration: NONE;
  letter-spacing: 0em;
  line-height: 100%;
  color: rgba(94, 94, 94, 1);
  margin-left: 0.9%;
  margin-top: 24.73px;
  display: inline;
  font-family: Work Sans;
  font-weight: 400;

  &::first-line {
    line-height: 1;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    height: 8.88px;
    font-size: 12px;
    margin-top: 22.99px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 8.88px;
    font-size: 12px;
    margin-top: 13.99px;

  }
`;

export const Quote = styled.span`
  height: 26.6px;
  font-size: 28px;
  text-decoration: NONE;
  letter-spacing: 0em;
  line-height: 100%;
  color: rgba(94, 94, 94, 1);
  font-style: italic;
  text-align: center;
  margin-top: 1.33px;
  display: inline;
  font-family: Work Sans;

  &::first-line {
    line-height: 1;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 15.2px;
    font-size: 16px;
    margin-left: 15.82%;
    margin-top: 74.24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 27.35px;
    font-size: 13px;
    margin-left: 19.56%;
    margin-top: 84.63px;
  }
`;

// New components - userbility study
export const Line4 = styled.div`
  width: 0%;
  height: 49px;
  border-style: solid;
  border-width: 12px;
  border-color: rgba(246, 201, 14, 1);
  @media ${(props) => props.theme.breakpoints.md} {
    
  }
  @media ${(props) => props.theme.breakpoints.sm} {
   

  }
`;

export const CardContainer = styled.div`
  width: 65.98%;
  height: fit-content;
  margin-top: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 90.15%;
    height: 327.58px;
    margin-top: 96.5px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
   }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 85.31%;
    height: 287.58px;
    margin-top: 89.5px;
  }
`;

export const CardGroup1 = styled.div`
  width: 48%;
  height: 227.87px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 145.5px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 0px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {

  }
`;

export const GInfocard0 = styled.div`
  width: 45.48%;
  height: 191.87px;
  border-radius: 12px 12px 12px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  place-self: center;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 40.5%;
    height: 120.5px;
    align-items: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Icon2 = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 9999px;
  background: rgba(246, 201, 14, 1);
  margin-left: 29.37%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;


export const H1user1 = styled.span`
  height: 17.86px;
  font-size: 19px;
  text-decoration: NONE;
  letter-spacing: 0em;
  line-height: 100%;
  color: black;
  font-weight: 500;
  margin-top: -0.96px;
  display: inline;
  font-family: Work Sans;

  &::first-line {
    line-height: 1;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 11.28px;
    font-size: 12px;
    margin-left: -0.62%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {

  }
`;

export const Puser = styled.span`
  height: 17.01px;
  font-size: 18px;
  text-decoration: NONE;
  letter-spacing: 0em;
  line-height: 100%;
  color: black;
  margin-top: -1.27px;
  display: inline;
  font-family: Work Sans;
  font-weight: 400;

  &::first-line {
    line-height: 1;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 11.34px;
    font-size: 12px;
    margin-top: -0.51px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
   

  }
`;

/* new component pain points */
export const PCardCont = styled.div`
  width: 79.97%;
  height: 400px;
  border-radius: 24px 24px 24px 24px;
  background: rgba(229,229,229,0.56);
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 117px;
  align-items: center;
  margin-bottom: 350px;
  align-content: center;
  justify-content: space-evenly;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 1060px;
    margin-top: 73px;
    margin-bottom: 487px;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    font-size: 12px;
    border-radius: 0px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 1102px;
    border-radius: 0px;
    flex-direction: column;
    margin-top: 33px;
  }
`;

export const Pcard = styled.div`
  width: 18.34%;
  height: 285px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 12px 12px 12px 12px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 48%;
    height: 238px;
    align-self: center;
    margin: 24px;
    align-content: center;
    align-items: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 71.95%;
    height: 220px;

  }
`;

export const PcardIconcont = styled.div`
  width: 37px;
  height: 37px;
  margin-top: 18.35px;
  border-radius: 9999px;
  background: rgba(250.75, 35.52, 74.26, 1);
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.md} {
    
    margin-top: 9.85px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
   


  }
`;

export const Numbers = styled.span`
  height: 15.84px;
  font-size: 24px;
  text-decoration: NONE;
  letter-spacing: 0em;
  line-height: 100%;
  color: white;
  text-align: center;
  margin-top: 8.66px;
  display: inline;
  font-family: Work Sans;
  margin-left: -5.13%;

  &::first-line {
    line-height: 1;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 12.06px;
    font-size: 18px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
   

  }
`;

export const PpH1 = styled.span`
  height: 13.07px;
  font-size: 18px;
  text-decoration: NONE;
  letter-spacing: 0em;
  line-height: 100%;
  color: rgba(250.75, 35.52, 74.26, 1);
  text-align: center;
  margin-top: 20.33px;
  display: inline;
  font-family: Work Sans;
  font-weight: 400;

  &::first-line {
    line-height: 1;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 8.71px;
    font-size: 12px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
   
   margin-left: 0.94%;
  }
`;

export const PpP = styled.div`
  width: 158.46px;
  height: 156.7px;
  border-radius: 12px 12px 12px 12px;
  margin-top: 10.7px;
  display: flex;
  align-items: center;
  color: black;
  justify-content: space-evenly;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 144.31px;
    height: 81.17px;
    margin-left: 2.84%;
    margin-top: 43.41px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
   width: 185.89px;
   height: 78.71px; 
   margin-left: 2.46%;
   margin-top: 42.41px;

  }
`;

export const parag = styled.p`
  height: 78.71px;
  font-size: 12px;
  text-decoration: NONE;
  letter-spacing: 0em;
  line-height: 100%;
  color: black;
  text-align: center;
  display: inline;
  font-family: Work Sans;
  font-weight: 400;
  margin-top: -0.75px;

  &::first-line {
    line-height: 1;
  }
  @media ${(props) => props.theme.breakpoints.md} {
   height: 81.17px;
   font-size: 12px;
   margin-top: -0.75px; 
  }
  @media ${(props) => props.theme.breakpoints.sm} {
   height: 78.71px;
  }
`;