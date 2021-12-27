import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillDribbbleCircle, AiFillLinkedin, AiFillBehanceCircle } from 'react-icons/ai';
import { DiCss3Full, DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, Header_unfixed, Header_Wrapper, Navbar, Navbar_bg_color, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Header>
   <Header_Wrapper>
    <Header_unfixed>
      <Navbar>
        <Div1>
          <Link href="/">
            <a style={{ display: "flex", alignItems:"center", color:"black", marginBottom:"20;", width:"25%;"}}>
              <DiCssdeck size="2.5rem"/><Span>Portfolio</Span>
            </a>
          </Link>
        </Div1>
        <Div2>
          <li>
            <Link href="#Works">
              <NavLink>Works</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#About">
              <NavLink>About</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#Contact">
              <NavLink>Contact</NavLink>
            </Link>
          </li>
        </Div2>
        <Div3>
          <SocialIcons href="/">
            <AiFillGithub color="black" size="2rem" c />
          </SocialIcons>
          <SocialIcons href="/">
            <AiFillBehanceCircle color="black" size="2rem" />
          </SocialIcons>
          <SocialIcons href="/">
            <AiFillDribbbleCircle color="black" size="2rem" />
          </SocialIcons>
        </Div3>


        <Navbar_bg_color>

        </Navbar_bg_color>
      </Navbar>
     </Header_unfixed>
    </Header_Wrapper>
  </Header>
);

export default Header;