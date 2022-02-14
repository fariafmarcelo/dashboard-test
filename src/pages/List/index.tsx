import React from 'react';
import {
    Container,
    Content,
} from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

const List: React.FC = () => {

    const Options = [
        {value: 'Marcelo', label: 'Marcelo'},
        {value: 'Ana', label: 'Ana'},
        {value: 'Mariana', label: 'Mariana'}
    ];

    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={Options} />
            </ContentHeader>

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
            </Content>
        </Container>
    );
}

export default List;