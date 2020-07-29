import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

export default function RegisterVideo() {

    return (
        <PageDefault>
            <h1>Cadastro de Vídeo</h1>
            <Link to='/cadastro/categoria'>
                Cadastrar categoria
            </Link>
        </PageDefault>
    );
}