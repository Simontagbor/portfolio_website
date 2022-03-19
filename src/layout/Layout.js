import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar";
import { Container, MyContainer } from "./LayoutStyles";
// import ChatbotCase from '../components/chatbot/Chatbot';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MyContainer>
        <main>{children}</main>
      </MyContainer>
      {/* <main>{children}</main> */}
      {/* <ChatbotCase/> */}
      {/* <Footer/> */}
      {/* </Container> */}
    </>
  );
};
