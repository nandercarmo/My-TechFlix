import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import MyPageDefault from '../../../components/MyPageDefault';
import MyFormField from '../../../components/MyFormField';
import useForm from '../../../hooks/useForm';
import { MyButtonLinkStyled } from '../../../components/MyButtonLinkStyled';
import videosRepository from '../../../respositories/videos';
import categoriesRepository from '../../../respositories/categories';

export default function RegisterVideo() {

    const history = useHistory();

    const [ categories, setCategories ] = useState([]);
    const categoryTitles = categories.map(({ title }) => title);
    const { handleChange, newValue } = useForm({
        title: '',
        url: '',
        category: '',
    });

    useEffect(() => {

        categoriesRepository.getAll()
        .then((categoriesList) => { setCategories(categoriesList); });
                    
    }, []);

    return (
        <MyPageDefault>
            <h1>Cadastro de Vídeo</h1>

            <form onSubmit={(event) => {
                
                event.preventDefault();

                const chooseCategory = categories.find((category) => {

                    return category.title === newValue.category;
                });

                videosRepository.create({
                    title: newValue.title,
                    url: newValue.url,
                    categoriaId: chooseCategory.id,
                })
                .then(() => {

                    console.log('Cadastrou com sucesso!');
                    history.push('/');
                });
            }}>Front End
                <MyFormField 
                    label= "Titulo do vídeo"
                    type="text"
                    name="title" 
                    value={newValue.title}
                    onChange={handleChange}
                />
                <MyFormField 
                    label= "Link do vídeo"
                    type="text"
                    name="url" 
                    value={newValue.url}
                    onChange={handleChange}
                />
                <MyFormField 
                    label= "Categoria"
                    type="text"
                    name="category" 
                    value={newValue.category}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />
                <MyButtonLinkStyled type="submit">
                    Cadastrar
                </MyButtonLinkStyled>
            </form>

            <Link to='/cadastro/categoria'>
                Cadastrar categoria
            </Link>
        </MyPageDefault>
    );
}