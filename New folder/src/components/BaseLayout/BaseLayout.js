import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Content from "../../components/Content/Content";
import "../../default.scss";

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <Content >
        {children}
      </Content>
      <Footer />
    </>
  )
}
