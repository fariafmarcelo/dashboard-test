import styled from 'styled-components';

interface IContainerProps {
    color: string,
}

export const Container = styled.div<IContainerProps>`
    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};
    
    width: 32%;
    height: 150px;

    margin: 10px 0;
    padding: 10px 20px;
    border-radius: 7px;

    position: relative;
    overflow: hidden;

    > img {
        position: absolute;
        
        height: 110%;

        top: -10px;
        right: -25px;
        opacity: .3;
    }

    @media only screen and (max-width: 420px) {
        width: 100%;
    }
`;

export const Title = styled.span`
    font-size: 18px;
    font-weight: 500;

    @media only screen and (max-width: 770px) {
        font-size: 14px;
    }
`;

export const Amount = styled.h1`
    @media only screen and (max-width: 770px) {
        word-wrap: break-word;
        font-size: 20px;

        > strong {
            display: inline-block;
            width: 100%;
            font-size: 14px;
        }
    }

    @media only screen and (max-width: 420px) {
        display: flex;
        align-items: center;
        font-size: 24px;

        > strong {
            position: initial;
            width: auto;
            font-size: 18px;
            margin-right: 3px;
        }
    }
`;

export const FooterLabel = styled.small`
    font-size: 12px;
    position: absolute;
    bottom: 10px;
`;
