import React from 'react';
import {
    Container,
    Header,
    Title,
    LogImg,
    MenuContainer,
    MenuItemLink,
} from './styles';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

import LogoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={LogoImg} alt="Logo Minha Dashboard" />
                <Title>Minha Dashboard</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;