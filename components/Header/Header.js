import React from 'react';
import VannaLogo from '../../static/vanna-logo.png';
import './Header.scss';

const Header = () => (
  <div>
	<div className="header-wrapper">
	  <div>
	  	<img className="header-logo" src={VannaLogo} />
	  </div>
	</div>
  </div>
);


export default Header;