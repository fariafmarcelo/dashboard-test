import React, { InputHTMLAttributes } from 'react';
import { InputComponent } from './styles';

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({ ...rest }) => {
    return (
        <InputComponent {...rest} />
    );
}

export default Input;