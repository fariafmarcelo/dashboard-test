import React from 'react';

import {
    Container,
    Header,
    Title,
    SubTitle,
    Footer,
    Message,
} from './styles';

interface IMessageBoxProps {
    title: string,
    description: string,
    footerText: string,
    icon: string,
}

const MessageBox: React.FC<IMessageBoxProps> = ({
    title,
    description,
    footerText,
    icon,
}) => {
    return (
        <Container>
            <Header>
                <Title>
                    {title}
                    <img src={icon} alt={title}/>
                </Title>
                <SubTitle>
                    {description}
                </SubTitle>
            </Header>
            <Footer>
                <Message>
                    {footerText}
                </Message>
            </Footer>
        </Container>
    );
}

export default MessageBox;