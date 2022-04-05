import { storiesOf } from '@storybook/angular';
storiesOf('Home', module)
  .add('Welcome', () => ({
    template: `<h1>Welcome to schedule manager</h1>`,
  }));