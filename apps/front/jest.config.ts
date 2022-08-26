module.exports = {
  displayName: 'front',
  preset: '../../jest.preset.js',
  transform: {
    '^.+.vue$': 'vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/front',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'apps/front/tsconfig.spec.json',
    },
    'vue-jest': {
      tsConfig: 'apps/front/tsconfig.spec.json',
    },
  },
};
