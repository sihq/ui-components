export interface PasswordProperties {
    id?: string;
    label?: string;
    name: string;
    type: string;
    defer?: boolean;
}
declare const _default: (props: PasswordProperties) => JSX.Element;
export default _default;
