interface TimezoneProperties {
    id?: string;
    label?: string;
    name: string;
    type: string;
    defer?: boolean;
}
export declare const TIMEZONES: {
    value: string;
    text: string;
}[];
declare const _default: (props: TimezoneProperties) => JSX.Element;
export default _default;
