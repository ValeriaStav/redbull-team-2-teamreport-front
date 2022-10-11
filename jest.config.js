module.exports = {
    moduleFileExtensions: ["js", "ts", "json", "vue"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|tsx?)$",
    transform: {
        // "^.+\\.ts$": "ts-jest",
        // "^.+\\.vue$": "@vue/vue3-jest",
        // "\\.(css|less|scss)$": "<rootDir>/jest/__mocks__/styleMock.js",
    },
    moduleNameMapper: {
        "^lodash-es$": "lodash",
    },
    testEnvironment: "jsdom",
};
