import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillDribbbleCircle, AiFillLinkedin, AiFillBehanceCircle } from 'react-icons/ai';
import { DiCss3Full, DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems:"center", color:"white", marginBottom:"20;"}}>
          <DiCssdeck size="4.5rem"/><Span>Portfolio</Span>
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
         <AiFillGithub size="4rem" />
       </SocialIcons>
       <SocialIcons href="/">
         <AiFillBehanceCircle size="4rem" />
       </SocialIcons>
       <SocialIcons href="/">
         <AiFillDribbbleCircle size="4rem" />
       </SocialIcons>
     </Div3>
  </Container>
);

export default Header;