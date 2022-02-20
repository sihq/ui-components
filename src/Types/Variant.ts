export const VARIANTS = [
    'primary',
    'destructive',
    'warning',
    'standard',
    'opaque',
    'opaque-rounded',
    'flat-destructive',
    'flat-primary',
] as const;
export type TypeVariant = typeof VARIANTS[number];
