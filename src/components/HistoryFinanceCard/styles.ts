import styled from 'styled-components';

interface IContainerProps {
    color: string,
}

interface ITagProps {
    color: string,
}

export const Container = styled.li<IContainerProps>`
    background-color: ${props => props.color};
    
    list-style: none;
    border-radius: 5px;
    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    cursor: pointer;
    transition: all .3s;

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }
`;

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 60%;

    background-color: ${props => props.color};
    position: absolute;
    left: 0;
`;

export const AmountContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
`;

export const Title = styled.span`

`;

export const SubTitle = styled.small``;

export const Amount = styled.h3``;

