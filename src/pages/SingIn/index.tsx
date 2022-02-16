import React from 'react';

import {
    Container,
    Logo,
    Title,
    Form,
    FormTitle,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import LogoImg from '../../assets/logo.svg'

const SingIn: React.FC = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="Minha Dashboard" />
                <Title>Minha Dashboard</Title>
            </Logo>

            <Form onSubmit={() => {}}>
                <FormTitle>Entrar</FormTitle>

                <Input
                    type="email"
                    required
                    placeholder='e-mail'
                />
                <Input
                    type="password"
                    required
                    placeholder='senha'
                />

                <Button type="submit">
                    Acessar
                </Button>
            </Form>
        </Container>
    );
}

export default SingIn;