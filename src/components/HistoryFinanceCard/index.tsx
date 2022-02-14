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
    cardColor: string,
    tagColor: string,
    title: string,
    subtitle: string,
    amount: string,
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
    cardColor,
    tagColor,
    title,
    subtitle,
    amount
}) => {
    return (
        <Container color={cardColor}>
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