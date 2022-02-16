import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts'

import {
    Container,
    Title,
    ChartContainer,
    Header,
    LegendContainer,
    Legend,
    Percentage,
    Message,
} from './styles';

interface IHistoryBoxProps {
    data: {
        month: string,
        amountEntry: number,
        amountOutput: number,
    }[],
    lineColorAmountEntry: string,
    lineColorAmountOutput: string,
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, lineColorAmountEntry, lineColorAmountOutput,
}) => (
        <Container>
            <Header>
                <Title>Histórico de saldo</Title>
                <LegendContainer>
                    <Legend>
                        <Percentage color={lineColorAmountEntry}></Percentage>
                        <Message>Entradas</Message>
                    </Legend>
                    <Legend>
                        <Percentage color={lineColorAmountOutput}></Percentage>
                        <Message>Saídas</Message>
                    </Legend>
                </LegendContainer>
            </Header>

            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }} >
                        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                        <XAxis dataKey="month" stroke="#cecece" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="amountEntry"
                            name="Entradas"
                            stroke={lineColorAmountEntry}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="amountOutput"
                            name="Saídas"
                            stroke={lineColorAmountOutput}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </Container>
);

export default HistoryBox;