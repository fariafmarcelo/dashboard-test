import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import {
    Container
} from './styles';

const Dashboard: React.FC = () => {

    const Options = [
        {value: 'Marcelo', label: 'Marcelo'},
        {value: 'Ana', label: 'Ana'},
        {value: 'Mariana', label: 'Mariana'}
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={Options} onChange={() => {}} />
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;