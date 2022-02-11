import React from 'react';
import {
    Container,
    Title,
    Controllers,
    TitleContainer,
} from './styles';

interface IContentHeaderProps {
    title: string,
    lineColor: string,
    children: React.ReactNode
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
    title, lineColor, children
}) => {
    return (
        <Container>
            <TitleContainer>
                <Title lineColor={lineColor}>
                    {title}
                </Title>
            </TitleContainer>
            <Controllers>
                { children }
            </Controllers>
        </Container>
    );
}

export default ContentHeader;