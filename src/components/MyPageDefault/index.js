import React from 'react';
import styled, { css } from 'styled-components';

import MyMenu from '../MyMenu';
import MyFooter from '../MyFooter';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({paddingAll}) => css`
        padding: ${paddingAll};
    `}
`;

export default function MyPageDefault({ children, paddingAll }) {

    return(
        <>
            <MyMenu />
                <Main paddingAll={paddingAll}>
                    { children }
                </Main>
            <MyFooter />
        </>
    );
}