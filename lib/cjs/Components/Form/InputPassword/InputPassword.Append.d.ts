/// <reference types="react" />
export interface AppendProps {
    hidden: boolean;
    set: (e: boolean) => void;
}
export default function Append(props: AppendProps): JSX.Element | null;
