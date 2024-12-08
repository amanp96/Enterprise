import React from "react";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="  justify-center items-center  ">
      <Header />

      {children}
      <Footer />
      {/* <Form /> */}
      {/* <Caurosal /> */}
    </div>
  );
};
export default Layout;
