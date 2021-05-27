import { error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export const infoNotice = info({
  text: 'No matches. Try again',
  autoOpen: false,
  delay: 2000,
  sticker: false,
  maxTextHeight: null,
  icon: true,
});

export const errorNotice = error({
  text: 'Error. Try again',
  autoOpen: false,
  delay: 5000,
  sticker: false,
  maxTextHeight: null,
  icon: true,
});
