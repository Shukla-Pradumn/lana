import React from 'react';
import HeaderLogo from './svgIcons/headerLogo';

export default function Header() {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <HeaderLogo />
      </div>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#001C33',
  height: '84px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const containerStyle = {
  textAlign: 'center',
  color: '#ffffff',
};
