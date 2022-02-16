import styled from 'styled-components';

export const ButtonComponent = styled.button`
    width: 100%;

    margin: 7px 0;
    padding: 10px;

    border-radius: 5px;

    font-weight: 700;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.warning};

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }
`;