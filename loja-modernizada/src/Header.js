import React from 'react';
import { Header as HeaderStyle } from './styles';

const Header = ({ onCategoryChange }) => {
  return (
    <HeaderStyle>
      <h1>Loja Modernizada</h1>
      <nav>
        <ul>
          <li><a href="#home" onClick={() => onCategoryChange('all')}>Início</a></li>
          <li><a href="#electronics" onClick={() => onCategoryChange('electronics')}>Eletrônicos</a></li>
          <li><a href="#fashion" onClick={() => onCategoryChange('fashion')}>Moda</a></li>
          <li><a href="#home" onClick={() => onCategoryChange('home')}>Casa</a></li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;