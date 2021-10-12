import React, {useContext} from 'react';
import './toggle.css';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { ThemeContext } from '../../context';

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };

  return (
    <div className='toggle'>
      <div className='toggleContainer'>
        <FaMoon className='toggle-icon' />
        <FaSun className='toggle-icon sun' />
        <button className='toggle-button' onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></button>
      </div>
    </div>
  );
};

export default Toggle;
