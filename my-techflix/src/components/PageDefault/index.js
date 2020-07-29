import React from 'react';
import styled from 'styled-components';

import MyMenu from '../MyMenu';
import MyFooter from '../MyFooter';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

export default function PageDefault({ children }) {

    return(
        <>
            <MyMenu />
                <Main>
                    { children }
                </Main>
            <MyFooter />
        </>
    );
}