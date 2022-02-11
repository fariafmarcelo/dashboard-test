import React from 'react';
import {
    Container,
} from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

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
        </Container>
    );
}

export default List;