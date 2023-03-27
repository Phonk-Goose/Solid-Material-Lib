import { Component, ComponentProps } from 'solid-js'

export interface ButtonProps {
    label: string | 'button'
}

const Button: Component<ButtonProps> = (props) => {
    return (
        <button class="bg-purple-700">
            {props.label}
        </button>
    );
}

export default Button;