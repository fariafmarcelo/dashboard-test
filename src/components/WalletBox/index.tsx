import React, { useMemo } from 'react';
// import CountUp from 'react-countup/build/CountUp';
import CountUp from 'react-countup';

import {
    Container,
    Title,
    Amount,
    FooterLabel,
} from './styles';

import DolarImg from '../../assets/dollar.svg';
import ArrowUpImg from '../../assets/arrow-up.svg';
import ArrowDownImg from '../../assets/arrow-down.svg';

interface IWalletBoxProps {
    title: string,
    amount: number,
    footerLabel: string,
    icon: 'dolar' | 'arrowUp' | 'arrowDown',
    color: string,
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title,
    amount,
    footerLabel,
    icon,
    color,
}) => {
    const iconSelected = useMemo(() => {
        switch (icon) {
            case 'dolar':
                return DolarImg;
            case 'arrowUp':
                return ArrowUpImg;
            case 'arrowDown':
                return ArrowDownImg;
            default:
                return null;
        }
    }, [icon]);

    return (
        <Container color={color}>
            <Title>{title}</Title>
            <Amount>
                <CountUp
                    end={amount}
                    prefix={"R$ "}
                    separator="."
                    decimal=","
                    decimals={2}
                />
            </Amount>
            <FooterLabel>{footerLabel}</FooterLabel>
            {
                iconSelected && (
                    <img src={iconSelected} alt={title} />
                )
            }
        </Container>
    );
}

export default WalletBox;