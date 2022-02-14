import React, { useMemo } from 'react';
import {
    Container,
    Content,
    Filters,
} from './styles';
import { useParams } from 'react-router-dom';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

const List: React.FC = () => {

    const { type } = useParams();

    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entrada' : 'Saídas'
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E'
    }, [type]);

    const Months = [
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
    ];

    const Years = [
        {value: 2022, label: 2022},
        {value: 2021, label: 2021},
        {value: 2020, label: 2020},
    ];

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={Months} />
                <SelectInput options={Years} />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>
                <button
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard
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