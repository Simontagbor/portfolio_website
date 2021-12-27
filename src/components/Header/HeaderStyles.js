import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

// Kai inspired
export const Header_scroll = styled.header`
 transform: translate3d(0, -100%, 0);
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: transform 0.3s ease-in;
`;
export const Header_Wrapper = styled.div`
height: 99px;
position: fixed;
z-index: 20;
width: 100%;
display: block;
@media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
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
-webkit-transition: all .2s ease-in-out;
-o-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;
z-index: 15;
display: -ms-flexbox;
display: flex;
-ms-flex-pack: center;
justify-content: center;
`;

export const Navbar = styled.div`
  webkit-transition: all .65s cubic-bezier(.7, .3, 0, 1);
  -o-transition: all .65s cubic-bezier(.7, .3, 0, 1);
  transition: all .65s cubic-bezier(.7, .3, 0, 1);
  z-index: 16;
  font-family: Josefin Sans;
  font-size: 11px;
  font-weight: 700;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
`;

export const Navbar_bg_color = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 4px hsl(0deg 0% 50% / 12%);
  box-shadow: 0 2px 4px hsl(0deg 0% 50% / 12%);
  z-index: -1;
`;
export const Navbar_container_outer = styled.div`

`;



export const Container = styled.div`
  display: grid;
  background: #A8DADC;
  font-size: 6rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 2rem;
  width: 100%;
  

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Span = styled.span`
  font-size: 2rem;
  color: black;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  font-size: 5rem;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  font-size: 5rem;
  /* justify-content: space-around; */
  justify-content: space-evenly;
  align-items: baseline;
  width: 50%;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: space-evenly;
  align-items: baseline;
  width: 25%;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: black;
  transition: 0.4s ease;
  &:hover {
    color: black;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
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
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

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
`