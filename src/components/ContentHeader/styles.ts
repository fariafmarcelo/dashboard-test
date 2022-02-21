import styled from 'styled-components';

interface ITitleProps {
    lineColor: string
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media only screen and (max-width: 320px) {
        flex-direction: column;
    }
`;

export const TitleContainer = styled.div`

`;

export const Title = styled.h1<ITitleProps>`
    color: ${props => props.theme.colors.white};

    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.lineColor};
    }

    @media only screen and (max-width: 420px) {
        font-size: 22px;

        &::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 5px solid ${props => props.lineColor};
        }
    }
`;

export const Controllers = styled.div`
    display: flex;
    
    @media only screen and (max-width: 320px) {
        width: 100%;
        justify-content: space-around;
        margin-top: 20px;
    }
`;