import React from 'react';

import Logo from '../../assets/img/logo-mytechflix.png';
import './styles.css';
import MyButtonLink from './components/MyButtonLink';

export default function MyMenu() {
    
    return (
        <nav className='Menu'>
            <a href='/' >
                <img  className='Logo' src={Logo} alt='My-Techflix logo' />
            </a>
            <MyButtonLink className='ButtonLink' href='/'>
                Novo vídeo
            </MyButtonLink>
        </nav>
    );
}