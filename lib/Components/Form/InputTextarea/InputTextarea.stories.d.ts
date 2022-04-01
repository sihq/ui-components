/// <reference types="react" />
import { FieldProperties } from '../Field';
export declare const InputTextarea: {
    (args: FieldProperties): JSX.Element;
    argTypes: {
        variant: {
            options: readonly ["primary", "destructive", "warning", "standard", "opaque", "opaque-rounded", "flat-destructive", "flat-primary"];
            defaultValue: string;
            control: {
                type: string;
            };
        };
        size: {
            options: readonly ["xs", "sm", "md", "lg", "xl"];
            defaultValue: string;
            control: {
                type: string;
            };
        };
        label: {
            defaultValue: string;
            control: {
                type: string;
            };
        };
        name: {
            defaultValue: string;
            control: {
                type: string;
            };
        };
    };
    storyName: string;
};
