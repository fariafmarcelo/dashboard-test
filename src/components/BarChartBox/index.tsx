import React from 'react';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    Tooltip,
} from 'recharts';

import {
    Container,
    SideLeft,
    SideRight,
    Title,
    LegendContainer,
    Legend,
    Percentage,
    Message,
} from './styles';

import formatCurrency from '../../utils/formatCurrency';

interface IBarChartProps {
    title: string,
    data: {
        name: string,
        amount: number,
        percent: number,
        color: string,
    }[],
}

const BarChartBox: React.FC<IBarChartProps> = ({
    title, data
}) => {
    return (
        <Container>
            <SideLeft>
                <Title>{title}</Title>
                <LegendContainer>
                    {
                        data.map((indicator, index) => (
                            <Legend key={index}>
                                <Percentage color={indicator.color}>{indicator.percent}%</Percentage>
                                <Message>{indicator.name}</Message>
                            </Legend>
                        ))
                    }
                </LegendContainer>
            </SideLeft>

            <SideRight>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey="amount" name="Valor">
                            {
                                data.map((indicator) => (
                                    <Cell
                                        key={indicator.name}
                                        cursor="pointer"
                                        fill={indicator.color}
                                    />
                                ))
                            }
                        </Bar>
                        <Tooltip cursor={{fill: 'none'}} formatter={(value: number) => formatCurrency(Number(value))} />
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    );
}

export default BarChartBox;