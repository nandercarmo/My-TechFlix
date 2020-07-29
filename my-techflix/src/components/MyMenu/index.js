import React from 'react';
import { Link }  from 'react-router-dom';

import Logo from '../../assets/img/logo-mytechflix.png';
import './styles.css';
import { MyButtonLinkStyled } from './components/MyButtonLinkStyled';

export default function MyMenu() {
    
    return (
        <nav className='Menu'>
            <Link to='/cadastro/video' >
                <img  className='Logo' src={Logo} alt='My-Techflix logo' />
            </Link>
            <MyButtonLinkStyled as={Link} className='ButtonLink' to='/cadastro/video'>
                Novo vídeo
            </MyButtonLinkStyled>
        </nav>
    );
}