
module.exports = {
    displayName: {
        name: "SHARP_TIMER",
        color: "magenta"
    },
    testEnvironment: "node",
    roots: ['<rootDir>/src'],
    // globalSetup: "<rootDir>/globalSetup.ts",
    // globalTeardown: "<rootDir>/globalTeardown.ts",
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: { '^.+\\.tsx?$': 'ts-jest' }
};
