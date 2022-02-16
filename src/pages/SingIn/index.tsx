import React from 'react';

import {
    Container,
    Logo,
    Title,
    Form,
    FormTitle,
} from './styles';

import LogoImg from '../../assets/logo.svg'

const SingIn: React.FC = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="Minha Dashboard" />
                <Title>Minha Dashboard</Title>
            </Logo>

            <Form>
                <FormTitle>Entrar</FormTitle>

                <input type="text"></input>
                <input type="text"></input>

                <button type="submit">Acessar</button>
            </Form>
        </Container>
    );
}

export default SingIn;