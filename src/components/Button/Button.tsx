import { Component, ComponentProps } from 'solid-js'

export interface ButtonProps {
    label: string | 'button'
}

const Button: Component<ButtonProps> = (props) => {
    return (
        <button class="text-sm font-ui px-6 py-[10px] leading-[17px] bg-green-primary text-green-on-primary rounded-[100px]">
            {props.label}
        </button>
    );
}

export default Button;