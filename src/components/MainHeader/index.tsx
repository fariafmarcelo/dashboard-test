import React, { useMemo } from 'react';
import {
    Container,
    Profile,
    Welcome,
    UserName,
} from './styles';

import Toggle from '../Toggle/';
import Emojis from '../../utils/emojis';

const MainHeader: React.FC = () => {

    const Emoji = useMemo(() => {
        const index = Math.floor(Math.random() * Emojis.length);
        return Emojis[index];
    }, []);

    return (
        <Container>
            <Toggle />

            <Profile>
                <Welcome>Olá, {Emoji}</Welcome>
                <UserName>Marcelo Faria</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;