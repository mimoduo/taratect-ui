# Taratect Skeleton UI Library

A React component library built to be accessible, robust, and ugly all to give style power to the developer. 

## Installation

```
yarn install
yarn storybook
```

### Styling

Every component created in Taratect has it's css prop from emotion merged with a various style props depending on the component:

```
import Button from '@taratect/Button';

...

<Button 
  endIconStyles={{
    color: 'hotpink'
  }}
  startIconStyles={{
    padding: 8
  }}
  styles={{
    background: 'hotpink'
  }}
/>
```

### Under the Frunk

* [React](https://reactjs.org/)
* [Webpack](https://webpack.js.org/)
* [Emotion](https://emotion.sh/docs/introduction)
* [Storybook](https://storybook.js.org/)