import styled from 'styled-components';



export const Mockup_flex1 = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 19;
  padding-bottom: 19;
  padding-left: 19;
  padding-right: 19;

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
  display: flex;
  flex-direction : column;
  padding-top: 8;
  padding-bottom: 8;
  padding-left: 0;
  padding-right: 0;
  margin-right: 40px;
  width: 415px;
  height: 186px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 35px;
    width: 360px;
    height: 126px;
    }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 41px;
    width: 284px;
    height: 150px;
    flex-direction : column;
  }
`;

export const ImgContainer = styled.div`
  width: 375px;
  height: 812px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 288.75px;
    height: 629px;
    }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 208px;
    height: 389px;
    }
`;


export const TextBoxH1 = styled.div`
  font-size: 30;
  font-weight: 900;
  letter-spacing: 3.5;
  text-align: center;
  justify-content: center;
  margin-bottom: 23px;

  @media ${(props) => props.theme.breakpoints.md} {
     font-size: 15;
    }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15;
    }
`;


export const TextBoxP = styled.div`
  font-size: 18;
  text-align: right;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  width: 415px;
  height: 110px;
  font-weight: 400;
  letter-spacing: 0.3;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 13;
    }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13;
    }
`;


// Three Mock- Ups
export const  Mockups3l = styled.div`
  display: flex;
  flex-direction : row;
  justify-content: center;
  align-items: center;
  padding-top: 9;
  padding-bottom: 9;
  padding-left: 9;
  padding-right: 9;

  @media ${(props) => props.theme.breakpoints.md} {
    
    }
  @media ${(props) => props.theme.breakpoints.sm} {
     flex-direction : column;
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
  flex-direction : row;
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
  flex-direction : column;
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
  flex-direction : row;
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
   flex-direction : column;
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