import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#ccc',
  colorSecondary: '#c79d5e',

  // UI
  appBg: '#1e1e1e',
  appContentBg: '#1e1e1e',
  appBorderColor: '#000',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Noto Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#c79d5e',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#aaa',
  barSelectedColor: '#ccc',
  barBg: '#1e1e1e',

  // Form colors
  inputBg: '#1e1e1e',
  inputBorder: '#c79d5e',
  inputTextColor: '#c79d5e',
  inputBorderRadius: 4,

  brandTitle: 'Pinnacle UI',
  brandTarget: '_self',
});