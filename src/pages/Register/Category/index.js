import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MyPageDefault from '../../../components/MyPageDefault';
import MyFormField from '../../../components/MyFormField';
import { MyButtonLinkStyled } from '../../../components/MyButtonLinkStyled';
import useForm from '../../../hooks/useForm';

export default function RegisterCategory() {

    const initialValues = {
        title: '',
        description: '',
        color: '#000000',
    };

    const { handleChange, newValue, clearForm } = useForm(initialValues);
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://my-techflix.herokuapp.com/categorias';
        fetch(URL)
        .then(async (response) => {
            const jsonResponse = await response.json();
            setCategories([
                ...jsonResponse,
            ]);
        });

    }, []);

    return (
        <MyPageDefault>
            <h1>Cadastro de Categoria: {newValue.title}</h1>
            <form 
                onSubmit={(event) => { 
                    event.preventDefault();
                    setCategories([...categories, newValue]);
                    clearForm();
                }}
            >
                <div>
                    <MyFormField 
                        label= "Nova categoria"
                        type="text"
                        name="title" 
                        value={newValue.title}
                        onChange={handleChange}
                    />
                    <MyFormField
                        label="Descrição"
                        type="textarea"
                        name="description" 
                        value={newValue.description}
                        onChange={handleChange}                        
                    />
                    <MyFormField 
                        label= "Cor"
                        type="color"
                        name="color" 
                        value={newValue.color}
                        onChange={handleChange}
                    />
                </div>
                <MyButtonLinkStyled type="submit">
                    Cadastrar
                </MyButtonLinkStyled>
            </form>

            {categories.length === 0 && (
                <div>
                
                    Loading...
                </div>
            )}

            <ul>
                {categories.map((category, index) => {

                    return (
                        <li key={`${category.title}${index}`}>
                            {category.title}
                        </li>
                    )
                })}
            </ul>

            <Link to='/'>
                Ir para home
            </Link>
        </MyPageDefault>
    );
}