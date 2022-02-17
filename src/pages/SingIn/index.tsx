import React, { useState } from 'react';

import {
    Container,
    Logo,
    Title,
    Form,
    FormTitle,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import LogoImg from '../../assets/logo.svg'

const SingIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { singIn } = useAuth();

    return (
        <Container>
            <Logo>
                <img src={LogoImg} alt="Minha Dashboard" />
                <Title>Minha Dashboard</Title>
            </Logo>

            <Form onSubmit={() => singIn(email, password)}>
                <FormTitle>Entrar</FormTitle>

                <Input
                    type="email"
                    required
                    placeholder='e-mail'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    required
                    placeholder='senha'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit">
                    Acessar
                </Button>
            </Form>
        </Container>
    );
}

export default SingIn;