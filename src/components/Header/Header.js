import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillDribbbleCircle, AiFillLinkedin, AiFillBehanceCircle, AiFillFastBackward } from 'react-icons/ai';
import { DiCss3Full, DiCssdeck } from 'react-icons/di';

import { ArrowLeft, Container, Div1, Div2, Div3, Header_unfixed, Header_Wrapper, Logo_container, Logo_wrapper, NameLink, Navbar, Navbar_bg_color, NavHeader, NavLink, Navlinks, NextProjectLink, SocialIcons, Span, Name, PageLink, NextProject, MenuIcon } from './HeaderStyles';


const Header = () => (
  <NavHeader>
    <ArrowLeft />
    <NavLink href = "/">
      <PageLink> Simon Tagbor </PageLink>
    </NavLink>
    <Navlinks>
      <PageLink href= "/"> Works </PageLink>
      <PageLink href= "/"> Home </PageLink>
      <PageLink href= "/"> Contact </PageLink>
    </Navlinks>
    <NextProject>
      <NextProjectLink href="/"> Up Next: Blood drive</NextProjectLink>
    </NextProject>
    <MenuIcon />
  </NavHeader>
);

export default Header;