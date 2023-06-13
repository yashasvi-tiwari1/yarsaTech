import React, { ReactElement } from "react";
import Navbar from "@tech/components/navbar";
import Footer from "@tech/components/footer";
function SiteLayout({ children }: { children: ReactElement }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default SiteLayout;
