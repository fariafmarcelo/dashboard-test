import styled from 'styled-components';

interface IPercentageProps {
    color: string,
}

export const Container = styled.div`
    width: 48%;
    min-height: 260px;

    margin: 10px 0 ;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;

    display: flex;
`;

export const SideLeft = styled.aside`
    flex: 1;
    padding: 30px 20px;

    position: relative;
`;

export const SideRight = styled.main`
    flex: 1;
    min-height: 150px;

    display: flex;
    justify-content: center;

    padding-top: 30px;
`;

export const Title = styled.h2`
    margin-bottom: 10px;
`;

export const LegendContainer = styled.ul`
    list-style: none;

    padding-right: 15px;
    max-height: 175px;
    overflow-y: scroll;

    position: absolute;
    bottom: 20px;

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
`;

export const Legend = styled.li`
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    font-size: 14px;
`;

export const Percentage = styled.div<IPercentageProps>`
    background-color: ${props => props.color};

    width: 40px;
    height: 40px;
    border-radius: 5px;

    font-size: 14px;
    line-height: 40px;
    text-align: center;
`;

export const Message = styled.span`
    margin-left: 5px;
`;
