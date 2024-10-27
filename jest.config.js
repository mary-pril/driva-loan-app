module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/server/**/?(*.)+(test).[jt]s?(x)'],
    transform: {
        '^.+\\.[tj]sx?$': [
          'ts-jest',
          {
            isolatedModules: true
          }
        ]
      } ,
  };