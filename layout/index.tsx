import React from "react";
import Header from "./header";
import Footer from "./footer";
import poppins from "@/fonts/poppins";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <Header />
      <main className={poppins.className}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
