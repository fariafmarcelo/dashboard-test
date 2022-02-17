import React from 'react';
import {
    Container,
    Header,
    Title,
    LogImg,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
} from './styles';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

import LogoImg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

const Aside: React.FC = () => {
    const { singOut } = useAuth();

    return (
        <Container>
            <Header>
                <LogImg src={LogoImg} alt="Logo Minha Dashboard" />
                <Title>Minha Dashboard</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink to="/">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink to="/list/entry-balance">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink to="/list/exit-balance">
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>
                <MenuItemButton onClick={singOut}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>
        </Container>
    );
}

export default Aside;