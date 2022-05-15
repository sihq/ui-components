/// <reference types="react" />
import { TypeField } from '../Form/Types';
export declare type TypeBlocks = TypeBlock[];
export declare type TypeBlock = {
    id: string;
    type: string;
    data?: any;
};
export declare type TypeEditorBlocks = TypeEditorBlock[];
export declare type TypeEditorBlock = {
    name: string;
    description?: string;
    fields?: TypeField[];
    icon?: () => JSX.Element;
    preview: (data: any) => JSX.Element;
};
