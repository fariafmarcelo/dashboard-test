import React from 'react';
import {
    AmountContent,
    Container,
    SubTitle,
    Tag,
    Title,
    Amount
} from './styles';

interface IHistoryFinanceCardProps {
    tagColor: string,
    title: string,
    subtitle: string,
    amount: string,
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
    tagColor,
    title,
    subtitle,
    amount
}) => {
    return (
        <Container>
            <Tag color={tagColor} />
            <AmountContent>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
            </AmountContent>
            <Amount>
                {amount}
            </Amount>
        </Container>
    );
}

export default HistoryFinanceCard;