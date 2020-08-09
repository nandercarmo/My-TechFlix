import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MyPageDefault from '../../../components/MyPageDefault';
import MyFormField from '../../../components/MyFormField';
import { MyButtonLinkStyled } from '../../../components/MyButtonLinkStyled';

export default function RegisterCategory() {

    const initialValues = {
        name: '',
        description: '',
        color: '#000000',
    };
    
    const [categories, setCategories] = useState([]);
    const [newValue, setNewValue] = useState(initialValues);

    function handleChange(event) {

        setNewValue({
            ...newValue,
            [event.target.getAttribute('name')]: event.target.value
        });
    }

    useEffect(() => {

        const URL = 'http://localhost:8080/categorias';
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
            <h1>Cadastro de Categoria: {newValue.name}</h1>
            <form 
                onSubmit={(event) => { 
                    event.preventDefault();
                    setCategories([...categories, newValue]);
                    setNewValue(initialValues);
                }}
            >
                <div>
                    <MyFormField 
                        label= "Nova categoria"
                        type="text"
                        name="name" 
                        value={newValue.name}
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
                <MyButtonLinkStyled>Cadastrar</MyButtonLinkStyled>
            </form>

            {categories.length === 0 && (
                <div>
                
                    Loading...
                </div>
            )}

            <ul>
                {categories.map((category, index) => {

                    return (
                        <li key={`${category.name}${index}`}>
                            {category.name}
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