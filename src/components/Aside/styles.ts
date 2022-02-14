import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    grid-area: AS;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.gray};

    padding-left: 20px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;
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