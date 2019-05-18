import React, { useContext } from 'react';
import Switch from 'react-switch';
import Cookies from 'js-cookie';

import SiteContext from './context';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(SiteContext);
  const onChange = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';

    Cookies.set('theme', updatedTheme, { expires: 365 });
    setTheme(updatedTheme);
  };

  return (
    <Switch
      onChange={onChange}
      className="switch"
      checked={theme === 'dark'}
      checkedIcon={<>🌙</>}
      uncheckedIcon={<>🌞</>}
      onColor="#718096"
      offColor="#000"
    />
  );
};

export default ThemeSwitcher;
