import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#ccc',
  colorSecondary: '#c79d5e',

  // UI
  appBg: '#fff',
  appContentBg: '#fff',
  appBorderColor: '#000',
  appBorderRadius: 10,

  // Typography
  fontBase: '"Noto Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#000',
  textInverseColor: '#fff',

  // Toolbar default and active colors
  barTextColor: '#333',
  barSelectedColor: '#c79d5e',
  barBg: '#fff',

  // Form colors
  inputBg: '#fff',
  inputBorder: '#777',
  inputTextColor: '#333',
  inputBorderRadius: 2,

  brandImage: 'https://static.pinnacle.us.org/2021/assets/textLogo.png',
  brandTitle: 'Pinnacle UI',
  brandTarget: '_self',
});