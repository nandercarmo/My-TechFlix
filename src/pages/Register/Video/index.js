import React from 'react';
import { Link } from 'react-router-dom';

import MyPageDefault from '../../../components/MyPageDefault';

export default function RegisterVideo() {

    return (
        <MyPageDefault>
            <h1>Cadastro de Vídeo</h1>
            <Link to='/cadastro/categoria'>
                Cadastrar categoria
            </Link>
        </MyPageDefault>
    );
}