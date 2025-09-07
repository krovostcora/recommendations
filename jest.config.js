module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
};
