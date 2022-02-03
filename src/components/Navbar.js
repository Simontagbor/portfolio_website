import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillDribbbleCircle, AiFillLinkedin, AiFillBehanceCircle } from 'react-icons/ai';
import { DiCss3Full, DiCssdeck } from 'react-icons/di';
import { ArrowLeft, Navbar_bg_color, NavHeader, NavLink, Navlinks, NextProjectLink,  PageLink, NextProject, MenuIcon, Header_Main, Logo_wrapper, Main_menu }  from '../components/Header/HeaderStyles';



const  NavBar = () => {
    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 100) {
          setShow(false)
        } else {
          setShow(true)
        }
      }

      useEffect(() => {
         window.addEventListener('scroll', controlNavbar)
         return () => {
           window.removeEventListener('scroll', controlNavbar)
         }
      }, [])
      return (
        <div className = {`Navbar_bg_color ${show && 'Header_scroll'}`}>
         <Header_Main>
          <NavHeader>
             <Logo_wrapper><ArrowLeft /></Logo_wrapper>
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
             <Main_menu> <MenuIcon /> </Main_menu>
          </NavHeader>
        </Header_Main>
      </div>
      )
}

export default NavBar;