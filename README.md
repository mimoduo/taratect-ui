# Taratect Skeleton UI Library

A React component library built to be accessible, robust, and ugly all to give style power to the developer. 

## Installation

```
yarn install
yarn storybook
```

### Styling

Every component created in Taratect has its css prop styled by default in taratect and overridden with an attribute for developers:

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

### Currently Developed

* Button
* Checkbox
* Div "Box"
* Grid
* Input
* Label
* Loader
* Radio
* Skeleton