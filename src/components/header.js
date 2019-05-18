import React, { useContext } from 'react';
import { Link } from 'gatsby';

import SiteContext from './context';

const Header = () => {
  const { title } = useContext(SiteContext);

  return (
    <header className="header">
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </header>
  );
};

export default Header;
