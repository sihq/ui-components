/// <reference types="react" />
export interface StoreProps {
    children?: JSX.Element | JSX.Element[];
    onChange?: (value: any) => void;
}
export default function Store({ children, onChange }: StoreProps): JSX.Element | null;
