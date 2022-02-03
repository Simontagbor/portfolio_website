import React from 'react'

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar';
import { Container } from './LayoutStyles';
// import ChatbotCase from '../components/chatbot/Chatbot';

export const Layout = ({children}) => {
  return (
    
    <Container>
     <div>
      <Header/>
     </div>
     {/* <Navbar /> */}
     <main>{children}</main>
     {/* <ChatbotCase/> */}
     {/* <Footer/> */}
    </Container>
  )
}
