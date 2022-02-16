import React, { ButtonHTMLAttributes } from 'react';
import { ButtonComponent } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
    return (
        <ButtonComponent {...rest} >
            {children}
        </ButtonComponent>
    );
}

export default Button;