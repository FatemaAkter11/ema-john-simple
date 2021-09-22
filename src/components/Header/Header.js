import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Header;