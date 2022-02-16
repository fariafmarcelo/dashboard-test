import styled from 'styled-components';

interface IPercentageProps {
    color: string,
}

export const Container = styled.div`
    width: 100%;
    height: 360px;
    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 7px;
`;

export const Title = styled.h2`
    margin-bottom: 20px;
    padding-left: 16px;
`;

export const ChartContainer = styled.div`
    flex: 1;
    height: 260px;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 16px;
`;

export const Legend = styled.li`
    display: flex;
    align-items: center;

    margin-left: 7px;
    margin-bottom: 7px;
    font-size: 14px;
`;

export const Percentage = styled.div<IPercentageProps>`
    background-color: ${props => props.color};

    width: 30px;
    height: 30px;
    border-radius: 5px;

    font-size: 16px;
    line-height: 50px;
    text-align: center;
`;

export const Message = styled.span`
    margin-left: 5px;
`;