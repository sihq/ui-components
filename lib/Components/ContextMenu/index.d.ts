/// <reference types="react" />
declare const _default: {
    Context: ({ children }: import("./ContextMenu").ContextMenuProps) => JSX.Element;
    Menu: ({ children }: import("./Menu").MenuProps) => JSX.Element | null;
    Item: ({ children, icon, label, route }: import("./Item").ItemProps) => JSX.Element;
    Activator: ({ children, className }: import("./Activator").ActivatorProps) => JSX.Element;
};
export default _default;
