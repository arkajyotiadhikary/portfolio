import React from "react";
import Header from "@/components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
      return (
            <div className="root">
                  {/* header */}
                  <Header />
                  <div className="root-container">
                        <div className="wrapper">{children}</div>
                  </div>
                  {/* footer */}
            </div>
      );
};

export default Layout;
