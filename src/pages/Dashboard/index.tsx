import React, { useState, useMemo } from 'react';
import {
    Container,
    Content,
} from './styles';

import SelectInput from '../../components/SelectInput';
import ContentHeader from '../../components/ContentHeader';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

import Expenses from '../../repositories/expenses';
import Gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';

import HappyImg from '../../assets/happy.svg';
import SadImg from '../../assets/sad.svg';
import GrinningImg from '../../assets/grinning.svg';

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const Months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });
    }, []);

    const Years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...Expenses, ...Gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });
    }, []);

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        Expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('invalid amount! Amount must be number')
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;

        Gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('invalid amount! Amount must be number')
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalExpenses, totalGains]);

    const message = useMemo(() => {
        if (totalBalance < 0) {
            return {
                title: 'Que triste!',
                description: 'Neste mês você gastou mais do que deveria.',
                footerText: 'Verifique seus gastos e tente corrigir algumas coisas desnecessárias.',
                icon: SadImg
            }
        } else if (totalBalance == 0) {
            return {
                title: 'Ufaa!',
                description: 'Neste mês, você gastou exatamente o que ganhou.',
                footerText: 'Tenha cuidado, no próximo mês tente poupar o seu dinheiro.',
                icon: GrinningImg,
            }
        } else {
            return {
                title: 'Muito bem!',
                description: 'Sua carteira está positiva!',
                footerText: 'Continue assim. Considere investir o seu saldo',
                icon: HappyImg,
            }
        }
    }, [totalBalance]);

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch {
            throw new Error('invalid month value. Is Accept 0 - 24.');
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch {
            throw new Error('invalid year value. Is Accept integer numbers.');
        }
    }

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput
                    options={Months}
                    onChange={(e) => handleMonthSelected(e.target.value)}
                    defaultValue={monthSelected}
                />
                <SelectInput
                    options={Years}
                    onChange={(e) => handleYearSelected(e.target.value)}
                    defaultValue={yearSelected}
                />
            </ContentHeader>

            <Content>
                <WalletBox
                    title="saldo"
                    amount={totalBalance}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="dolar"
                    color="#4E41F0"
                />
                <WalletBox
                    title="entradas"
                    amount={totalGains}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                    color="#F7931B"
                />
                <WalletBox
                    title="saídas"
                    amount={totalExpenses}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                    color="#E44C4E"
                />

                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />
            </Content>
        </Container>
    );
}

export default Dashboard;