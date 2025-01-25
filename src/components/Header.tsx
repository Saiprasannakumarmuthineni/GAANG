import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/social">Social</Link></li>
                    <li><Link to="/upskill">Upskill</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
