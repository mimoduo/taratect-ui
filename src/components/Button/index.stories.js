import Button from './index';

export default { title: 'Button' };

export const base = () => (
  <Button>Button</Button>
);

export const startIcon = () => (
  <Button startIcon="x">Button</Button>
);

export const startIconStyled = () => (
  <Button 
    startIcon={<span>x</span>}
    startIconStyles={{
      color: 'hotpink'
    }}
  >
    Button
  </Button>
);

export const endIcon = () => (
  <Button endIcon="o">Button</Button>
);

export const endIconStyled = () => (
  <Button 
    endIcon={<span>o</span>}
    endIconStyles={{
      color: 'hotpink'
    }}
  >
    Button
  </Button>
);

export const styles = () => (
  <Button
    styles={{
      backgroundColor: 'hotpink'
    }}
  >
    Hotpink
  </Button>
);
