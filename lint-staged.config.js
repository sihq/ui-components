module.exports = {
    'src/*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit', 'eslint --cache --fix'],
    'src/**/*': ['prettier --write --ignore-unknown'],
};
