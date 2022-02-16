import React, { useMemo, useState } from 'react';
import {
    Container,
    Profile,
    Welcome,
    UserName,
} from './styles';

import { useTheme } from '../../hooks/theme';

import Toggle from '../Toggle/';
import Emojis from '../../utils/emojis';

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    const Emoji = useMemo(() => {
        const index = Math.floor(Math.random() * Emojis.length);
        return Emojis[index];
    }, []);

    return (
        <Container>
            <Toggle
                labelLeft='Light'
                labelRight='Dark'
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Olá, {Emoji}</Welcome>
                <UserName>Marcelo Faria</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;