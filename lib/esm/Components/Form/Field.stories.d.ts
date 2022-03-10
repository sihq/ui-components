/// <reference types="react" />
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Field from './Field';
export declare const Password: {
    (args: import("./Field").FieldProperties): JSX.Element;
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
export declare const Select: {
    (args: import("./Field").FieldProperties): JSX.Element;
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
        options: {
            defaultValue: {
                value: string;
                text: string;
            }[];
            control: {
                type: string;
            };
        };
    };
    storyName: string;
};
export declare const Search: {
    (args: import("./Field").FieldProperties): JSX.Element;
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
export declare const Timezone: {
    (args: import("./Field").FieldProperties): JSX.Element;
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
export declare const Duration: {
    (args: import("./Field").FieldProperties): JSX.Element;
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
declare const _default: ComponentMeta<(props: import("./Field").FieldProperties) => JSX.Element>;
export default _default;
export declare const Text: ComponentStory<typeof Field>;
export declare const Textarea: ComponentStory<typeof Field>;
export declare const Currency: ComponentStory<typeof Field>;
export declare const Address: ComponentStory<typeof Field>;
export declare const Phone: ComponentStory<typeof Field>;
export declare const DateOfBirth: ComponentStory<typeof Field>;
export declare const Image: ComponentStory<typeof Field>;
export declare const Editor: ComponentStory<typeof Field>;
export declare const Toggle: ComponentStory<typeof Field>;
export declare const ToggleButton: ComponentStory<typeof Field>;
export declare const Transfer: ComponentStory<typeof Field>;
