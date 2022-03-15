import { IoIosArrowBack, IoIosArrowDropdown, IoIosMenu } from "react-icons/io";
import styled from "styled-components";

// Kai inspired
export const Header_scroll = styled.div`
  /* transform: translate3d(0, -100%, 0); */
  z-index: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  color: blue;
  -webkit-box-shadow: 0 2px 4px hsl(0deg 0% 50% / 12%);
  box-shadow: 0 2px 4px hsl(0deg 0% 50% / 12%);
`;

export const Header_Main = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transition: transform 0.3s ease-in;
`;

export const Header_Wrapper = styled.div`
height: 8vh;
position: fixed;
z-index: 1;
width: 100%;
display: block;
padding: 0 15px;
margin: 0 auto;
/* @media ${(props) => props.theme.breakpoints.sm} {
    
    } */
`;
export const Header_unfixed = styled.div`
  position: relative;
  /* --webkit-transform: translateY(0); */
  /* --ms-transform: translateY(0); */
  transform: translateY(0);
  width: 100%;
  height: 8vh;
  top: 0;
  left: 0;
  right: 0;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  z-index: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: space-between;
`;

export const Navbar = styled.div`
  --webkit-transition: all 0.65s cubic-bezier(0.7, 0.3, 0, 1);
  -o-transition: all 0.65s cubic-bezier(0.7, 0.3, 0, 1);
  transition: all 0.65s cubic-bezier(0.7, 0.3, 0, 1);
  z-index: auto;
  font-family: inherit;
  font-size: 8px;
  font-weight: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Navbar_bg_color = styled.div`
  top: 0;
  height: 8vh;
  position: fixed;
  z-index: 1;
  width: 100%;
  display: block;
  padding: 0 15px;
  margin: 0 auto;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Logo_wrapper = styled.div`
  display: flex;
  align-items: center;
  color: black;
  padding: 10px;
  height: inherit;
  /* width:25px; */
`;

export const Main_menu = styled(Logo_wrapper)`
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
  }
`;

// New Styled Components for header
export const NavHeader = styled.div`
  height: 51px;
  background: white;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 17%);
  font-style: normal;
  font-weight: normal;
  font-size: calc(1rem + 0.5vw);
  line-height: 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
  position: fixed;

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 52px;
    /* width: 768px; */
  }
  @media ${(props) => props.theme.breakpoints.md} {
    /* width: 480px; */
    height: 52px;
    /* left: calc(50% - 480px/2); */
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    /* width: 320px; */
    height: 52px;
    /* left: calc(50% - 320px/2); */
  }
`;

export const NextProjectLink = styled.a`
  display: -webkit-box;
  /* display: -webkit-flex; */
  /* display: flex; */
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
  text-align: justify;
  color: #7b61ff;
  /* padding: 10px; */

  @media ${(props) => props.theme.breakpoints.lg} {
    /* font-size: calc(1rem + 2vw); */
    line-height: auto;
  }
`;

export const NextProject = styled.div`
  width: 17%;
  height: auto;
  display: flex;
  align-items: center;
  align-content: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 25.5%;
    right: 10px;
    top: calc(50% - 52px / 2);
    padding-right: 1.5px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const Navlinks = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  width: 57%;
  /* left: calc(50% - 246px/2); */
  align-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 45%;
    height: 51px;
    left: calc(50% - 197px / 2 + 6.5px);
    top: calc(50% - 51px / 2);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 40%;
    height: 51px;
    right: 19px;
    top: calc(50% - 51px / 2);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const PageLink = styled.a`
  width: auto;
  height: auto;
  align-items: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 5px;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 153px;
  left: 217px;
  top: 0px;
  bottom: 0px;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 117px;
    height: 52px;
    /* left: 108px;
    top: calc(50% - 52px/2); */
  }

  @media ${(props) => props.theme.breakpoints.md} {
    left: 90px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 86px;
    height: 52px;
    /* left: calc(50% - 86px/2);
     top: calc(50% - 52px/2); */
  }
`;

export const NameLink = styled.a`
  position: static;
  left: 0%;
  right: 0%;
  top: 33.85%;
  bottom: 33.85%;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 17px;

  @media ${(props) => props.theme.breakpoints.lg} {
    right: 5.13%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    left: 2.56%;
    right: 2.56%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    right: -1.16%;
  }
`;
// TODO needs a review
export const ArrowLeft = styled(IoIosArrowBack)`
  position: initial;
  width: max-content;
  height: 27px;
  color: black;
  left: 17px;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  /* padding-left: 12px; */

  @media ${(props) => props.theme.breakpoints.md} {
    left: 19px;
  }
`;
export const MenuIcon = styled(IoIosMenu)`
  position: initial;
  width: max-content;
  height: 27px;
  color: black;
  left: 17px;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  /* padding-right: 12px; */
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
  }
`;
export const drop_down = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 17px;
    top: calc(50% - 24px / 2);
  }
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 80px;
  height: 83px;
  left: 233px;
  top: 38px;

  background: #fdfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const DropMenuLink = styled.a`
  position: static;
  width: 80px;
  height: 28px;
`;
// END of TODO needs a review

// End of new

export const Logo_container = styled.div`
  display: flex;
  font-size: 2rem;
  justify-content: left;
  align-items: center;
  width: 15%;
  height: 4vh;
`;

// export const Container = styled.div`
//   display: grid;
//   background: #A8DADC;
//   font-size: 6rem;
//   grid-template-columns: repeat(5, 1fr);
//   grid-template-rows: 1fr;
//   grid-column-gap: 2rem;
//   padding-left: 0px;
//   padding-right: 0px;
//   padding-top: 2rem;
//   width: 100%;

//   @media ${(props) => props.theme.breakpoints.sm} {
//     display: grid;
//     grid-template-columns: repeat(5, 1fr);
//     grid-template-rows: repeat(2, 60px);
//     grid-column-gap: 0.5rem;
//     grid-row-gap: 0.5rem;
//   }
// `;
// export const Span = styled.span`
//   font-size: 2rem;
//   color: black;
// `;

// export const Div1 = styled.div`
//   grid-area: 1 / 1 / 2 / 2;
//   display: flex;
//   font-size: 3rem;
//   flex-direction: row;
//   align-content: center;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     grid-area: 1 / 1 / 2 / 3;
//   }
// `;
// export const Div2 = styled.div`
//   grid-area: 1 / 2 / 2 / 4;
//   display: flex;
//   font-size: 2rem;
//   /* justify-content: space-around; */
//   justify-content: space-evenly;
//   align-items: center;
//   width: 60%;
//   height: 4vh;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     grid-area: 2 / 2 / 3 / 5;
//   }
// `;
// export const Div3 = styled.div`
//   grid-area: 1 / 5 / 2 / 6;
//   display: flex;
//   justify-content: space-around;
//   justify-content: space-evenly;
//   align-items: inherit;
//   width: 15%;
//   height: 4vh;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     align-items: center;
//     grid-area: 1 / 4 / 2 / 6;
//   }
// `;

// Navigation Links
export const NavLink = styled.a`
  position: relative;
  /* font-size: 16px; */
  /* line-height: 32px; */
  color: black;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
  align-content: center;
  align-items: center;
  display: flex;
  &:hover {
    color: black;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    line-height: 16px;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 4px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
