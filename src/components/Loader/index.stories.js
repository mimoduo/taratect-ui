import Loader from './index';

export default { title: 'Loader' };

export const circle = () => (
  <Loader />
);

export const dots = () => (
  <Loader type="dots" />
);