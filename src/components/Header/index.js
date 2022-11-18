import React, { useState } from "react";
import CategoriesNav from "./CatagoriesNav";
import MainNav from "./MainNav";
import SearchNav from "./SearchNav";
import SectionNav from "./SectionNav";
import "./Header.scss";
function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <header className="header">
      <div className={sidebar ? "drop__effect" : ""}></div>

      <MainNav />
      <SearchNav showSidebar={showSidebar} sidebar={sidebar} />
      <CategoriesNav />
      <SectionNav />
    </header>
  );
}

export default Header;
