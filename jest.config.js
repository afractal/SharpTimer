
module.exports = {
    displayName: {
        name: "SHARP_TIMER",
        color: "magenta"
    },
    testEnvironment: "node",
    roots: ['<rootDir>/src'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: { '^.+\\.tsx?$': 'ts-jest' }
};
