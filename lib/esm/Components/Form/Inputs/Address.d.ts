interface AddressProperties {
    id?: string;
    label?: string;
    name: string;
    type: string;
    defer?: boolean;
}
export declare const STREET_TYPE: {
    value: string;
    label: string;
}[];
declare const _default: (props: AddressProperties) => JSX.Element;
export default _default;
