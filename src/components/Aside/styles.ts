import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import ToggleComponent from '../Toggle/';

interface IContainerProps {
    menuIsOpen: boolean,
}

interface IThemeToggleFooterProps {
    menuIsOpen: boolean,
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.gray};

    padding-left: 20px;

    position: relative;

    
    @media only screen and (max-width: 600px) {
        padding-left: 7px;
        position: fixed;
        z-index: 2;
        
        width: 170px;
        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;
    
    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItemLink = styled(Link)`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: opacity ease .3s;
    display: flex;
    align-items: center;

    margin: 7px 0;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button`
    font-size: 16px;
    text-decoration: none;
    border: none;
    background: none;

    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: opacity ease .3s;
    
    display: flex;
    align-items: center;

    margin: 7px 0;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    height: 40px;
    width: 40px;

    border-radius: 5px;
    font-size: 22px;

    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    display: none;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 600px) {
        display: flex;
    }
`;

export const Toggle = styled(ToggleComponent)`
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;

    @media only screen and (max-width: 470px) {
        display: ${props => props.menuIsOpen ? 'flex' : 'none'};
    }
`;