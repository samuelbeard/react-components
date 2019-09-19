import { configure } from '@storybook/react';
import '../src/scss/base.scss'

configure(require.context('../src', true, /\.stories\.js$/), module)

