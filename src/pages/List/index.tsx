import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import {
    Container,
    Content,
    Filters,
} from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import Gains from '../../repositories/gains';
import Expenses from '../../repositories/expenses';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';

interface IData {
    description: string,
    amountFormatted: string,
    frequency: string,
    dateFormatted: string,
    tagColor: string,
}

const List: React.FC = () => {
    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const [frequencyFilterSelected, setFrequencyFilterSelected] = useState<string[]>(['recorrente', 'eventual'])
    const { movimentType } = useParams();

    const pageData = useMemo(() => {
        if (movimentType === 'entry-balance') {
            return {
                title: 'Entradas',
                lineColor: '#4E41F0',
                listData: Gains
            }
        } else {
            return {
                title: 'Saídas',
                lineColor: '#E44C4E',
                listData: Expenses
            }
        }
    }, [movimentType]);

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

        pageData.listData.forEach(item => {
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
    }, [pageData.listData]);

    useEffect(() => {
        const response = pageData.listData.map(item => {
            return {
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        });

        setData(response);
    }, [pageData.listData]);

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);

        if (alreadySelected >= 0) {
            const filtered = frequencyFilterSelected.filter(item => item !== frequency);
            setFrequencyFilterSelected(filtered);
        } else {
            setFrequencyFilterSelected((prev) => [...prev, frequency]);
        }
    };

    //TODO - FILTER RESULTS BY MONTH AND YEAR

    // useEffect(() => {
    //     const filteredData = listData.map(item => {
    //         const date = new Date(item.date);
    //         const month = date.getMonth() + 1;
    //         const year = date.getFullYear;

    //         return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(item.frequency);
    //     });

    //     const formattedData = filteredData.map(item => {
    //         if (item) {
    //             return {
    //                 description: item.description,
    //                 amountFormatted: formatCurrency(Number(item.amount)),
    //                 frequency: item.frequency,
    //                 dateFormatted: formatDate(item.date),
    //                 tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
    //             }
    //         }
    //     });

    //     setData(formattedData);
    // }, [listData, monthSelected, yearSelected, frequencyFilterSelected]);

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch(err) {
            throw new Error('invalid month value. Is Accept 0 - 24.');
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch(err) {
            throw new Error('invalid year value. Is Accept integer numbers.');
        }
    }

    return (
        <Container>
            <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
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

            <Filters>
                <button
                    type="button"
                    className={`tag-filter tag-filter-recurrent ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>
                <button
                    type="button"
                    className={`tag-filter tag-filter-eventual ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                {
                    data.map((item, index)  => (
                        <HistoryFinanceCard
                            key={index}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;