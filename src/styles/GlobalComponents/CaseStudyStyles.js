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
