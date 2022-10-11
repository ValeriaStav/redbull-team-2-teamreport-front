module.exports = {
    moduleFileExtensions: ["js", "ts", "json", "vue"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|tsx?)$",
    transform: {
        "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "babel-jest",
    },
    transformIgnorePatterns: ["node_modules", "^.+\\.module\\.(css)$"],
    moduleNameMapper: {
        "^lodash-es$": "lodash",
    },
    testEnvironment: "jsdom",
};
