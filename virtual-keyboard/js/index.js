/* eslint-disable no-use-before-define */
import buttons from './buttons.js';

/* const buttons = [
  {
    type: 'other',
    content: { ru: 'Esc', en: 'Esc' },
    altContent: { ru: 'Esc', en: 'Esc' },
    code: 'Escape',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F1', en: 'F1' },
    altContent: { ru: 'F1', en: 'F1' },
    code: 'F1',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F2', en: 'F2' },
    altContent: { ru: 'F2', en: 'F2' },
    code: 'F2',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F4', en: 'F4' },
    altContent: { ru: 'F4', en: 'F4' },
    code: 'F4',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F5', en: 'F5' },
    altContent: { ru: 'F5', en: 'F5' },
    code: 'F5',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F6', en: 'F6' },
    altContent: { ru: 'F6', en: 'F6' },
    code: 'F6',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F7', en: 'F7' },
    altContent: { ru: 'F7', en: 'F7' },
    code: 'F7',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F8', en: 'F8' },
    altContent: { ru: 'F8', en: 'F8' },
    code: 'F8',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F9', en: 'F9' },
    altContent: { ru: 'F9', en: 'F9' },
    code: 'F9',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F10', en: 'F10' },
    altContent: { ru: 'F10', en: 'F10' },
    code: 'F10',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F11', en: 'F11' },
    altContent: { ru: 'F11', en: 'F11' },
    code: 'F11',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'F12', en: 'F12' },
    altContent: { ru: 'F12', en: 'F12' },
    code: 'F12',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'lang', en: 'lang' },
    altContent: { ru: 'lang', en: 'lang' },
    code: 'lang',
    width: 'normal',
    row: 1,
  },
  {
    type: 'other',
    content: { ru: 'ё', en: '`' },
    altContent: { ru: 'ё', en: '~' },
    code: 'Backquote',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '1', en: '1' },
    altContent: { ru: '!', en: '!' },
    code: 'Digit1',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '2', en: '2' },
    altContent: { ru: '"', en: '@' },
    code: 'Digit2',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '3', en: '3' },
    altContent: { ru: '№', en: '#' },
    code: 'Digit3',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '4', en: '4' },
    altContent: { ru: ';', en: '$' },
    code: 'Digit4',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '5', en: '5' },
    altContent: { ru: '%', en: '%' },
    code: 'Digit5',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '6', en: '6' },
    altContent: { ru: ':', en: '^' },
    code: 'Digit6',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '7', en: '7' },
    altContent: { ru: '?', en: '&' },
    code: 'Digit7',
    width: 'normal',
    row: 1,
  },
  {
    type: 'digits',
    content: { ru: '8', en: '8' },
    altContent: { ru: '*', en: '*' },
    code: 'Digit8',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '9', en: '9' },
    altContent: { ru: '(', en: '(' },
    code: 'Digit9',
    width: 'normal',
    row: 2,
  },
  {
    type: 'digits',
    content: { ru: '0', en: '0' },
    altContent: { ru: ')', en: ')' },
    code: 'Digit0',
    width: 'normal',
    row: 2,
  },
  {
    type: 'other',
    content: { ru: '-', en: '-' },
    altContent: { ru: '_', en: '_' },
    code: 'Minus',
    width: 'normal',
    row: 2,
  },
  {
    type: 'other',
    content: { ru: '=', en: '=' },
    altContent: { ru: '+', en: '+' },
    code: 'Equal',
    width: 'normal',
    row: 2,
  },
  {
    type: 'functional',
    content: { ru: 'backspace', en: 'backspace' },
    altContent: { ru: 'backspace', en: 'backspace' },
    code: 'Delete',
    width: 'medium',
    row: 3,
  },
  {
    type: 'functional',
    content: { ru: 'Tab', en: 'Tab' },
    altContent: { ru: 'Tab', en: 'Tab' },
    code: 'Tab',
    width: 'medium',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'й', en: 'q' },
    altContent: { ru: 'й', en: 'q' },
    code: 'KeyQ',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'ц', en: 'w' },
    altContent: { ru: 'ц', en: 'w' },
    code: 'KeyW',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'у', en: 'e' },
    altContent: { ru: 'у', en: 'e' },
    code: 'KeyE',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'к', en: 'r' },
    altContent: { ru: 'к', en: 'r' },
    code: 'KeyR',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'е', en: 't' },
    altContent: { ru: 'е', en: 't' },
    code: 'KeyT',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'н', en: 'y' },
    altContent: { ru: 'н', en: 'y' },
    code: 'KeyY',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'г', en: 'u' },
    altContent: { ru: 'г', en: 'u' },
    code: 'KeyU',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'ш', en: 'i' },
    altContent: { ru: 'ш', en: 'i' },
    code: 'KeyI',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'щ', en: 'o' },
    altContent: { ru: 'щ', en: 'o' },
    code: 'KeyO',
    width: 'normal',
    row: 3,
  },
  {
    type: 'letter',
    content: { ru: 'з', en: 'p' },
    altContent: { ru: 'з', en: 'p' },
    code: 'KeyP',
    width: 'normal',
    row: 3,
  },
  {
    type: 'other',
    content: { ru: 'х', en: '[' },
    altContent: { ru: 'х', en: '{' },
    code: 'BracketLeft',
    width: 'normal',
    row: 3,
  },
  {
    type: 'other',
    content: { ru: 'ъ', en: ']' },
    altContent: { ru: 'ъ', en: '}' },
    code: 'BracketRight',
    width: 'normal',
    row: 3,
  },
  {
    type: 'other',
    content: { ru: '\\', en: '\\' },
    altContent: { ru: '/', en: '|' },
    code: 'Backslash',
    width: 'normal',
    row: 3,
  },
  {
    type: 'functional',
    content: { ru: 'Caps Lock', en: 'Caps Lock' },
    altContent: { ru: 'Caps Lock', en: 'Caps Lock' },
    code: 'CapsLock',
    width: 'wide',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'ф', en: 'a' },
    altContent: { ru: 'ф', en: 'a' },
    code: 'KeyA',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'ы', en: 's' },
    altContent: { ru: 'ы', en: 's' },
    code: 'KeyS',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'в', en: 'd' },
    altContent: { ru: 'в', en: 'd' },
    code: 'KeyD',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'а', en: 'f' },
    altContent: { ru: 'а', en: 'f' },
    code: 'KeyF',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'п', en: 'g' },
    altContent: { ru: 'п', en: 'g' },
    code: 'KeyG',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'р', en: 'h' },
    altContent: { ru: 'р', en: 'h' },
    code: 'KeyH',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'о', en: 'j' },
    altContent: { ru: 'о', en: 'j' },
    code: 'KeyJ',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'л', en: 'k' },
    altContent: { ru: 'л', en: 'k' },
    code: 'KeyK',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'д', en: 'l' },
    altContent: { ru: 'д', en: 'l' },
    code: 'KeyL',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'ж', en: ';' },
    altContent: { ru: 'ж', en: ':' },
    code: 'Semicolon',
    width: 'normal',
    row: 4,
  },
  {
    type: 'letter',
    content: { ru: 'э', en: '\'' },
    altContent: { ru: 'э', en: '"' },
    code: 'Quote',
    width: 'normal',
    row: 4,
  },
  {
    type: 'functional',
    content: { ru: 'Enter', en: 'Enter' },
    altContent: { ru: 'Enter', en: 'Enter' },
    code: 'Enter',
    width: 'wideplus',
    row: 4,
  },
  {
    type: 'functional',
    content: { ru: 'Shift', en: 'Shift' },
    altContent: { ru: 'Shift', en: 'Shift' },
    code: 'ShiftLeft',
    width: 'wideplus',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'я', en: 'z' },
    altContent: { ru: 'я', en: 'z' },
    code: 'KeyZ',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'ч', en: 'x' },
    altContent: { ru: 'ч', en: 'x' },
    code: 'KeyX',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'с', en: 'c' },
    altContent: { ru: 'с', en: 'c' },
    code: 'KeyC',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'м', en: 'v' },
    altContent: { ru: 'м', en: 'v' },
    code: 'KeyV',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'и', en: 'b' },
    altContent: { ru: 'и', en: 'b' },
    code: 'KeyB',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'т', en: 'n' },
    altContent: { ru: 'т', en: 'n' },
    code: 'KeyN',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'ь', en: 'm' },
    altContent: { ru: 'ь', en: 'm' },
    code: 'KeyM',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'б', en: ',' },
    altContent: { ru: 'б', en: '<' },
    code: 'Comma',
    width: 'normal',
    row: 5,
  },
  {
    type: 'letter',
    content: { ru: 'ю', en: '.' },
    altContent: { ru: 'ю', en: '>' },
    code: 'Period',
    width: 'normal',
    row: 5,
  },
  {
    type: 'other',
    content: { ru: '.', en: '/' },
    altContent: { ru: ',', en: '?' },
    code: 'Slash',
    width: 'normal',
    row: 5,
  },
  {
    type: 'functional',
    content: { ru: 'Shift', en: 'Shift' },
    altContent: { ru: 'Shift', en: 'Shift' },
    code: 'ShiftRight',
    width: 'normal',
    row: 5,
  },
  {
    type: 'functional',
    content: { ru: 'Ctrl', en: 'Ctrl' },
    altContent: { ru: 'Ctrl', en: 'Ctrl' },
    code: 'ControlLeft',
    width: 'medium',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: 'Win', en: 'Win' },
    altContent: { ru: 'Win', en: 'Win' },
    code: 'MetaLeft',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: 'Alt', en: 'Alt' },
    altContent: { ru: 'Alt', en: 'Alt' },
    code: 'AltLeft',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '&nbsp;', en: '&nbsp;' },
    altContent: { ru: '&nbsp;', en: '&nbsp;' },
    code: 'Space',
    width: 'overwide',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: 'Alt', en: 'Alt' },
    altContent: { ru: 'Alt', en: 'Alt' },
    code: 'AltRight',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: 'Ctrl', en: 'Ctrl' },
    altContent: { ru: 'Ctrl', en: 'Ctrl' },
    code: 'ControlRight',
    width: 'medium',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '◄', en: '◄' },
    altContent: { ru: '◄', en: '◄' },
    code: 'ArrowLeft',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '▲', en: '▲' },
    altContent: { ru: '▲', en: '▲' },
    code: 'ArrowUp',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '▼', en: '▼' },
    altContent: { ru: '▼', en: '▼' },
    code: 'ArrowDown',
    width: 'normal',
    row: 6,
  },
  {
    type: 'functional',
    content: { ru: '►', en: '►' },
    altContent: { ru: '►', en: '►' },
    code: 'ArrowRight',
    width: 'normal',
    row: 6,
  },
]; */

const cap = document.createElement('div');
const textarea = document.createElement('textarea');

const KeyboardButtons = (num, row) => {
  const key = document.createElement('div');
  key.classList.add('button');
  if (cap.classList.contains('active')) {
    key.textContent = buttons[num].content.en.toUpperCase();
  } else {
    key.textContent = buttons[num].content.en;
  }
  key.onclick = () => {
    if (cap.classList.contains('active')) {
      textarea.focus();
      textarea.value += buttons[num].content.en.toUpperCase();
    } else {
      textarea.focus();
      textarea.value += buttons[num].content.en;
    }
  };
  row.append(key);
};

const KeyboardButtonsRu = (num, row) => {
  const key = document.createElement('div');
  key.classList.add('button');
  if (cap.classList.contains('active')) {
    key.textContent = buttons[num].content.ru.toUpperCase();
  } else {
    key.textContent = buttons[num].content.ru;
  }
  key.onclick = () => {
    if (cap.classList.contains('active')) {
      textarea.focus();
      textarea.value += buttons[num].content.ru.toUpperCase();
    } else {
      textarea.focus();
      textarea.value += buttons[num].content.ru;
    }
  };
  row.append(key);
};

const functionalButtons = (num, row, classes) => {
  const key = document.createElement('div');
  key.classList.add(classes);
  key.textContent = buttons[num].content.en;
  key.onclick = () => {
    textarea.focus();
  };
  row.append(key);
};

const KeyDelet = (num, row) => {
  const key = document.createElement('div');
  key.classList.add('delete');
  key.textContent = buttons[num].content.en;
  key.onclick = () => {
    textarea.value = textarea.value.slice(0, -1);
  };
  row.append(key);
};

const KeyTab = (num, row) => {
  const key = document.createElement('div');
  key.classList.add('tab');
  key.textContent = buttons[num].content.en;
  key.onclick = () => {
    textarea.focus();
    textarea.value += '\t';
  };
  row.prepend(key);
};
const KeyEnter = (num, row) => {
  const key = document.createElement('div');
  key.classList.add('return');
  key.textContent = buttons[num].content.en;
  key.onclick = () => {
    textarea.focus();
    textarea.value += '\n';
  };
  row.append(key);
};

/* const KeyCtrl = (num, row) => { //---------------
  const key = document.createElement('div');
  // key.classList.add('button_buttom');
  key.classList.add('ctrl');
  key.textContent = buttons[num].content.en;
  key.onclick = () => {
    textarea.focus();
  };
  row.append(key);
}; */
/* const KeyWin = (num, row) => { //---------------
  const key = document.createElement('div');
  key.classList.add('button_buttom');
  key.classList.add('win');
  key.textContent = buttons[num].content.en;
  key.onclick = () => {
    textarea.focus();
  };
  row.append(key);
}; */
/* const KeyAlt = (num, row) => { //---------------
  const key = document.createElement('div');
  key.classList.add('button_buttom');
  key.classList.add('alt');
  key.textContent = buttons[num].content.en;
  key.onclick = () => {
    textarea.focus();
  };
  row.append(key);
}; */
const KeySpace = (num, row) => {
  const key = document.createElement('div');
  key.classList.add('button_buttom');
  key.classList.add('space');
  key.onclick = () => {
    textarea.focus();
    textarea.value += ' ';
  };
  row.append(key);
};
const KeyarrowLeft = (num, row) => {
  const key = document.createElement('div');
  key.classList.add('arrow_left');
  key.classList.add('arrow');
  key.textContent = buttons[num].content.en;
  key.onclick = () => {
    textarea.focus();
    textarea.value += '◄';
  };
  row.append(key);
};
const KeyarrowRight = (num, row) => {
  const key = document.createElement('div');
  key.classList.add('arrow_right');
  key.classList.add('arrow');
  key.textContent = buttons[num].content.en;
  key.onclick = () => {
    textarea.focus();
    textarea.value += '►';
  };
  row.append(key);
};
const KeyarrowTop = (num, row) => {
  const key = document.createElement('div');
  key.classList.add('arrow_top');
  key.classList.add('arrow');
  key.textContent = buttons[num].content.en;
  key.onclick = () => {
    textarea.focus();
    textarea.value += '▲';
  };
  row.append(key);
};
const KeyarrowBottom = (num, row) => {
  const key = document.createElement('div');
  key.classList.add('arrow_bottom');
  key.classList.add('arrow');
  key.textContent = buttons[num].content.en;
  key.onclick = () => {
    textarea.focus();
    textarea.value += '▼';
  };
  row.append(key);
};

const arrowsTopBot = document.createElement('div');
arrowsTopBot.classList.add('arrows_top_bot');

const KeyCapsLock = (num, row) => {
  cap.classList.add('button');
  cap.classList.add('caps_lock');
  cap.textContent = buttons[num].content.en;
  const lamp = document.createElement('div');
  lamp.classList.add('lamp');
  cap.prepend(lamp);
  cap.onclick = () => {
    textarea.focus();
    if (cap.classList.contains('active')) {
      cap.classList.remove('active');
      if (keyLanguage.classList.contains('activeLang')) {
        createButtonsRu();
      } else {
        createButtons();
      }
    } else {
      cap.classList.add('active');
      if (keyLanguage.classList.contains('activeLang')) {
        createButtonsRu();
      } else {
        createButtons();
      }
    }
  };
  row.prepend(cap);
};
const globus = document.createElement('img');
const keyLanguage = document.createElement('div');
const keyLang = (num, row) => {
  keyLanguage.classList.add('lang');
  globus.classList.add('globus');
  globus.src = '../../virtual-keyboard/assets/image/lang.png';
  keyLanguage.append(globus);
  // keyLanguage.textContent = buttons[num].content.en;
  keyLanguage.onclick = () => {
    textarea.focus();
    if (keyLanguage.classList.contains('activeLang')) {
      keyLanguage.classList.remove('activeLang');
      createButtons();
      localStorage.removeItem('lang');
    } else {
      keyLanguage.classList.add('activeLang');
      createButtonsRu();
      localStorage.setItem('lang', 'activeLang');
    }
  };
  row.append(keyLanguage);
};


 const shiftKeyBoards = (num, row) => {
  const key = document.createElement('div');
  key.classList.add('button');
  if (cap.classList.contains('active')) {
    if (keyLanguage.classList.contains('activeLang')) {
      key.textContent = buttons[num].altContent.ru;
    } else {
      key.textContent = buttons[num].altContent.en;
    }
  } else if (keyLanguage.classList.contains('activeLang')) {
    key.textContent = buttons[num].altContent.ru.toUpperCase();
  } else {
    key.textContent = buttons[num].altContent.en.toUpperCase();
  }

  key.onclick = () => {
    if (cap.classList.contains('active')) {
      textarea.focus();
      if (keyLanguage.classList.contains('activeLang')) {
        textarea.value += buttons[num].altContent.ru;
      } else {
        textarea.value += buttons[num].altContent.en;
      }
    } else {
      textarea.focus();
      if (keyLanguage.classList.contains('activeLang')) {
        textarea.value += buttons[num].altContent.ru.toUpperCase();
      } else {
        textarea.value += buttons[num].altContent.en.toUpperCase();
      }
    }
    if (keyLanguage.classList.contains('activeLang')) {
      createButtonsRu();
    } else {
      createButtons();
    }
  }; 
  row.append(key);
}; 

let keyShift;
const KeyShift = (num, row) => {
  keyShift = document.createElement('button');
  keyShift.classList.add('shift');
  keyShift.textContent = buttons[num].content.en;
  keyShift.setAttribute('tabindex', '1');
  keyShift.focus();
  keyShift.addEventListener('mousedown', () => {
    keyShift.focus();
    console.log('hi');
    createButtonsShift();
    keyShift.classList.add('shift');
  });

  keyShift.addEventListener('mouseout', () => {
    keyShift.focus();
    console.log('by');
    
/*     setTimeout( () => {  
       if (keyLanguage.classList.contains('activeLang')) {
      createButtonsRu();
    } else {
      createButtons();
    }}
    , 1500) */
 
  });

  row.append(keyShift);
};

const row1 = document.createElement('div');
const row2 = document.createElement('div');
const row3 = document.createElement('div');
const row4 = document.createElement('div');
const row5 = document.createElement('div');
const row6 = document.createElement('div');

const createkeyBoard = () => {
  const root = document.createElement('div');
  root.id = 'root';
  const cam = document.createElement('div');
  cam.classList.add('cam');
  const blink = document.createElement('div');
  blink.id = 'blink';
  const inputArea = document.createElement('div');
  inputArea.classList.add('input_area');
  textarea.classList.add('textarea');
  textarea.textContent = 'Hello, World!';
  inputArea.append(textarea);
  const keyBoard = document.createElement('div');
  keyBoard.classList.add('keyboard');
  const keyWrapper = document.createElement('div');
  keyWrapper.classList.add('key_wrapper');
  row1.classList.add('row_1');
  row2.classList.add('row_2');
  row3.classList.add('row_3');
  row4.classList.add('row_4');
  row5.classList.add('row_5');
  row6.classList.add('row_6');
  document.body.append(root);
  root.append(cam);
  root.append(blink);
  root.append(inputArea);
  root.append(keyBoard);
  keyBoard.append(keyWrapper);
  keyWrapper.append(row1);
  keyWrapper.append(row2);
  keyWrapper.append(row3);
  keyWrapper.append(row4);
  keyWrapper.append(row5);
  keyWrapper.append(row6);
};
createkeyBoard();

const createButtons = () => {
  row1.innerHTML = '';
  row2.innerHTML = '';
  row3.innerHTML = '';
  row4.innerHTML = '';
  row5.innerHTML = '';
  row6.innerHTML = '';
  arrowsTopBot.innerHTML = '';
  globus.innerHTML = '';
  KeyShift(55, row5);
  for (let i = 0; i < buttons.length; i += 1) {
    if (i >= 0 && i < 13) {
      functionalButtons(i, row1, 'button_first');
    } else if (i >= 14 && i < 27 && i !== 27) {
      KeyboardButtons(i, row2, 'ru');
    } else if (i >= 29 && i < 42) {
      KeyboardButtons(i, row3);
    } else if (i >= 43 && i < 54) {
      KeyboardButtons(i, row4);
    } else if (i >= 56 && i < 66) {
      KeyboardButtons(i, row5);
    }
  }
  keyLang(13, row1);
  KeyDelet(27, row2);
  KeyTab(28, row3);
  KeyCapsLock(42, row4);
  KeyEnter(54, row4);
  KeyShift(66, row5);
  functionalButtons(67, row6, 'button_buttom');
  functionalButtons(68, row6, 'button_buttom');
  functionalButtons(69, row6, 'button_buttom');
  KeySpace(70, row6);
  functionalButtons(71, row6, 'button_buttom');
  functionalButtons(72, row6, 'button_buttom');
  KeyarrowLeft(73, row6);
  row6.append(arrowsTopBot);
  KeyarrowTop(74, arrowsTopBot);
  KeyarrowBottom(75, arrowsTopBot);
  KeyarrowRight(76, row6);
  textarea.focus();
};



const createButtonsRu = () => {
  row1.innerHTML = '';
  row2.innerHTML = '';
  row3.innerHTML = '';
  row4.innerHTML = '';
  row5.innerHTML = '';
  row6.innerHTML = '';
  globus.innerHTML = '';
  arrowsTopBot.innerHTML = '';
  KeyShift(55, row5);
  for (let i = 0; i < buttons.length; i += 1) {
    if (i >= 0 && i < 13) {
      functionalButtons(i, row1, 'button_first');
    } else if (i >= 14 && i < 27 && i !== 27) {
      KeyboardButtonsRu(i, row2, 'ru');
    } else if (i >= 29 && i < 42) {
      KeyboardButtonsRu(i, row3);
    } else if (i >= 43 && i < 54) {
      KeyboardButtonsRu(i, row4);
    } else if (i >= 56 && i < 66) {
      KeyboardButtonsRu(i, row5);
    }
  }
  keyLang(13, row1);
  KeyDelet(27, row2);
  KeyTab(28, row3);
  KeyCapsLock(42, row4);
  KeyEnter(54, row4);
  KeyShift(66, row5);
  functionalButtons(67, row6, 'button_buttom');
  functionalButtons(68, row6, 'button_buttom');
  functionalButtons(69, row6, 'button_buttom');
  KeySpace(70, row6);
  functionalButtons(71, row6, 'button_buttom');
  functionalButtons(72, row6, 'button_buttom');
  KeyarrowLeft(73, row6);
  row6.append(arrowsTopBot);
  KeyarrowTop(74, arrowsTopBot);
  KeyarrowBottom(75, arrowsTopBot);
  KeyarrowRight(76, row6);
  textarea.focus();
};

if (localStorage.getItem('lang')) {
  keyLanguage.classList.add('activeLang');
  createButtonsRu();
} else {
  createButtons();
  // keyLanguage.classList.remove('activeLang');
}

 const createButtonsShift = () => {
  row1.innerHTML = '';
  row2.innerHTML = '';
  row3.innerHTML = '';
  row4.innerHTML = '';
  row5.innerHTML = '';
  row6.innerHTML = '';
  arrowsTopBot.innerHTML = '';
  globus.innerHTML = '';
  KeyShift(55, row5);
  for (let i = 0; i < buttons.length; i += 1) {
    if (i >= 0 && i < 13) {
      functionalButtons(i, row1, 'button_first');
    } else if (i >= 14 && i < 27 && i !== 27) {
      shiftKeyBoards(i, row2, 'ru');
    } else if (i >= 29 && i < 42) {
      shiftKeyBoards(i, row3);
    } else if (i >= 43 && i < 54) {
      shiftKeyBoards(i, row4);
    } else if (i >= 56 && i < 66) {
      shiftKeyBoards(i, row5);
    }
  }
  keyLang(13, row1);
  KeyDelet(27, row2);
  KeyTab(28, row3);
  KeyCapsLock(42, row4);
  KeyEnter(54, row4);
  KeyShift(66, row5);
  functionalButtons(67, row6, 'button_buttom');
  functionalButtons(68, row6, 'button_buttom');
  functionalButtons(69, row6, 'button_buttom');
  KeySpace(70, row6);
  functionalButtons(71, row6, 'button_buttom');
  functionalButtons(72, row6, 'button_buttom');
  KeyarrowLeft(73, row6);
  row6.append(arrowsTopBot);
  KeyarrowTop(74, arrowsTopBot);
  KeyarrowBottom(75, arrowsTopBot);
  KeyarrowRight(76, row6);
  // textarea.focus();
}; 

const but = document.querySelectorAll('.button');
const space = document.querySelector('.space');
const deleteBut = document.querySelector('.delete');
const returnBut = document.querySelector('.return');
const arrowl = document.querySelector('.arrow_left');
const arrowR = document.querySelector('.arrow_right');
const arrowTop = document.querySelector('.arrow_top');
const arrowBottom = document.querySelector('.arrow_bottom');
const shifts = document.querySelectorAll('.shift');
const tab = document.querySelector('.tab');
const bottonsButtom = document.querySelectorAll('.button_buttom');
const buttonFirst = document.querySelectorAll('.button_first');

const animation = (event) => {
  console.log('code: ', event.code);
  if (event.code === 'KeyZ') {
    but[38].classList.add('activebut');
    setTimeout(() => {
      but[38].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyX') {
    but[39].classList.add('activebut');
    setTimeout(() => {
      but[39].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyC') {
    but[40].classList.add('activebut');
    setTimeout(() => {
      but[40].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyV') {
    but[41].classList.add('activebut');
    setTimeout(() => {
      but[41].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyB') {
    but[42].classList.add('activebut');
    setTimeout(() => {
      but[42].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyN') {
    but[43].classList.add('activebut');
    setTimeout(() => {
      but[43].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyM') {
    but[44].classList.add('activebut');
    setTimeout(() => {
      but[44].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Comma') {
    but[45].classList.add('activebut');
    setTimeout(() => {
      but[45].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Period') {
    but[46].classList.add('activebut');
    setTimeout(() => {
      but[46].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Slash') {
    but[47].classList.add('activebut');
    setTimeout(() => {
      but[47].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Backquote') {
    but[0].classList.add('activebut');
    setTimeout(() => {
      but[0].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Digit1') {
    but[1].classList.add('activebut');
    setTimeout(() => {
      but[1].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Digit2') {
    but[2].classList.add('activebut');
    setTimeout(() => {
      but[2].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Digit3') {
    but[3].classList.add('activebut');
    setTimeout(() => {
      but[3].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Digit4') {
    but[4].classList.add('activebut');
    setTimeout(() => {
      but[4].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Digit5') {
    but[5].classList.add('activebut');
    setTimeout(() => {
      but[5].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Digit6') {
    but[6].classList.add('activebut');
    setTimeout(() => {
      but[6].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Digit7') {
    but[7].classList.add('activebut');
    setTimeout(() => {
      but[7].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Digit8') {
    but[8].classList.add('activebut');
    setTimeout(() => {
      but[8].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Digit9') {
    but[9].classList.add('activebut');
    setTimeout(() => {
      but[9].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Digit0') {
    but[10].classList.add('activebut');
    setTimeout(() => {
      but[10].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Minus') {
    but[11].classList.add('activebut');
    setTimeout(() => {
      but[11].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Equal') {
    but[12].classList.add('activebut');
    setTimeout(() => {
      but[12].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Backspace') {
    deleteBut.classList.add('activebut');
    setTimeout(() => {
      deleteBut.classList.remove('activebut');
    }, 500);
  }

  if (event.code === 'KeyQ') {
    but[13].classList.add('activebut');
    setTimeout(() => {
      but[13].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyW') {
    but[14].classList.add('activebut');
    setTimeout(() => {
      but[14].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyE') {
    but[15].classList.add('activebut');
    setTimeout(() => {
      but[15].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyR') {
    but[16].classList.add('activebut');
    setTimeout(() => {
      but[16].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyT') {
    but[17].classList.add('activebut');
    setTimeout(() => {
      but[17].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyY') {
    but[18].classList.add('activebut');
    setTimeout(() => {
      but[18].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyU') {
    but[19].classList.add('activebut');
    setTimeout(() => {
      but[19].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyI') {
    but[20].classList.add('activebut');
    setTimeout(() => {
      but[20].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyO') {
    but[21].classList.add('activebut');
    setTimeout(() => {
      but[21].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyP') {
    but[22].classList.add('activebut');
    setTimeout(() => {
      but[22].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'BracketLeft') {
    but[23].classList.add('activebut');
    setTimeout(() => {
      but[23].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'BracketRight') {
    but[24].classList.add('activebut');
    setTimeout(() => {
      but[24].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Backslash') {
    but[25].classList.add('activebut');
    setTimeout(() => {
      but[25].classList.remove('activebut');
    }, 500);
  }

  if (event.code === 'KeyA') {
    but[27].classList.add('activebut');
    setTimeout(() => {
      but[27].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyS') {
    but[28].classList.add('activebut');
    setTimeout(() => {
      but[28].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyD') {
    but[29].classList.add('activebut');
    setTimeout(() => {
      but[29].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyF') {
    but[30].classList.add('activebut');
    setTimeout(() => {
      but[30].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyG') {
    but[31].classList.add('activebut');
    setTimeout(() => {
      but[31].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyH') {
    but[32].classList.add('activebut');
    setTimeout(() => {
      but[32].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyJ') {
    but[33].classList.add('activebut');
    setTimeout(() => {
      but[33].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyK') {
    but[34].classList.add('activebut');
    setTimeout(() => {
      but[34].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'KeyL') {
    but[35].classList.add('activebut');
    setTimeout(() => {
      but[35].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Semicolon') {
    but[36].classList.add('activebut');
    setTimeout(() => {
      but[36].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Quote') {
    but[37].classList.add('activebut');
    setTimeout(() => {
      but[37].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Space') {
    space.classList.add('activebut');
    setTimeout(() => {
      space.classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Enter') {
    returnBut.classList.add('activebut');
    setTimeout(() => {
      returnBut.classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'ArrowLeft') {
    arrowl.classList.add('activebut');
    setTimeout(() => {
      arrowl.classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'ArrowRight') {
    arrowR.classList.add('activebut');
    setTimeout(() => {
      arrowR.classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'ArrowUp') {
    arrowTop.classList.add('activebut');
    setTimeout(() => {
      arrowTop.classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'ArrowDown') {
    arrowBottom.classList.add('activebut');
    setTimeout(() => {
      arrowBottom.classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'ShiftLeft') {
    shifts[0].classList.add('activebut');
    createButtonsShift();
    keyShift.classList.add('shift');
    setTimeout(() => {
      /* if (keyLanguage.classList.contains('activeLang')) {
        createButtonsRu();
      } else {
        createButtons();
      } */
      shifts[0].classList.remove('activebut');
    }, 1500);
  }
  if (event.code === 'ShiftRight') {
    shifts[1].classList.add('activebut');
    setTimeout(() => {
      shifts[1].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'CapsLock') {
    cap.classList.add('activebut');
    if (cap.classList.contains('active')) {
      cap.classList.remove('active');
      if (keyLanguage.classList.contains('activeLang')) {
        createButtonsRu();
      } else {
        createButtons();
      }
    } else {
      cap.classList.add('active');
      if (keyLanguage.classList.contains('activeLang')) {
        createButtonsRu();
      } else {
        createButtons();
      }
    }
    setTimeout(() => {
      cap.classList.remove('activebut');
    }, 500);
  }

  if (event.code === 'Tab') {
    textarea.focus();
    tab.classList.add('activebut');
    setTimeout(() => {
      tab.classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'ControlLeft') {
    bottonsButtom[0].classList.add('activebut');
    setTimeout(() => {
      bottonsButtom[0].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'MetaLeft') {
    bottonsButtom[1].classList.add('activebut');
    setTimeout(() => {
      bottonsButtom[1].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'AltLeft') {
    bottonsButtom[2].classList.add('activebut');
    setTimeout(() => {
      bottonsButtom[2].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'AltRight') {
    bottonsButtom[4].classList.add('activebut');
    setTimeout(() => {
      bottonsButtom[4].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'ControlRight') {
    bottonsButtom[5].classList.add('activebut');
    setTimeout(() => {
      bottonsButtom[5].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'Escape') {
    buttonFirst[0].classList.add('activebut');
    setTimeout(() => {
      buttonFirst[0].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'F1') {
    buttonFirst[1].classList.add('activebut');
    setTimeout(() => {
      buttonFirst[1].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'F2') {
    buttonFirst[2].classList.add('activebut');
    setTimeout(() => {
      buttonFirst[2].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'F3') {
    buttonFirst[3].classList.add('activebut');
    setTimeout(() => {
      buttonFirst[3].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'F4') {
    buttonFirst[4].classList.add('activebut');
    setTimeout(() => {
      buttonFirst[4].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'F5') {
    buttonFirst[5].classList.add('activebut');
    setTimeout(() => {
      buttonFirst[5].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'F6') {
    buttonFirst[6].classList.add('activebut');
    setTimeout(() => {
      buttonFirst[6].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'F7') {
    buttonFirst[7].classList.add('activebut');
    setTimeout(() => {
      buttonFirst[7].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'F8') {
    buttonFirst[8].classList.add('activebut');
    setTimeout(() => {
      buttonFirst[8].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'F9') {
    buttonFirst[9].classList.add('activebut');
    setTimeout(() => {
      buttonFirst[9].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'F10') {
    buttonFirst[10].classList.add('activebut');
    setTimeout(() => {
      buttonFirst[10].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'F11') {
    buttonFirst[11].classList.add('activebut');
    setTimeout(() => {
      buttonFirst[11].classList.remove('activebut');
    }, 500);
  }
  if (event.code === 'F12') {
    buttonFirst[12].classList.add('activebut');
    setTimeout(() => {
      buttonFirst[12].classList.remove('activebut');
    }, 500);
  }
};
window.addEventListener('keydown', animation);
// bottonsButtom buttonFirst
