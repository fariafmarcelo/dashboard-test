import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from 'recharts';

import {
    Container,
    Title,
    SideLeft,
    SideRight,
    LegendContainer,
    Legend,
    Percentage,
    Message,
} from './styles';

interface IPieChartProps {
    data: {
        name: string,
        value: number,
        percent: number,
        color: string,
    }[]
}

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
        <Container>
            <SideLeft>
                <Title>Relação</Title>
                <LegendContainer>
                    {
                        data.map((indicator, index) => (
                            <Legend key={index}>
                                <Percentage color={indicator.color}>{indicator.percent}</Percentage>
                                <Message>{indicator.name}</Message>
                            </Legend>
                        ))
                    }
                </LegendContainer>
            </SideLeft>
            <SideRight>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={data} dataKey="percent">
                            {
                                data.map((indicator) => (
                                    <Cell key={indicator.name} fill={indicator.color} />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
);

export default PieChartBox;