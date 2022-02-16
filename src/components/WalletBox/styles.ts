import styled from 'styled-components';
import CountUp from 'react-countup';

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
`;

export const Title = styled.span`
    font-size: 18px;
    font-weight: 500;
`;

export const Amount = styled.h1`
    
`;

export const FooterLabel = styled.small`
    font-size: 12px;
    position: absolute;
    bottom: 10px;
`;
