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

    @media only screen and (max-width: 770px) {
        width: 100%;
        height: auto;
    }

    @media only screen and (max-width: 420px) {
        width: 100%;
        height: auto;
    }
`;

export const Header = styled.header`
    
`;

export const Title = styled.h1`
    > img {
        width: 35px;
        margin-left: 7px;
    }

    @media only screen and (max-width: 770px) {
        font-size: 24px;

        > img {
            width: 20px;
            height: 20px;
        }
    }
`;

export const SubTitle = styled.p`
    font-size: 18px;

    @media only screen and (max-width: 770px) {
        font-size: 14px;
        margin-bottom: 15px;
    }

    @media only screen and (max-width: 420px) {
        margin-bottom: 15px;
    }
`;

export const Footer = styled.footer``;

export const Message = styled.span`
    @media only screen and (max-width: 770px) {
        font-size: 14px;
    }
`;

