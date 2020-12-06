# Test Driven Development(TDD) Tutorial

## TLDR;

1. Write TEST.ts
2. Make it RED
3. Make it GREEN

## Create a project

```sh
# Create a project directory
# init nodejs project
yarn init -y

# add basic packages
yarn add --dev typescript jest

# add babel to support ts in jest
yarn add --dev babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest

# init configuration for jest and typescript
npx tsc --init
npx jest --init
cat <<EOF > babel.config.js
// babel.config.js
module.exports = {
  presets: [[
   '@babel/preset-env', { targets: { node: 'current', }, },
   '@babel/preset-typescript',
  ],],
}
EOF
```

## Write TEST.ts

```sh
# Write TEST.ts
mkdir src
# app.test.ts
cat <<EOF > src/app.test.ts
import app from './app';

describe('app', () => {
    it('should not be null', () => {
        expect(app).not.toBe(null);
    });
});
EOF
```

## Make it RED

```sh
# Make it RED
# app.test.ts
cat <<EOF > src/app.ts
export default null;
EOF

# run test
yarn test
```

## Make it GREEN

```sh
# Make it GREEN
# app.test.ts
cat <<EOF > src/app.ts
export default {};
EOF

# run test
yarn test
```

## Real-app using Gatsby

### create an demo project

```sh
npx gatsby new eg-gatsby
cd eg-gatsby
yarn add --dev typescript jest ts-jest
yarn add --dev babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest enzyme enzyme-adapter-react-16 @types/enzyme @types/enzyme-adapter-react-16
npx tsc --init
npx jest --init
cat <<EOF > babel.config.js
// babel.config.js
module.exports = {
  presets: [[
   '@babel/preset-env', { targets: { node: 'current', }, },
   '@babel/preset-typescript',
  ],],
}
EOF
```

