import { Component, ComponentProps } from 'solid-js'

export interface ButtonProps {
    label: string | 'button'
}

const Button: Component<ButtonProps> = (props) => {
    return (
        <button>
            {props.label}
        </button>
    );
}

export default Button;