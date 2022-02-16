import styled from 'styled-components';

export const Container = styled.div`
    width: 48%;
    height: 260px;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    margin: 10px 0;
    padding: 30px 20px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Header = styled.header`
    
`;

export const Title = styled.h1`
    > img {
        width: 35px;
        margin-left: 7px;
    }
`;

export const SubTitle = styled.p`
    font-size: 18px;
`;

export const Footer = styled.footer``;

export const Message = styled.span``;

