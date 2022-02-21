import styled from 'styled-components';

interface IPercentageProps {
    color: string,
}

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;

    @media only screen and (max-width: 770px) {
        display: flex;
        width: 100%;
    }
`;

export const Title = styled.h2`
    margin-bottom: 20px;

    @media only screen and (max-width: 1345px) {
        margin-top: 15px;
        margin-bottom: 7px;
    }
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    @media only screen and (max-width: 1345px) {
        padding: 0 15px 5px;
        margin-bottom: 7px;
    }

    @media only screen and (max-width: 420px) {
        padding: 15px;
        margin-bottom: 7px;
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
`;

export const LegendContainer = styled.ul`
    list-style: none;

    padding-right: 15px;
    max-height: 175px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }

    @media only screen and (min-width: 1345px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Legend = styled.li`
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    font-size: 14px;

    @media only screen and (min-width: 1345px) {
        font-size: 14px;
        margin: 3px 0;
    }
`;

export const Percentage = styled.div<IPercentageProps>`
    background-color: ${props => props.color};

    width: 50px;
    height: 50px;
    border-radius: 5px;

    font-size: 16px;
    line-height: 50px;
    text-align: center;

    @media only screen and (min-width: 1345px) {
        width: 35px;
        height: 35px;
        line-height: 35px;
    }
`;

export const Message = styled.span`
    margin-left: 5px;
`;

